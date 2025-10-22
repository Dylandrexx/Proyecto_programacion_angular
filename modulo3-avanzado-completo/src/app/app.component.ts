import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { BaseLogger } from './services/base-logger.service';
import { APP_CONFIG_TOKEN, AppConfig } from './config/app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-advanced';

  constructor(
    public authService: AuthService,
    private router: Router,
    private logger: BaseLogger,
    @Inject(APP_CONFIG_TOKEN) public config: AppConfig
  ) {}

  logout() {
    this.authService.logout();
    this.logger.log('User logged out');
    this.router.navigate(['/login']);
  }
}
