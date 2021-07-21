class Services {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        
        this.DOM = null;
        
        this.init();

        
    }
    // validacijos
    // logika
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
        this.selector === '') {
        return false;
        }
        return true;
    }
    
    isValidData() {
        if (!Array.isArray(this.data) ||
        this.data.length === 0) {
        return false;
        }
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
        let HTML = '';

        for (const item of this.data){
            if (!this.isValidDataItem(item)){
                continue;
            }

             HTML += `<div class="col-12 col md-6 col-lg-4 services">
                    <i class="icon fa fa-${item.icon}"></i>
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description}</p>
                    </div>`;
        }

        if (HTML === '') {
           console.error('ERROR: duomenu sarase nei vienas irasas nebuvo validus paslaugos objektas') 
        }


        this.DOM.innerHTML = HTML;
    }

    isValidDataItem(item) {
        
        return true;
    }

    isValidDataItem(item) {
        // tikras objektas {}
        if (typeof item !== 'object' ||
            item === null ||
            Array.isArray(item)) {
            console.warn('ERROR: paslaugos objektas turi buti tikras objektas {}');      
            return false;
            }
           
            // icon ne tuscias tekstas
        if (typeof item.icon !== 'string' ||
            item.icon === '') {
            console.warn('ERROR: paslaugos icon turi buti tikras ne tuscias tekstas');
            return false;    
            }
            
            //title ne tuscias tekstas
        if (typeof item.title !== 'string' ||
            item.title === '') {
            console.warn('ERROR: paslaugos title turi buti tikras ne tuscias tekstas');
            return false;
            }
            //description ne tuscias tekstas
        if (typeof item.description !== 'string' ||
            item.description === '') {
                console.warn('ERROR: paslaugos description turi buti tikras ne tuscias tekstas');
            return false;
            }
        return true;       
    }    

}

export { Services }