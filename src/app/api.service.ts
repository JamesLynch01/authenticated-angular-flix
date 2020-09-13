import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class ApiService {

  constructor(private httpClient : HttpClient) { }
  url = "https://ce-authenticated-backend.herokuapp.com/"
  async get(path, options?):  Promise<any> {
    return await this.httpClient.get<any>(this.url + path).toPromise();
  }
  async post(path, data, options?): Promise<any>{
          
    return await this.httpClient.post(this.url + path, data).toPromise();
  }

}