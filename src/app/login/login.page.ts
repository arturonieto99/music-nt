import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  passwordType: String = 'password';
  passwordShown: boolean = false;
  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatio" },
      { type: "pattern", message: "Debe poner un email valido" }
    ],
    password: [
      { type: "required", message: "La constraseña es obligatoria" },
      { type: "minlength", message: "Minimo 6 caracteres" }
    ]
  }
  errorMessage: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private storage: Storage,
    private navCtril: NavController,
    public toastController: ToastController,
    public alertController: AlertController
  ) {
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
            ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
              /*Validators.nullValidator*/
            ]
          )
        )
      }
    )
  }

  ngOnInit() {
  }

  public tooglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    } else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  async presentToas1() {
    const toast = await this.toastController.create({
      message: 'usuario incorrecto',
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  }

 /* async presentAlert1() {
    const alert = await this.alertController.create({
      header: "AVISO",
      message: "ha ocurrido un error, usuario o contraseña incorrecta",
      buttons: ["OK"],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }*/

  loginUser(credentials: any){
    console.log("Credenciales",credentials);
    this.authService.loginUser(credentials).then((res: any) => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.storage.set("user_id", res.id)
      this.navCtril.navigateForward("/menu/home");
    }).catch(err => {
      this.errorMessage = err;
      console.log(this.errorMessage);
    })
  }
   
  async presentAlert(header: string, subHeader:string, message:string){
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  goToRegister() {
    this.navCtril.navigateForward("/register")
  }
}


