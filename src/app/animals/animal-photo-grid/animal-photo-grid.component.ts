import { animals } from './../animals';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-photo-grid',
  templateUrl: './animal-photo-grid.component.html',
  styleUrls: ['./animal-photo-grid.component.css']
})
export class AnimalPhotoGridComponent implements OnInit {

  @Input() animals !: animals;

  constructor() { }

  ngOnInit(): void {
  }

}
