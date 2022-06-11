const totalProducts = document.getElementById("totalProducts");
const cartWrapper = document.getElementById("cartWrapper");

let products = [];

const setCount = () => {
    let totalCount = 0;

    for (const i in products) {
        totalCount += products[i].count;
    }

    return totalCount;
};

const totalPrice = () => {
    let totalCart = 0;

    for (const i in products) {
        totalCart += products[i].price * products[i].count;
    }
    totalProducts.innerHTML = totalCart.toString();
    return totalCart;
};

const productsList = () => {
    //agrego el producto al cart
    cartWrapper.innerHTML = products.map((product) => {
        return `
            <div class="cart-item">
                <div class="cart-item-content">
                    <strong>${product.product}</strong>
                    <span>${product.count}u</span>
                    <span> $ ${product.price}</span>
                </div>
            </div>
        `;
    });
};

const addProduct = (product, price, count) => {
    console.log(products);
    for (const i in products) {
        //chequeo si hay algo:
        if (products[i].product === product) {
            products[i].count++;
            setCount();
            totalPrice();
            productsList();
            return;
        }
    }

    products.push({ product, price, count });
    setCount();
    totalPrice();
    productsList();
};
