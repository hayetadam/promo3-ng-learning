import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent implements OnInit {
  tableau:string[] = ["g", "zo", "bu","mu"];

  constructor() { }

  ngOnInit() {
  }

}
