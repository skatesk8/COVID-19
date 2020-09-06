import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudiosPageRoutingModule } from './estudios-routing.module';

import { EstudiosPage } from './estudios.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudiosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EstudiosPage]
})
export class EstudiosPageModule {}
