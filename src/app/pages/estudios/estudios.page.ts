import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.page.html',
  styleUrls: ['./estudios.page.scss'],
})
export class EstudiosPage implements OnInit {

  ocultar = '';

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/person.svg',
      titulo: 'Usa mascarilla',
      desc: 'Para evitar contagiarse siempre utiliza mascarilla cuando salgas de casa.'
    },
    {
      img: '/assets/slides/hand-wash.svg',
      titulo: 'Lava tus Manos',
      desc: 'Siempre que toques dinero lava tus manos'
    },
    {
      img: '/assets/slides/distance.svg',
      titulo: 'Guardas distancia',
      desc: 'Siempre procura guardar una distancia de 2 metros.'
    }
  ];

  componentes: Observable<Componente[]>; 

  constructor( private menuCtrl: MenuController,
               private dataService: DataService,
               private navCtrl: NavController ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
    onClick() {

    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');

  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
