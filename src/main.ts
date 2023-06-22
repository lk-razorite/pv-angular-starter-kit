import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

<<<<<<< HEAD
<<<<<<< HEAD
platformBrowserDynamic()
  .bootstrapModule(AppModule)
=======

platformBrowserDynamic().bootstrapModule(AppModule)
>>>>>>> b3fc051 (initial commit - using ng new)
=======
platformBrowserDynamic()
  .bootstrapModule(AppModule)
>>>>>>> 975762a (feat(CODE-26): added intial setups of eslint + prettier + lint-staged + precommit hook + commit-msg hook)
  .catch(err => console.error(err));
