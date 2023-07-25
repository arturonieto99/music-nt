import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage:Storage
    ) { }

  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if (
        credentials.email == "ardanito99@gmail.com" &&
        credentials.password == "1234096658"
      ) {
        accept("login exitoso")
      } else {
        reject("verifique sus credenciales")  
      }
    })
  }
registerUser(userData:any){
  userData.password=btoa(userData.password);
return this.storage.set("user",userData);

}

}

