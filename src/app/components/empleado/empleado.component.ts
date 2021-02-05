import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {


  empleadoId: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.empleadoId = params.id;
    });
    
   }

  ngOnInit(): void {
  }

  onClick(pruta) {    
    this.router.navigate([`/empleado/${this.empleadoId}`,pruta]);
  }

}
