import { CardModule } from './../component/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalPhotoGridComponent } from './animal-photo-grid/animal-photo-grid.component';


@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalComponent,
    AnimalPhotoGridComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    CardModule,
  ]
})
export class AnimalsModule { }
