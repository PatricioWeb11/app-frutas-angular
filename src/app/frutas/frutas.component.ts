import { Component } from '@angular/core';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent {
  frutas: string[] = ['platano', 'melon', 'sandia', 'naranja', 'manzana', 'uva'];
  frutaNueva: string = '';

  agregar(){
    // console.log(this.frutaNueva);
    this.frutas.push(this.frutaNueva);
    this.frutaNueva = '';
  }

  eliminar(){
    // console.log('Eliminando fruta');
    this.frutas.pop();
  }
}
