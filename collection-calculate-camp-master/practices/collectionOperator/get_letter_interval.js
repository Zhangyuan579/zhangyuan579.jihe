'use strict';

function get_letter_interval(number_a, number_b) {
    //在这里写入代码
    let z = [];
    let letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
        if(number_a<number_b){
            for(let i = number_a;i <= number_b; i++){
                z.push(letter[i]);
            }
        }
        if(number_a>number_b){
            for(let i = number_a;i >= number_b; i--){
                z.push(letter[i]);
            }
        }
        if(number_a===number_b){
            z.push(letter[number_a]);
        }
        return z;
}

module.exports = get_letter_interval;