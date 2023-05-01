let basketService = undefined

window.addEventListener("load", (event) => {
    let skuInput = document.getElementById("sku-input");
    let skuAddButton = document.getElementById("sku-button");
    
    let basketItemsElement = document.getElementById("items");
    let totalPriceElement = document.getElementById("totalPrice");

    let errorElement = document.getElementById("error");
    let closeErrorElement = document.getElementById("closeError");

    function renderError(errorMessage) {
        errorElement.innerText = errorMessage;
        errorElement.parentElement.classList.remove("hide")
    }

    function renderBasket(basket = []) {
        let basketHtml = basket.map(item => `
        <tr>
            <td>${item.sku}</td>
            <td>${item.quantity}</td>
            <td>${item.totalPrice}</td>
        </tr>`);

        basketItemsElement.innerHTML = basketHtml.join("\n");
    }

    function renderTotalPrice(totalPrice) {
        totalPriceElement.innerText = totalPrice;
    }

    basketService = new Basket([], renderBasket, renderTotalPrice, renderError);

    skuInput.addEventListener("keyup", (event) => {
        if (event.key.toLowerCase() === "enter") {
            errorElement.parentElement.classList.add("hide")
            if (skuInput.value !== "")
                basketService.add(skuInput.value);
            else
                renderError("Please enter a SKU.")
        }
    });

    skuAddButton.addEventListener("click", () => {
        errorElement.parentElement.classList.add("hide")
        if (skuInput.value !== "")
            basketService.add(skuInput.value);
        else
            renderError("please enter a SKU.")
    });

    closeErrorElement.addEventListener("click", () => {
        errorElement.parentElement.classList.add("hide")
    })

});