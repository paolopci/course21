import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Directive01Component } from './app/section03/directive01.component/directive01.component';

bootstrapApplication(Directive01Component, appConfig).catch((err) => console.error(err));
