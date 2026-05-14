import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Directive02 } from './app/section03/directive02/directive02';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Directive02, config, context);

export default bootstrap;
