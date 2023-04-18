import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

<<<<<<< HEAD
platformBrowserDynamic()
  .bootstrapModule(AppModule)
=======

platformBrowserDynamic().bootstrapModule(AppModule)
>>>>>>> b3fc051 (initial commit - using ng new)
  .catch(err => console.error(err));
