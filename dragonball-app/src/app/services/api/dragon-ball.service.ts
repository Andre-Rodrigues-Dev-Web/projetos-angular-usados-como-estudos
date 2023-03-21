import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  private url = 'http://localhost/www/apis-estudos/api-animes.php';
  constructor(private http: HttpClient) { }
  getAnimes(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
