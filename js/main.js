var qty = 0;

function plus(element){
    qtyID = 'qty['+element+']';
    qty = parseInt(document.getElementById(qtyID).value);
    //alert(qty);
    qty = qty + 1;

    document.getElementById(qtyID).value = qty;

    changePrice(element);
}

function minus(element){
    qtyID = 'qty['+element+']';
    qty = parseInt(document.getElementById(qtyID).value);

    qty = qty - 1;

    if (qty <= 0){
        alert('you can\'t reduce qty below 0');
        qty = qty + 1;
    }

    document.getElementById(qtyID).value = qty;

    changePrice(element);
}

function changePrice(element){
    pricePerID = 'pricePerUnit['+element+']';
    priceID = 'price['+element+']';
    var price = document.getElementById(pricePerID).textContent;

    var price = price.split(" ");

    price = parseFloat(price[1]);

    //alert(price + " " + qty);

    var newPrice = (price * qty).toFixed(2);

    document.getElementById(priceID).textContent = '$ ' + newPrice;
}

