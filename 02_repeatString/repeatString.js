const repeatString = function(string,number) {
    let word = ''
    if(number<0){
        return 'ERROR';
    }else{
        for(let i =0; i<number;i++){
            word += string;
        }
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;
