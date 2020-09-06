import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  slides: { img: string }[] = [
    {
      img: '/assets/slides/Slide.jpg',
    },
    {
      img: '/assets/slides/slides.jpg',
    },
    {
      img: '/assets/slides/slidess.jpg',
    }
  ]
  
  componentes: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
               private dataService: DataService,
               private navCtrl: NavController ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  onClick(){
    this.navCtrl.navigateBack('/');
  }
}

