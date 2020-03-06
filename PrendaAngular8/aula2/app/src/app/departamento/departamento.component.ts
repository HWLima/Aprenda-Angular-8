import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  constructor(private _router: Router) { }

  public departamentos = [
    {id: 1, "nome": "Henrique" }, 
    {id: 2, "nome": "Edna" }, 
    {id: 3, "nome": "Queila" } 
  ]

  onSelect(departamento) {
    this._router.navigate(['/departamento', departamento.id]);
  }

  ngOnInit() {
  }

}
