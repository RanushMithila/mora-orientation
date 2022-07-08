var qty = 0;
var tot = 0.0;
var discount = 0.0;

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
    var pricePerID = 'pricePerUnit['+element+']';
    var priceID = 'price['+element+']';
    var price = document.getElementById(pricePerID).textContent;

    var price = price.split(" ");

    price = parseFloat(price[1]);

    var newPrice = (price * qty).toFixed(2);

    document.getElementById(priceID).textContent = '$ ' + newPrice;
    subTot();
}


function couponValid(){
    calTot();
    discount = 0.0;
    coupon = document.getElementById('couponCode').value;
    if (coupon == 'ABCDE'){
        alert('You recieved 10% discount');
        discount = (tot * 0.1).toFixed(2);
        document.getElementById('discount').innerHTML = "Discount : " + discount;
        subTot();
        //alert(tot);
    }else{
        alert('Please enter valid coupon code');
    }
}

function calTot(){

    tot = (tot - discount).toFixed(2);


    //alert('tot:'+tot);
    //alert('discount:'+discount);

    document.getElementById('calTot').innerHTML = 'Total: ' + tot;

}

function subTot(){
    var priceID = '';
    tot = 0.0;
    table = document.getElementsByTagName("table")[0];
    allrows = table.getElementsByTagName("tr").length;
    itemCnt = allrows - 2;
    for (i=0; i <= itemCnt; i++) {
        priceID = 'price['+i+']';
        var price = document.getElementById(priceID).textContent;
        price = price.split(" ");
        tot += parseFloat(price[1]);
    }
    tot = tot.toFixed(2);
    document.getElementById('subTot').innerHTML = 'Total: ' + tot;
    calTot();
}

