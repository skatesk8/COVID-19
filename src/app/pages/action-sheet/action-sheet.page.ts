import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})

export class ActionSheetPage implements OnInit {
  sintomas: { img: string, desc: string }[] = [
    {
      img: '/assets/fiebre.svg',
      desc: 'Temperatura mayor a 37 grados'
    },
    {
      img: '/assets/tos.svg',
      desc: 'Tos Seca'
    },
    {
      img: '/assets/respiracion.svg',
      desc: 'Dificultades para respirar'
    }
  ];
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
