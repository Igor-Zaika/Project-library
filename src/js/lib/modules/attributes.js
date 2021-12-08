import $ from '../core';

$.prototype.addAttributes = function(nameAttribute, valueAttribute){
    for (let i = 0; i < this.length; i++) {
        if (!nameAttribute && !valueAttribute) {
            return this;
        } else if (nameAttribute && !valueAttribute) {
            this[i].setAttribute(nameAttribute, '');
        } else {
            this[i].setAttribute(nameAttribute, valueAttribute);
        }
    }
    return this;
};

$.prototype.removeAttributes = function(nameAttribute){
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(nameAttribute);
    }

    return this;
};

$.prototype.toggleAttributes = function(nameAttribute, valueAttribute){
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(nameAttribute)) {
            this[i].removeAttribute(nameAttribute);
        } else if (nameAttribute && !valueAttribute) {
            this[i].setAttribute(nameAttribute, '');
        } else {
            this[i].setAttribute(nameAttribute, valueAttribute);
        }
    }
    return this;
};

$.prototype.getAttributes = function(nameAttribute){
    for (let i = 0; i < this.length; i++) {
        for (let i = 0; i < this.length; i++) {
            if (!this[i].getAttribute(nameAttribute)) {
                continue;
            }
            return this[i].getAttribute(nameAttribute);
        }
        
    }

    return this;
};

