'use strict';

function get_integer_interval_2(number_a, number_b) {
    //在这里写入代码
    let n = [];
    if (number_a < number_b) {
        for (let i = number_a; i <= number_b; i++) {
            if (i % 2 == 0) {
                n.push(i);
            }
        }
    } else if (number_a > number_b) {
        for (let i = number_a; i >= number_b; i--) {
            if (i % 2 == 0) {
                n.push(i);
            }
        }
    } else if (number_a = number_b) {
        if (number_a % 2 == 0) {
            n.push(number_a);
        }
    } else {
        n
    }
    return n;

    //     let n = [];
    //     if (number_a < number_b) {
    //         for (let i = number_a; i <= number_b; i++) {
    //             if (i % 2 == 0) {
    //                 n.push(i);
    //             }
    //         }
    //     } else if (number_a > number_b) {
    //         for (let i = number_a; i >= number_b; i--) {
    //             if (i % 2 == 0) {
    //                 n.push(i);
    //             }
    //         }
    //     } else if (number_a == number_b) {
    //         if (number_a % 2 == 0) {
    //             n.push(number_a);
    //         } else {
    //             n;
    //         }
    //     }
    //     return n;
}

module.exports = get_integer_interval_2;