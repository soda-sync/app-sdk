export * from './handler';
export * from './model';
import {Context, HttpClient} from './model';

declare global {
  module SodaSync {
    const http: HttpClient;
    const context: Context;
  }
}

export {};
