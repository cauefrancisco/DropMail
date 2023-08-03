import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  public storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }


  public setId(id: string): void {
    this.storage.setItem('USER_ID', JSON.stringify(id));
  }

  public setTemporaryEmail(email: string): void {
    this.storage.setItem('EMAIL', JSON.stringify(email));
  }

  public getTemporaryEmail(): any {
    const email = localStorage.getItem('EMAIL');
    if (this.storage) {
      return email;
    }
    return null
  }

  public clearStorage() {
    this.storage.clear();
  }
}