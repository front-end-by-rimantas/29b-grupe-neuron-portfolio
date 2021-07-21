class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();
    }

    init() {
        //validacijos
        if (!this.isValidSelector() ||
        !this.isValidData() ||
        !this.findTargetElement()) {
        return false;
        }
        return true;
    }
    
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
        this.selector === '') {
        return false;
        }
        return true;
    }
    
    isValidData() {
        this.DOM = document.querySelector(this.selector);
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            return false;
        }
        return !!this.DOM;
    }

}

export { Gallery }