function merge(arr, l, m, r){

    let n1 = m-l+1, n2 = r-m;
    // let arrl=new Array(n1);
    // let arrr= new Array(n2);
    var arrl = new Array(n1);
    var arrr = new Array(n2);

    for(let i = 0; i < n1; i++){
        arrl[i] = arr[l+i];
    }
    for(let j = 0; j < n2; j++){
        arrr[j] = arr[m+1+j];
    }

    let i = 0, j = 0, k = l;
    while(i<n1 && j < n2){
        if(arrl[i]<=arrr[j]){
            arr[k] = arrl[i];
            i++;
        }else{
            arr[k] = arrr[j];
            j++;
        }
        k++;
    }
    while(i < n1){
        arr[k] = arrl[i];
        i++;
        k++;
    }
    while(j<n2){
        arr[k]= arrr[j];
        j++;
        k++;
    }
}


function mergeSort(arr, l, r){
    if(l>=r){ return;}
    let m = l +parseInt((r-l)/2);
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
}

let nums = [5,2,3,1], l = 0, r = nums.length;
console.log(mergeSort(nums,l, r))
console.log(nums)