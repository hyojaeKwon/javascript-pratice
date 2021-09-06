// async & await
// clear style of using Promise

// 1. async
async function fetchUser() {
  return "abc";
}

// Promise
function fetchUserPromise() {
  //network request in 10 secs..
  return new Promise((resolve, reject) => {
    //still pending state
    resolve('abc');
    //fulfilled
  });
}

// 2.await
function delay(ms) {
  //create Promise object
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return 'apple';
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

// parallel async functions
async function pickFruits() {
  // Create Primise constanats
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise; // await in front of constant
  const banan = await bananaPromise;
  return `${apple} + ${banana}`;
}

// 3. UseFul Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then(fruit => fruit.join(' + '));
}
pickAllFruits().then(console.log);

//print the faster one
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log)