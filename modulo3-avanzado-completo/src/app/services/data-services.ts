import { Injectable } from '@angular/core';

export abstract class DataService {
  abstract getData(): string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiDataService extends DataService {
  getData(): string {
    return 'Data from API';
  }
}

@Injectable({
  providedIn: 'root'
})
export class CacheDataService extends DataService {
  getData(): string {
    return 'Data from Cache';
  }
}
