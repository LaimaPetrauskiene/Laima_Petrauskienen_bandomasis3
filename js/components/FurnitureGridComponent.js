class FurnitureGridComponent{
    constructor() {
        this.init();
    }

    init = () => {
        this.htmlElement = document.createElement('div');
        this.htmlElement.innerHTML = 'Aš esu FurnitureGrid';
    }
}