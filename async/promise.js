/**
 * promice is a Javascript object for async operation.
 * State: pending -> fulfilled(resolve) or rejected
 * Producer vs Consumer
 */

//1. producer 
//When new promise is created, the executor runs automatically
const promise = new promise((resolve, reject) => {
  console.log('doing something');
  setTimeout(() => {
    resolve('hyojae');
    reject(new Error('no network'));
  }, 1000);
})


// 2. Consumers: then, catch, finally
promise
  //then 
  .then(value => {
    console.log(value);
  })
  //error catching
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('function ends')
  })

// 3. Promise Chaining
const fetchNumber = new Promise((resolve,reject) => {
  setTimeout(() => resolve(1), 1000);
})

fetchNumber
  .then(num => num*2)
  .then(num => num*3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num))