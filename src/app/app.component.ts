import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rutas';


  constructor(private router: Router) {

  }

  onClick(pRuta: string) {

    //Tareas previas

    // Diferentes opciones
    // this.router.navigateByUrl(`/${pRuta}`);
    // this.router.navigate([pRuta]);

    
    if(pRuta === 'empleado') {
      this.router.navigateByUrl(`/${pRuta}/123`);
    } else {
      this.router.navigateByUrl(`/${pRuta}`);
    }

    

  }

}
