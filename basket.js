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

function Basket(basketInput) {
    const basket = basketInput;

    function add(sku) {
        let foundItem = basket.find(item => item.sku === sku.toLowerCase())
        if (foundItem) {
            foundItem.quantity += 1;
        } else {
            basket.push({ sku, quantity: 1 });
        }
        console.log(basket);
    }

    return {
        add: add
    }
}