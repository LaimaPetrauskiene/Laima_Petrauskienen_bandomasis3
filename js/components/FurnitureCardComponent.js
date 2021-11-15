class FurnitureCardComponent {
    constructor(props) {
        this.props = props;

        this.init();

    }

    init = () => {
        const { title, type, price, owner: { fullname, mobile, address, email }, location: { country, city, street }, imgSrc, onDelete } = this.props;

        this.htmlElement = document.createElement('article');
        this.htmlElement.className = "card p-3 shadow";
        this.htmlElement.innerHTML = `
        <img src="${imgSrc}"/>
        <ul>
            <li>
            <h2 class="text-danger">${title}</h2>
            </li>
            <li>
            <span>${type}</span>
            </li>
            <li>
            <span class="text-success"><strong>${price} $</strong></span>
            </li>
            <hr>
            <li>
            <span>owner: <strong>${fullname}</strong></span>
            </li>
            <li>
            <span>mobile: <strong>${mobile}</strong></span>
            </li>
            <li>
            <span>address: <strong>${address}</strong></span>
            </li>
            <li>
            <span>email: <strong>${email}</strong></span>
            </li>
            <hr>
            <li>
            <span>location: ${country}, ${city}, ${street}</span>
            </li>
        </ul>
<div class="text-center">
<button class="btn btn-danger">Ištrinti</button>
</div>`

        const btn = this.htmlElement.querySelector('.btn');
        btn.addEventListener('click', onDelete);
    }




}