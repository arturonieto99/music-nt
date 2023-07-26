import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { UserService } from '../services/user.service';
import { Storage } from "@ionic/storage-angular";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  userImage = "assets/images/profile.jpeg";
  photo: any;
  userInfo:any;

  constructor(private userService: UserService,
    private storage:Storage
    ) { }
    ngOnInit() {}

ionViewDidEnter(){
  this.userService.getUser().then(userData => {
    console.log("UserData",userData);
    this.userInfo = userData;
    this.photo=userData.image;
  }
    )
}
async takePhoto(){
  try {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    })
    this.photo = image.dataUrl;
    console.log(image.dataUrl)
    this.userService.updateUser({"image": this.photo}).then((res: any) => {
      console.log(res)
    })
  }
  catch (error){
    console.log("No se selecciono foto")
  }

}
}
/*
  async ngOnInit() {
    const user_id = await this.storage.get("user_id");
    this.userService.getUser(user_id).then(userData => {
      console.log("userData",userData);
      this.userInfo = userData;
      this.photo = userData.image;
    })*/




