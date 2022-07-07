function plus(){
    var qty = parseInt(document.getElementById('qty').value);

    qty = qty + 1;

    document.getElementById('qty').value = qty;
}

function minus(){
    var qty = parseInt(document.getElementById('qty').value);

    qty = qty - 1;

    if (qty <= 0){
        alert('you can\'t reduce qty below 0');
        qty = qty + 1;
    }

    document.getElementById('qty').value = qty;
}