(function(exports){

    class Property extends Privatizors.Private{
        constructor(value = null){
            super(object={
                _value: value
            }, handler={
                get: function(target, property, reciever){
                    if(property === "Value"){
                        return target._value
                    }
                    else{
                        return target[property];
                    }
                },
                set: function(target, property, value, receiver){
                    if(property === "Value"){
                        target._value = value;
                        return true;
                    }
                    else{
                        target[property] = value;
                        return true;
                    }
                }
            });
            const Factory = new Events.Factory();
            this.addEventListeners = this.addListeners = this.on = Factory.addEventListeners;
            this.removeEventListeners = this.removeListeners = Factory.removeEventListeners;
            this.once = Factory.once;
            this.dispatchEvent = this.emit = Factory.dispatchEvent;
        }
        set Value(newValue){
            const oldValue = this._value;
            this._value = newValue;
            if(value != oldValue){
                this.dispatchEvent('change', {details: {newValue: newValue, oldValue: oldValue, value: this._value}});
            }
            this.dispatchEvent('set', {details: {newValue: newValue, oldValue: oldValue, value: this._value}});
        }
        get Value(){
            return this._value;
        }
    }

    exports.Property = Property;

})(typeof exports === 'undefined'? this['Properties']={}: exports);
