import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departamentodetalhe',
  templateUrl: './departamentodetalhe.component.html',
  styleUrls: ['./departamentodetalhe.component.css']
})
export class DepartamentodetalheComponent implements OnInit {

  constructor(private _rout: ActivatedRoute) { }

  public departamentoId;

  ngOnInit() {
    this.departamentoId = parseInt(this._rout.snapshot.paramMap.get('id'));
  }

}
