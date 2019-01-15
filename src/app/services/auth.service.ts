export class AuthService {

    isAuth = false;
    //test of connexion with promise
    signIn() {
      return new Promise(
        (resolve, reject) => {
          setTimeout(
            () => {
              this.isAuth = true;
              resolve(true);
            }, 2000
          );
  
        }
      );

    }
    signOut() {
     this.isAuth = false;
    }
  
  }
  