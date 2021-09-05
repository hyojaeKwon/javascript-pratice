//Creating callback chain except Promise

/*
  1.Login, verify user information
  2.Get roles
  3.print information.
*/

class UserInformation {
  loginUser(id, password, onSuccess, onError) {
    //async call back
    setTimeout(() => {
      // Verify Id & PW by using if statement
      if (id === "hello" && password === "password") {
        onSuccess(id);
      } else {
        //Error Object Return
        onError(new Error('verification Error'));
      }
    }, 2000)
  }
  getRoles(user, onSuccess, onError) {
    //async call back
    setTimeout(() => {
      //verify user's id
      if (user == "hello") {
        //return name and role
        onSuccess({
          name: "hyojae",
          role: "admin"
        });
      } else {
        onError(new Error('no access'))
      }
    }, 1000);
  }
}

const userStorage = new UserInformation();
const id = prompt('enter your id');
const pw = prompt('enter your pw');

userStorage.loginUser(
  id,
  pw,
  (user) => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`hello ${userWithRole.name}, your role is ${userWithRole.role}`);
      },
      error => {
        console.log(error);
      });
  }, (error) => {
    //error
    console.log(error);
  })