import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';

// const URL = environment.url;
const URL = 'localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  token: string = null;

  constructor(private http: HttpClient, private storage: Storage) {}

  login(email: string, password: string) {
    const data = { email, password };
    console.log('url:', URL);
    // this.http.post(`${URL}/user/login`, data).subscribe((resp) => {
    //   console.log(resp);
    // });
  }
}
