import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = ['item1', 'item2', 'item3'];
  public tarefa: string;

  addTarefa() {
    this.items.push(this.tarefa);
  }

  deleteTarefa(item: string) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}
