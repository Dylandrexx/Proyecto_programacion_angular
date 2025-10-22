import { Injectable } from '@angular/core';

export abstract class BaseLogger {
  abstract log(message: string): void;
  abstract error(message: string): void;
}

@Injectable({
  providedIn: 'root'
})
export class ConsoleLogger extends BaseLogger {
  log(message: string): void {
    console.log(`📝 LOG: ${message}`);
  }

  error(message: string): void {
    console.error(`❌ ERROR: ${message}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class FileLogger extends BaseLogger {
  log(message: string): void {
    // Simulación de logger a archivo
    console.log(`💾 FILE LOG: ${message} - [Would be saved to file]`);
  }

  error(message: string): void {
    console.error(`💾 FILE ERROR: ${message} - [Would be saved to error file]`);
  }
}
