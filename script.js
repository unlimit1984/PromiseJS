//console.log('Request data');
// setTimeout(() => {
//     console.log('Preparing data');
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     };
//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data received', backendData);
//     }, 2000);
//
// }, 2000);
//console.log('Scripts is ended');


// console.log('Request data');
//
// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data');
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         };
//         resolve(backendData);
//     }, 2000);
// });
//
// p
//     .then((data) => {
//         // const p2 = new Promise((resolve, reject) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.modified = true;
//                 resolve(data);
//                 // reject(data); //for getting error and catching that
//             }, 2000);
//         });
//     })
//     .then(clientData => {
//         console.log('Data received', clientData);
//         clientData.fromPromise = true;
//         return clientData;
//     })
//     .then(data => {
//         console.log('Modified', data);
//     })
//     .catch(err => console.error('Error:', err))
//     .finally(() => {
//         console.log('Finally')
//     });
//
// console.log('Scripts is ended');


console.log('Start');
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    });
};

// sleep(2000).then(() => console.log('After 2 sec.'));
// sleep(3000).then(() => console.log('After 3 sec.'));

//можно стартовать несколько промисов и ждать, когда все они выполнятся
Promise.all([sleep(3000), sleep(7000)])
    .then(() => console.log('All promises are ended'));


Promise.race([sleep(3000), sleep(7000)])
    .then(() => console.log('All races are ended'));


console.log('End');
