let $ = function (id){
    return document.getElementById(id);
};

getPrice = function() {
    let numVal1 = Number($("price").value);
    let totalValue;
    if($("discountType").value === "retail"){
        totalValue = numVal1 - (numVal1 * 10 / 100);
    }else {
        totalValue = numVal1 - (numVal1 * 20 / 100);
    }
    $("total").value = totalValue.toFixed(2);
}

