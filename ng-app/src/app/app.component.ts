import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface ITodo {
  comleted: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: ITodo[] = [];
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(todos => {
        console.log(todos);

        this.todos = todos;
      })
  }

}
