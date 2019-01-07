import {Component} from 'angular2/core';
import {MusicService} from './services/music.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ChooseOptionComponent} from './choose-option.component';
import {ChordChooseNoteComponent} from '../chords/components/chord-choose-note.component';
import {ChordChooseTypeComponent} from '../chords/components/chord-choose-type.component';
import {ChordDisplayComponent} from '../chords/components/chord-display.component'

import {ScaleChooseNoteComponent} from '../scales/components/scale-choose-note.component';
import {ScaleChooseTypeComponent} from '../scales/components/scale-choose-type.component';
import {ScaleDisplayComponent} from '../scales/components/scale-display.component';

@Component({
    selector: 'music-query-language',
    templateUrl: '/app/templates/main.html',
    providers: [MusicService, ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES],
})


@RouteConfig([
  {
    path: '/',
    name: 'Options',
    component: ChooseOptionComponent,
    useAsDefault:true
  },
  
  {
    path: '/chord/choose-note',
    name: 'ChordsChooseNote',
    component: ChordChooseNoteComponent,
  },
  
  {
    path: '/chord/choose-type',
    name: 'ChordsChooseType',
    component: ChordChooseTypeComponent,
  },
  
  {
    path: '/chord/display',
    name: 'ChordDisplay',
    component: ChordDisplayComponent,
  },
  
  
  {
    path: '/scale/choose-note',
    name: 'ScalesChooseNote',
    component: ScaleChooseNoteComponent,
  },
  
  {
    path: '/scale/choose-type',
    name: 'ScalesChooseType',
    component: ScaleChooseTypeComponent,
  },
  
  {
    path: '/scale/display',
    name: 'ScaleDisplay',
    component: ScaleDisplayComponent,
  },
  
])



export class AppComponent { 
    public app_title: string = "Music Query Language";
    
    constructor(private _musicService: MusicService){
        
    }
}
