function calculate_median(arr) {
    var arr1=[];

    for(var i =0;i <arr.length;i++){
        if (i%2 == 1) {
            arr1.push(arr[i]);

        }

    }
    arr1.sort(function(a,b){return a-b});

    var len = arr1.length;
    if(len%2 == 0){
        return (arr1[len/2] + arr1[len/2 - 1])/2;
    }else{
        return arr1[(len+1)/2-1];
    }
}

module.exports = calculate_median;
