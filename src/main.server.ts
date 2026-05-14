import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Directive01Component } from './app/section03/directive01.component/directive01.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Directive01Component, config, context);

export default bootstrap;
