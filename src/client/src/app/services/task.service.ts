import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
import 'rxjs/Rx';
import { Task } from '../Task' ;

@Injectable()
export class TaskService {
  domain: string = 'http://localhost:3000';
  // domain: string = 'www.mydomainapi.com/';
  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get<Task[]>(`${this.domain}/tasks`).map(res => res);
  }

  addTask(newTask: Task) {
    return this.http.post<Task>(`${this.domain}/tasks`, newTask).map(res => res);
  }

  deleteTask(id) {
    return this.http.delete<Task>(`${this.domain}/tasks/${id}`).map(res => res);
  }

  updateTask(newTask) {
    return this.http.put<Task>(`${this.domain}/tasks/${newTask._id}`, newTask).map(res => res)
  }
}
