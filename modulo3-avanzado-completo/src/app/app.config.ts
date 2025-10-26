import { ApplicationConfig, Injectable, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { BaseLogger, ConsoleLogger, FileLogger } from './services/base-logger.service';
import { DataService, ApiDataService, CacheDataService } from './services/data-services';
import { APP_CONFIG, APP_CONFIG_TOKEN } from './config/app.config';

// Configuración useClass (Requisito 4)
const loggerProvider: Provider = {
  provide: BaseLogger,
  useClass: ConsoleLogger // Cambiar a FileLogger para usar el otro implementation
};

// Configuración useExisting (Requisito 5) - Y hereda de DataService
const dataServiceProvider: Provider = {
  provide: DataService,
  useExisting: ApiDataService // ApiDataService y CacheDataService heredan de DataService
};

// Configuración InjectionToken (Requisito 3)
const appConfigProvider: Provider = {
  provide: APP_CONFIG_TOKEN,
  useValue: APP_CONFIG
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    loggerProvider,
    dataServiceProvider,
    appConfigProvider,
    ConsoleLogger,
    FileLogger,
    ApiDataService,
    CacheDataService
  ]
};
