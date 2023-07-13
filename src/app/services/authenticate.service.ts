import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials:any){
  return new Promise((accept, reject) => { 
    if (
      credentials.email=="ardanito99@gmail.com" &&
      credentials.password=="1234096658"
    )
    {
      accept("login exitoso")
    }else{
      reject("verifique sus credenciales")
    }
    })
  }
  }

