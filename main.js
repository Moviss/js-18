'use strict';

// const isSuccess = false;
//
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success!');
//     } else {
//       reject('Error!');
//     }
//   }, 2000);
// });

// console.log('Before');

// Dwa argumenty w then

// promise.then(
//   value => {
//     console.log('onResolve inside promise.then()');
//     console.log(value);
//   },
//   error => {
//     console.log('onReject inside promise.then()');
//     console.log(error);
//   },
// );

// .catch

// promise.then(value => {
//   console.log(value);
// }).catch(error => {
//   console.log(error);
// });

// .finally

// promise.then(value => {
//   console.log(value);
// }).catch(error => {
//   console.log(error);
// }).finally(() => console.log('Settled!'));
//
// console.log('After');

// łączenie .then

// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });
//
// promise
// .then((value) => {
//   console.log(value);
//   return value * 2;
// })
// .then(value => {
//   console.log(value);
//   return value * 3;
// })
// .then(value => {
//   console.log(value);
// })
// .catch(error => {
//   console.log(error);
// })
// .finally(() => {
//   console.log('Final task');
// });

// Promisification funkcji

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);
//
//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = false;
//
//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };
//
// const onFetchSuccess = user => {
//   console.log(user);
// };
//
// const onFetchError = error => {
//   console.error(error);
// };
//
// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);
//
//     setTimeout(() => {
//       const isSuccess = false;
//
//       if (isSuccess) {
//         resolve({ name: 'Bobo', id: '2652' });
//       } else {
//         reject(new Error("Error fetching user"));
//       }
//     }, 2000);
//   });
// };
//
// fetchUserFromServer('Bobo').
//   then(user => console.log(user)).
//   catch(error => console.error(error));

// Promise.all([promise1, promise2, ....])

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };
//
// const promise1 = makePromise('promise1 value', 2000);
// const promise2 = makePromise('promise2 value', 4000);

// Promise.all([promise1, promise2]).
//   then(value => console.log(value)).
//   catch(error => console.log(error));

// Promise.race([promise1, promise2]).
//   then(value => console.log(value)).
//   catch(error => console.log(error));

// Fulfilled promise
// new Promise(resolve => resolve('success value')).then(value =>
//   console.log(value),
// );
//
// Promise.resolve('success value').then(value => console.log(value));
//
// // Rejected promise
// new Promise((resolve, reject) => reject('error')).catch(error =>
//   console.error(error),
// );
//
// Promise.reject('error').catch(error => console.error(error));

// const makeGreeting = guestName => {
//   if (guestName === "" || guestName === undefined) {
//     return {
//       success: false,
//       message: "Guest name must not be empty",
//     };
//   }
//
//   return {
//     success: true,
//     message: `Welcome ${guestName}`,
//   };
// };
//
// const result = makeGreeting("");
//
// if (result.success) {
//   console.log(result.message);
// } else {
//   console.error(result.message);
// }

// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (guestName === "" || guestName === undefined) {
//     return onError("Guest name must not be empty");
//   }
//   onSuccess(`Welcome ${guestName}`);
// };
//
// makeGreeting(
//   "Mango",
//   greeting => console.log(greeting),
//   error => console.error(error)
// );

// const makeGreeting = guestName => {
//   if (guestName === "" || guestName === undefined) {
//     return Promise.reject("Guest name must not be empty");
//   }
//
//   return Promise.resolve(`Welcome ${guestName}`);
// };
//
// makeGreeting("")
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));













