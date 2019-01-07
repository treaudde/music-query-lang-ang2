import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './main/app.component';

var appPromise = bootstrap(AppComponent);

import {LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';
LocalStorageSubscriber(appPromise);
