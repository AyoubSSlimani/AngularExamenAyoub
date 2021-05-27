import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-list-statistique',
  templateUrl: './list-statistique.component.html',
  styleUrls: ['./list-statistique.component.css'],
})
export class ListStatistiqueComponent implements OnInit {
  @Input() public statistique!: Statistique;

  constructor() {}

  ngOnInit(): void {}
}
