import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  public storage: Storage;
  public showDashboard!: boolean;

  constructor() {
    this.storage = window.localStorage;
  }

  public setId(id: string): void {
    this.storage.setItem('USER_ID', JSON.stringify(id));
  }

  public setTemporaryEmail(email: string): void {
    this.storage.setItem('EMAIL', JSON.stringify(email));
  }

  public setToken(token: string): void {
    this.storage.setItem('TOKEN', JSON.stringify(token));
  }

  public generateTokenId(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }


  public getTemporaryEmail(): any {
    const email = JSON.parse(String(localStorage.getItem('EMAIL')));
    if (this.storage) {
      return email;
    }
    return null
  }

  public getTemporaryEmailId(): any {
    const emaild = JSON.parse(String(localStorage.getItem('USER_ID')));
    if (this.storage) {
      return emaild;
    }
    return null
  }

  public getToken(): any {
    const token = JSON.parse(String(localStorage.getItem('TOKEN')));
    if (this.storage) {
      return token;
    }
    return null
  }

  public checkIfShowDashboard(): boolean {
    const email = localStorage.getItem('EMAIL');

    if (this.storage) {
      if (email) {
        return true;
      }
    }
    return false;
  }

  public clearStorage() {
    this.storage.clear();
  }
}