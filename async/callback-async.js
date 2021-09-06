//Creating callback with Promise


/*
  
  1.Login, verify user information
  
  2.Get roles

  3.print information.

*/

class UserStorage{

  loginUser(id, pw){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(id === "hello" && pw == `hello`){
          resolve(id);
        } else {
          reject(new Error(`access undefined`));
        }
      },1000);
    });
  }

  getRoles(user){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(user === "hello"){
          resolve({
            name : "hyojae",
            role : "admin"
          });
        } else {
          reject(new Error(`no access`));
        }
      },1000)
    })
  }


  // Create async function so that using this function at Consumer part
  async getUserWithRole(id,pw){
    const user = await this.loginUser(id,pw);
    const userRole = await this.getRoles(user);
    return userRole;
  }

}

const userStorage = new UserStorage();
const id = prompt(`enter your id`);
const pw = prompt(`enter your pw`);

userStorage
  .getUserWithRole(id,pw)
  .then((userRole) => {
    alert(`Hello ${userRole.name} your role is ${userRole.role}`)
  })
  .catch(console.log)
  .finally(() => {
    console.log(`the program is ended`);
  });