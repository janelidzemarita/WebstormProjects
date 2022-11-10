let uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let res = []
    let i = 0
    while (i< iterable.length){
        res.push(iterable.contains(strArr, s))
        if (iterable[i] != iterable[i+1] ){
            res.push(iterable[i])
        }
        i++
    }
    return res
}

let strArr = Array.isArray(iterable) ? iterable : iterable.split('');