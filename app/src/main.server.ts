import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config.server';
import { AppComponent } from './app/app';

/**
 * SSR: hay que pasar el "context" que entrega el runtime del servidor.
 * No importamos BootstrapContext porque no es un tipo público.
 */
const bootstrap = (context: unknown) =>
  bootstrapApplication(AppComponent, appConfig, context as any);

export default bootstrap;
