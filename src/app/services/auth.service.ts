import {Injectable, signal} from '@angular/core';
import {AuthUser, getCurrentUser, signOut} from 'aws-amplify/auth';
import {BehaviorSubject, Observable} from "rxjs";
import {UserInterface} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<UserInterface | null> = new BehaviorSubject<UserInterface | null>(null);
  public user$: Observable<UserInterface | null> = this.userSubject.asObservable();

  constructor() {
    this.loadUserData();

  }

  private async loadUserData(): Promise<void> {
    try {
      const user = await getCurrentUser();
      const { username, userId, signInDetails }
                      = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);
      const userData: UserInterface = {
        email: user.userId || user.userId,
        username: user.username || user.username || user.username
      };
      this.userSubject.next(userData);
    } catch (error) {
      console.error('Error loading user data:', error);
      this.userSubject.next(null);
    }
  }

  async getUserData(): Promise<UserInterface | null> {
    try {
      const user = await getCurrentUser();
      if (user) {
        return {
          email: user.userId,
          username: user.username,
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error getting user data:', error);
      throw error;
    }
  }

  async isAuthenticated(): Promise<boolean> {
    try {
      const user = await getCurrentUser();
      return !!user;
    } catch (error) {
      return false;
    }
  }


  async signOut(): Promise<void> {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }

}
