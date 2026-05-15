import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Directive02 } from './app/section03/directive02/directive02';
import { config } from './app/app.config.server';
import { App13 } from './app/section03/app13/app13';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App13, config, context);

export default bootstrap;
