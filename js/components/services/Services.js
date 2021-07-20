class Services {
    constructor(data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();

        
    }
    init() {
        if (!this.isValidSelector() ||
            !this.isValidData() ||
            !this.findTargetElement()) {
            return false;
        }
        // logika
        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
        this.selector )
        return true;
    }

    isValidData() {
        return true;
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            return false;
        }
        return true;
    }

    render() {







    }

    isValidDataItem(item) {
        if (typeof item !== 'object' ||
            item === null ||
            Array.isArray(item) ||
            typeof item.icon !== 'string' ||
            )

            // icon ne tuscias tekstas



            //title ne tuscias tekstas

            //description ne tuscias tekstas
    }

    render() {
        let HTML = '';

        for (const item of this.data )
    }


}

export { Services }