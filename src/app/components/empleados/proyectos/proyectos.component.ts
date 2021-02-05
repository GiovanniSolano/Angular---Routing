import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  empleadoID: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe(params => {
      this.empleadoID = params.id;
    });
   }

  ngOnInit(): void {
  }

}
