let basketService = undefined

window.addEventListener("load", (event) => {
    let skuInput = document.getElementById("sku-input");
    let skuAddButton = document.getElementById("sku-button");
    let basketItemsElement = document.getElementById("items");

    function renderBasket(basket = []) {
        let basketHtml = basket.map(item =>`
        <tr>
            <td>${item.sku}</td>
            <td>${item.quantity}</td>
            <td>${item.totalPrice}</td>
        </tr>`);

        basketItemsElement.innerHTML = basketHtml.join("\n");
    }

    basketService = new Basket([], renderBasket);

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