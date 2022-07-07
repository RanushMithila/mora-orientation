var qty = 0;

function plus(){
    qty = parseInt(document.getElementById('qty').value);

    qty = qty + 1;

    document.getElementById('qty').value = qty;

    changePrice();
}

function minus(){
    qty = parseInt(document.getElementById('qty').value);

    qty = qty - 1;

    if (qty <= 0){
        alert('you can\'t reduce qty below 0');
        qty = qty + 1;
    }

    document.getElementById('qty').value = qty;

    changePrice();
}

function changePrice(){
    var price = document.getElementById('pricePerUnit').textContent;

    var price = price.split(" ");

    price = parseFloat(price[1]);

    //alert(price + " " + qty);

    var newPrice = (price * qty).toFixed(2);

    document.getElementById('price').textContent = '$ ' + newPrice;
}