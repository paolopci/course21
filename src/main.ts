import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Directive01Component } from './app/section03/directive01.component/directive01.component';
import { Directive02 } from './app/section03/directive02/directive02';
import { App13 } from './app/section03/app13/app13';
//bootstrapApplication(Directive01Component, appConfig).catch((err) => console.error(err));
bootstrapApplication(App13, appConfig).catch((err) => console.error(err));
