import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data!:any

  constructor( private http:HttpClient) {}

  doGet() {
    firstValueFrom<UserData>
    this.http.get<any>('http://httpbin.org/get?name=adil&email=adil@gmail.com'
    .pipe(
      take(1),
      map(v =>{
        return v.args
      })
    )
    
    
    

    )
  }
}
