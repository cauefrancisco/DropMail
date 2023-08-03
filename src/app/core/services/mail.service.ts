import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private readonly _BASE_URL = `${environment.dropMail}`;

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public createDropMail(token: string): Observable<any> {
    const url = `https://cors-anywhere.herokuapp.com/${this._BASE_URL}/graphql/${token}`;
    return this._httpClient.post(url, { "query": "mutation { introduceSession { id, expiresAt, addresses { address }}}" });
  }

  public getMails(token: string, id: string): Observable<any> {
    const url = `https://cors-anywhere.herokuapp.com/${this._BASE_URL}/graphql/${token}`;
    return this._httpClient.post(url, { "query": "query checkSession($id : ID!) {session(id: $id) {mails{rawSize,fromAddr,toAddr,downloadUrl,text,headerSubject}}}", "variables": { "id": `${id}` } })
  }
}
