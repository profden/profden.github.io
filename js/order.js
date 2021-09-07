function enableDisable() {
    let checkboxStatusBrachio = document.getElementById('brachiosaurus').checked;
    let checkboxStatusTrike = document.getElementById('triceratops').checked;
    let checkboxStatusTrex = document.getElementById('trex').checked;
    document.getElementById('brachiosaurus-amount').disabled = !checkboxStatusBrachio;
    document.getElementById('triceratops-amount').disabled = !checkboxStatusTrike;
    document.getElementById('trex-amount').disabled = !checkboxStatusTrex;
}

function showPrice(price) {
    if (price > 5000) {
        document.getElementById("price").innerHTML = "The order total is " + price + " Ft, no shipping fee";        
    } else {
        document.getElementById("price").innerHTML = "The order total is " + price + " Ft, 500 Ft shipping fee applied (no shipping fee for order over 5000 Ft)";
    }
}

function calculatePrice() {
    let amountBrachioField = document.querySelector("input[name = brachiosaurus-amount]");
    let amountTrikeField = document.querySelector("input[name = triceratops-amount]");
    let amountTrexField = document.querySelector("input[name = trex-amount]");
    let amountBrachio = 0;
    let amountTrike = 0;
    let amountTrex = 0;
    let price = 0;
    (amountBrachioField.disabled) ? amountBrachio = 0 : amountBrachio = parseInt(amountBrachioField.value);
    (amountTrikeField.disabled) ? amountTrike = 0 : amountTrike = parseInt(amountTrikeField.value);
    (amountTrexField.disabled) ? amountTrex = 0 : amountTrex = parseInt(amountTrexField.value);
    price = (1000 * amountBrachio) + (1500 * amountTrike) + (2000 * amountTrex);
    if (price == 0) {
        alert("You didn't order anything!");
        return;
    }
    (price < 5000) ? price = price + 500 : price;
    showPrice(price);
}

function validateFields() {
    let amountBrachioField = document.querySelector("input[name = brachiosaurus-amount]");
    let amountTrikeField = document.querySelector("input[name = triceratops-amount]");
    let amountTrexField = document.querySelector("input[name = trex-amount]");
    if (!amountBrachioField.disabled && amountBrachioField.value < 1) {
        alert("You chose an amount of less than 1 pieces for at least one of the plushie types you want. You have to order at least 1 pieces of plushie of every type you checked.");
    } else if (!amountBrachioField.disabled && amountBrachioField.value > 10) {
        alert("You chose an amount of over 10 pieces for at least one of the plushie types you want. You can't order more than 10 pieces of a single type.");
    }
    if (!amountTrikeField.disabled && amountTrikeField.value < 1) {
        alert("You chose an amount of less than 1 pieces for at least one of the plushie types you want. You have to order at least 1 pieces of plushie of every type you checked.");
    } else if (!amountTrikeField.disabled && amountTrikeField.value > 10) {
        alert("You chose an amount of over 10 pieces for at least one of the plushie types you want. You can't order more than 10 pieces of a single type.");
    }
    if (!amountTrexField.disabled && amountTrexField.value < 1) {
        alert("You chose an amount of less than 1 pieces for at least one of the plushie types you want. You have to order at least 1 pieces of plushie of every type you checked.");
    } else if (!amountTrexField.disabled && amountTrexField.value > 10) {
        alert("You chose an amount of over 10 pieces for at least one of the plushie types you want. You can't order more than 10 pieces of a single type.");
    }
    calculatePrice();
}
