import { ApplicationConfig } from '@angular/core';
import { appConfig as baseConfig } from './app.config';
import { provideServerRendering } from '@angular/platform-server';

export const appConfig: ApplicationConfig = {
  ...baseConfig,
  providers: [
    ...(baseConfig.providers ?? []),
    provideServerRendering(),
  ],
};
