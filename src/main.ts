import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {environment} from "./environments/environment";

export function getUrl(): string {
  return environment.url;
}

export function apiVersion(): string {
  return environment.apiVersion;
}

const providers = [
  { provide: 'URL', useFactory: getUrl, deps: []},
  { provide: 'API_VERSION', useFactory: apiVersion, deps: []}
]

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
