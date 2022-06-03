import {AuthData} from '../Contexts/Auth';


async function signIn(email: string, password: string) : Promise<AuthData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === '123456'){
                resolve({
                   token: JWTTokenMock,
                   email: email,
                   name: 'Rhaneyko'
              });
          }else{
              reject(new Error('Invalid password'));
          }
    }, 500);
  });
}

export const authService = {signIn}
