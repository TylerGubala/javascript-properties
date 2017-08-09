(function(exports){

    class Property{
        constructor(value = null){
            this._value = value;
            
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
