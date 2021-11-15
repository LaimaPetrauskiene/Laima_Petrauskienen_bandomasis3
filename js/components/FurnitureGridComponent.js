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
            this.htmlElement.innerHTML = 'Siunčiama...';
        } else {
            this.htmlElement.innerHTML = 'parsiųsta!';
        }
    }
}