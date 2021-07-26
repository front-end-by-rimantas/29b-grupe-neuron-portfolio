class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;
        this.maxItems = 3;
        this.renderingStrategiesOptions = ['first', 'last', 'random'];
        this.renderingStrategy = this.renderingStrategiesOptions[0];

        this.init();
    }

    init() {
        //validacijos 
        if (!this.isValidSelector() ||
        !this.isValidData() ||
        !this.findTargetElement()) {
        return false;
        }

        //logika // events



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
        // this.data turi buti tikras objektas
        if (typeof this.data !== 'object' ||
            this.data === null ||
            Array.isArray(this.data)) {
            return false;
        }
        //this.data.imgPath turi buti ne tuscias tekstas
        const imgPath = this.data.imgPath;
        if (typeof imgPath !== 'string' ||
            imgPath === '') {
            return false;
        }

        // this.data.maxItems turi buti teigiamas sveikas skaicius
        const maxItems = this.data.maxItems;
        if (typeof maxItems === 'number' &&
        isFinite(maxItems) &&
        maxItems > 0 &&
        maxItems % 1 === 0) {
        this.maxItems = maxItems;
        }

        //this.data.renderingStrategy turi buti ne tuscias tekstas ir priklausyti imanomu strategiju sarasui
        const renderingStrategy = this.data.renderingStrategy;
        if (typeof renderingStrategy === 'string' &&
        renderingStrategy !== '' &&
        maxItems > 0 &&
        this.renderingStrategiesOptions.includes(renderingStrategy)) {
        this.renderingStrategy = this.renderingStrategy
        }
        
        return true;




        this.DOM = document.querySelector(this.selector);
    }

/*
    

    //this.data.renderingStrategy turi buti ne tuscias tekstas ir priklausyti imanomoms

*/
    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        /*if (this.DOM) {
            return true;
        } else {
            return false;
        }
        */
        return !!this.DOM;
    }

    

/*
    // itraukiame tik norimu elementu index'us
    const selectedIndexes = [];

    while (selectedIndexes.length < count) {
        const randomIndex = Math.floor(Math.random() * validCount);
        if (!selectedIndexes.includes(randomIndex)) {
            selectedIndexes.push(randomIndex);
        }
    }


    }

    filterContentListFirst() {
        
        if(this.renderingStrategiesOptions)
        
    }

    if()
*/
}
/*
let count = 0;
if (this.validItems.length <= this.maxItems) {
    count = this.validItems.length;
} else {
    count = this.maxItems;
}
 
let count = this.maxItems;
if (this.validItems.length <= this.maxItems) {
    count = this.validItems.length;
}
 
const count = this.validItems.length <= this.maxItems ? this.validItems.length : this.maxItems;
*/


/*
generateFilterTagsHTML() {
    let HTML = '';

    let allTags = [];
    for(const item of this.usedItems) {
        allTags = [...allTags, ...item.tags];
    }

    let uniqueTags = [];
    for(const item of allTags) {
        allTags = [...allTags, ...item.tags];
    }

    for (const 

    addEvents() {
        for (const tagDOM of this.allTagsDOM) {
            tagDOM.addEvent
        }
    }
*/



}


export { Gallery }