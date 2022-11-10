// function cake(candles, debris){
//     if (candles == 0){
//         return "That was close!";
//     }else{
//         let total = 0;
//         let perc  = candles * 70 / 100;
//         console.log(perc);
//         for(let i = 1; i < debris.length; i++){
//             total += debris.charCodeAt(i);
//             i++;
//             console.log(total);
//         }
//         console.log(perc < total)
//         if(perc < total){
//             return "Fire!";
//         }else
//             return "That was close!";
//     }
// }
//
// console.log(cake(508, 'usijhur'))


let isAnagram = function(test, original) {
    if(test.length != original.length){
        return false;
    }else{
        for(let i = 0; i < test.length; i++){
            if((test.toLowerCase().includes(original[i].toLowerCase())) &&
                original.toLowerCase().includes(test[i].toLowerCase())&& test.count(original[i] == original.count(test[i]))){
                continue;
            }else{
                return false;
            }
        }
        return true;
    }
};
String.prototype.count=function(c) {
    let result = 0, i = 0;
    for(i;i<this.length;i++)if(this[i]==c)result++;
    return result;
};

console.log(isAnagram("Buckethead", "DeathCubeK"));

