let $ = function (id){
    return document.getElementById(id);
};

getPrice = function() {
    let numVal1 = Number($("price").value);
    let totalValue;
    if($("discountType").value === "silver"){
        totalValue = numVal1 - (numVal1 * 12.5 / 100);
    }else {
        totalValue = numVal1 - (numVal1 * 27.5 / 100);
    }
    $("total").value = totalValue.toFixed(2);
}

