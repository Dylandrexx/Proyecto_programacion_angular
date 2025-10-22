import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  appName: string;
  version: string;
  maxPostsPerPage: number;
}

export const APP_CONFIG: AppConfig = {
  apiUrl: 'http://localhost:3000/api',
  appName: 'Blog Advanced',
  version: '1.0.0',
  maxPostsPerPage: 10
};

export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('app.config');
