export * from './handler';
export * from './model';
import {HttpClient} from './model';

declare global {
  module SodaSync {
    const http: HttpClient;
  }
}

export {};
