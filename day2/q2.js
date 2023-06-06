function search(words){
    let newArr = [];
    for(let i = 0; i < words.length; i++){
        let x = words[i];
        for(let j = 0; j < words.length; j++){
            if(j==i) continue;
            else{
                if(words[j].includes(x)){
                    newArr.push(words[i]);
                }
            }
        }
    }
    return newArr;
}

let words =  ["blue","green","bu"]


console.log(search(words));