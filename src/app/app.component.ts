import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import * as TutoralActions from './simple.action'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  todo: Observable<Todo[]>

  constructor(private store: Store<AppState>){
    this.todo = this.store.select('todo')
  }


  addTask(task,text){
    this.store.dispatch(new TutoralActions.Add({task:task,text:text}))
  }

  removeTask(index){
    this.store.dispatch(new TutoralActions.Remove(index))
  }

}


interface AppState{

  readonly todo: Todo[];
}