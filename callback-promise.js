//Creating callback with Promise

/*
  1.Login, verify user information
  2.Get roles
  3.print information.
*/

class UserInformation {
  loginUser(id, password) {
    //async call back
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        // Verify Id & PW by using if statement
        if (id === "hello" && password === "password") {
          resolve(id);
        } else {
          //Error Object Return
          reject(new Error('verification Error'));
        }
      }, 2000)
    })
  }
  getRoles(user) {
    //async call back
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //verify user's id
        if (user == "hello") {
          //return name and role
          resolve({
            name: "hyojae",
            role: "admin"
          });
        } else {
          reject(new Error('no access'))
        }
      }, 1000);
    })
  }
}

const userStorage = new UserInformation();
const id = prompt('enter your id');
const pw = prompt('enter your pw');
userStorage
  .then(userStorage.loginUser)
  .then(userStorage.getRoles)
  .then(user =>{
    alert(`hello ${user.name}, your role is ${user.role}`);
  })
  .catch(error => {
    console.log(error)
  })


