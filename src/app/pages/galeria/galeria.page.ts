import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

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

}
