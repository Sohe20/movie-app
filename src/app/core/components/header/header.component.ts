import { Component, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { User } from '../../models/user.model';
import { LocalStorageService } from '../../services/local-storage';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  localStrService = inject(LocalStorageService);
  
  // Get user data from localStorage
  user = this.localStrService.getItem(environment.AUTH_TOKEN_KEY) as User;
  username = this.user?.name || 'Guest';
  userImg = this.user?.photoUrl || '/assets/images/default-avatar.png';
  
  navList = ["Home", "TV Shows", "New & Popular", "My List", "Browse by Language"];
  
  signOut() {
    // Clear auth token from localStorage
    this.localStrService.removeItem(environment.AUTH_TOKEN_KEY);
    // Redirect to login page or home page
    window.location.href = '/';
  }
}
