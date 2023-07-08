import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides=[
    {
  title:"Turismo",
  img: "assets/imagenes/tour.jpg",
  icon: "american-football-outline",
  description:"es un término que comprende las actividades que realizan las personas durante sus viajes ycestancias en lugares distintos a su entorno habitual durante un período de tiempo inferior a un año, con fines de ocio, negocios u otros.​​ Si no se realiza pernoctación, se consideran excursiones"
  },
  {
    title:"Gastronomia",
     img: "https://conceptodefinicion.de/wp-content/uploads/2019/08/Gastronom%C3%ADa-1.jpg",
    description:"a gastronomía es el arte de preparar platillos de la manera más perfecta, cuidando la condimentación y la presentación, se conoce como el arte y la ciencia del buen comer, como arte requiere de la interacción de los cinco sentidos y genera una experiencia para el que lo consume"
  }
  
  
  
  ]


  constructor(private router:Router) { }

  ngOnInit() {
  }
finish (){
this.router.navigateByUrl("/home");

}

}
