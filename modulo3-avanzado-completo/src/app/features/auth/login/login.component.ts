import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { BaseLogger } from '../../../services/base-logger.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private logger: BaseLogger
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.error = '';
      
      const { username, password } = this.loginForm.value;
      
      this.authService.login(username, password).subscribe(success => {
        this.loading = false;
        
        if (success) {
          this.logger.log(`Usuario ${username} logged in successfully`);
          this.router.navigate(['/admin']);
        } else {
          this.error = 'Credenciales inválidas';
          this.logger.error(`Login failed for user: ${username}`);
        }
      });
    }
  }
}
