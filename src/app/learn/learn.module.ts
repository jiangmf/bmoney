import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnPageRoutingModule } from './learn-routing.module';

import { LearnPage } from './learn.page';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnPageRoutingModule
  ],
  declarations: [LearnPage,
    MenuComponent,
    HeaderComponent]
})
export class LearnPageModule {}
