import { AnimalsService } from './../animals.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { animals } from '../animals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<animals>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params?.['animalId'];
    this.animal$ = this.animalsService.idSearch(this.animalId);
  }

}
