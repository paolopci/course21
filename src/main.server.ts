import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Directive02 } from './app/section03/directive02/directive02';
import { config } from './app/app.config.server';
import { App13 } from './app/section03/app13/app13';
import { App17 } from './app/section03/app17/app17';
import { App01 } from './app/section04/app01/app01';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App01, config, context);

export default bootstrap;
