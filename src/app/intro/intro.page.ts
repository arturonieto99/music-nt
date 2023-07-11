import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage-angular";

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
  },
{
  title:"Deportes",
  img:"assets/imagenes/depor.jpg",
  description:"Actividad o ejercicio físico, sujeto a determinadas normas, en que se hace prueba,con o sin competición, de habilidad, destreza o fuerza física."
},
{
  title:"Cultura",
  img:"https://www.somosiberoamerica.org/wp-content/uploads/2022/09/Onda-Pais-Imagen-destacada.jpg",
  description:"Conjunto de conocimientos, ideas, tradiciones y costumbres que caracterizan a un pueblo, a una clase social, a una época, etc"
},
{
  title:"Musica",
  img:"https://definicion.de/wp-content/uploads/2010/01/partitura.jpg",
  description:"Arte de combinar los sonidos de la voz humana o de los instrumentos, o de unos y otros a la vez, de suerte que produzcan deleite, conmoviendo la sensibilidad, ya sea alegre, ya tristemente"
}

  ]


  constructor(private router:Router, private storage:Storage) { }

  ngOnInit() {
  }
finish (){
  this.storage.set("introShow",true)
this.router.navigateByUrl("/home");

}

}
