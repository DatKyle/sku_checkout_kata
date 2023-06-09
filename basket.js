const products = [
    {
        sku: "a",
        unitPrice: 50,
        specialPrice: {
            quantity: 3,
            unitPrice: 130
        }
    },
    {
        sku: "b",
        unitPrice: 30,
        specialPrice: {
            quantity: 2,
            unitPrice: 45
        }
    },
    {
        sku: "c",
        unitPrice: 20
    },
    {
        sku: "d",
        unitPrice: 15
    }
];

function Basket(basketInput, renderBasket, renderTotalPrice, renderError) {
    const basket = basketInput;

    function add(sku) {
        if(!products.find(product => product.sku === sku)){
            renderError("Invalid product.");
            return;
        }

        let foundItem = basket.find(item => item.sku === sku.toLowerCase())
        if (foundItem) {
            foundItem.quantity += 1;
        } else {
            basket.push({ sku, quantity: 1 });
        }

        calculatePrices();
    }

    function calculatePrices() {
        let totalPrice = 0;
        let pricedBasket = basket.map(item => {
            const product = products.find(prod => prod.sku === item.sku);
            let itemPrice = 0;
            if (product.specialPrice) {
                itemPrice = Math.floor(item.quantity / product.specialPrice.quantity) * product.specialPrice.unitPrice;
                itemPrice += (item.quantity % product.specialPrice.quantity) * product.unitPrice;
            } else {
                itemPrice = item.quantity * product.unitPrice;
            }
            item.totalPrice = itemPrice
            return item;
        })
        
        pricedBasket.forEach(item => totalPrice += item.totalPrice);

        renderBasket(pricedBasket);
        renderTotalPrice(totalPrice)
    }

    return {
        add: add
    }
}