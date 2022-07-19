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
        document.getElementById('couponCode').style = 'border: 2px green solid';
        subTot();
        //alert(tot);
    }else{
        document.getElementById('couponCode').style = 'border: 2px red solid';
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



function valid(){
    //alert ('test');
    document.getElementById('snedContact').disabled = true;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var mob = document.getElementById('mob').value;
    var mail = document.getElementById('mail').value;
    var msg = document.getElementById('msg').value;
    //alert ('test1');
    if (fname != "" && lname != "" && mob != "" && mail != "" && msg != ""){
        //alert('test2');
        document.getElementById('snedContact').disabled = false;
    }


}

function changeImg(tagID) {
    var img = document.getElementById(tagID).src;
    document.getElementById('mainImg').src = img;
}


function filterItem(itemCat){
    document.getElementById('itemList').innerHTML = "";
    var items = [
        [
            'img/drs7.jpg',
            'Front Pocket Oversized Shirt ',
            '$60.00',
            'Women'
        ],
        [
            'img/drs8.jpg',
            'Plaid Flannel Jacket ',
            '$120.00',
            'Men'
        ],
        [
			'img/drs4.jpg',
			'Casual Long sleeve Hoodie Jacket',
			'$40.00',
            'Women'
        ],
        [
			'img/drs13.jpg',
			'Black Mini Cat-Eye Sun glasses ',
			'$110.00',
            'Women'
        ],
        [
            'img/drs3.jpg',
            'Cute Casual Oversized  Shirt',
            '$35.00',
            'Women'
        ],
        [
            'img/drs1.jpg',
            'Hight Waist Baggy Boyfriend Jeans',
            '$85.00',
            'Women'
        ]
    ];

    var i = 0;
    var itemCount = items.length;
    while ( i < itemCount){
        if (itemCat == 'All'){
            document.getElementById('itemList').innerHTML += '<div class="rw2"><a href="./item.html" ><img src="'+items[i][0]+'"><h4>'+items[i][1]+'</h4><p>'+items[i][2]+'</p></a></div>';
        }else if (items[i][3] == itemCat){
            document.getElementById('itemList').innerHTML += '<div class="rw2"><a href="./item.html" ><img src="'+items[i][0]+'"><h4>'+items[i][1]+'</h4><p>'+items[i][2]+'</p></a></div>';
        }
        i++;
    }
}