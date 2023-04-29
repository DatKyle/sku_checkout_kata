let basketService = undefined

window.addEventListener("load", (event) => {
    basketService = new Basket([]);

    let skuInput = document.getElementById("sku-input");
    let skuAddButton = document.getElementById("sku-button");

    skuInput.addEventListener("keyup", (event) => {
        if (event.key.toLowerCase() === "enter")
            if (skuInput.value !== "")
                basketService.add(skuInput.value);
            else
                console.log("please enter a SKU.")
    });

    skuAddButton.addEventListener("click", (event) => {
        if (skuInput.value !== "")
            basketService.add(skuInput.value);
        else
            console.log("please enter a SKU.")
    });

});