class FurnitureGridComponent {
    constructor() {
        this.state = {
            loading: false,
            furniture: []
        }
        this.init();
    }

    init = () => {
        this.state.loading = true;
        this.initFetch();
        this.htmlElement = document.createElement('div');
        this.render();
    }

    initFetch = () => {
        API.fetchFurniture(
            (furniture) => {
                this.state.loading = false;
                this.saveFurniture(furniture);
            },
            (err) => {
                alert(err);
                this.state.loading = false;
                this.render();
            }
        );
    }

    saveFurniture = (furniture) => {
        this.state.furniture = furniture;
        this.state.loading = false;
        this.render();
    }

    render = () => {
        const { loading, furniture } = this.state;
        if (loading) {
            this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif"/></div>`;
        } else if (furniture.length > 0) {
            this.htmlElement.innerHTML = ``;
            const furnitureElements = furniture
                .map(x => new FurnitureCardComponent(x))
                .map(x => x.htmlElement);
            this.htmlElement.append(...furnitureElements)
        }
    }
}