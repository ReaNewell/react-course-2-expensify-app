const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("This is my resolve data.");
    // }, 1500);
    reject('Error message!');
});

console.log('before');

promise.then((data) => {
    console.log(1, data);
}).catch((data) => {
    console.log('error', data);
});

console.log('after');

