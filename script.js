slowMath.add(6, 2).then((sum) => {
    console.log(sum);
    return slowMath.multiply(sum, 2);
}).then((product) => {
        console.log(product);
        return slowMath.divide(product, 4);
    }).then((result) => {
            console.log(result);
            return slowMath.subtract(result, 3);
        }).then((answer) => {
                console.log(answer);
                return slowMath.add(answer, 98);
            }).then((sum2) => {
                    console.log(sum2);
                    return slowMath.remainder(sum2, 2);
                }).then((leftOver) => {
                        console.log(leftOver);
                        return slowMath.multiply(leftOver, 50);
                    }).then((product2) => {
                            console.log(product2);
                            return slowMath.remainder(product2, 40);
                        }).then((leftOver2) => {
                                console.log(leftOver2);
                                return slowMath.add(leftOver2, 32);
                            }).then((final) => {
                                    console.log(`The final result is ${final}.`);
                                }).catch((err) => {
                                    console.log(err);
                                });


async function doMath() {
    try {
    let sum = await slowMath.add(6, 2);
    console.log(sum);
    let product = await slowMath.multiply(sum, 2);
    console.log(product);
    let result = await slowMath.divide(product, 4);
    console.log(result);
    let answer = await slowMath.subtract(result, 3);
    console.log(answer);
    let sum2 = await slowMath.add(answer, 98);
    console.log(sum2);
    let remainder = await slowMath.remainder(sum2, 2);
    console.log(remainder);
    let product2 = await slowMath.multiply(remainder, 50);
    console.log(product2);
    let remainder2 = await slowMath.remainder(product2, 40);
    console.log(remainder2);
    let final = await slowMath.add(remainder2, 32);
    console.log(`The final result is ${final}.`);
    } catch(err) {
        console.log(err);
    }
};

//doMath();

                            