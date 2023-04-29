window.addEventListener("load", (event) => {
    let skuInput = document.getElementById("sku-input");
    let skuAddButton = document.getElementById("sku-button");

    skuInput.addEventListener("keyup", (event) => {
        if (event.key.toLowerCase() === "enter")
            console.log("Enter!");
    });

    skuAddButton.addEventListener("click", (event) => {

    });

});