import {Component} from 'angular2/core';
import {MusicService} from './services/music.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: '/app/main/views/choose-option.html',
    directives: [ROUTER_DIRECTIVES]
})

export class ChooseOptionComponent { 
    
    public options: Array<any> = [
        {name: "Scales", routerName: 'ScalesChooseNote'}, 
        {name: "Chords", routerName: 'ChordsChooseNote'}
    ]
    
    constructor(private _musicService: MusicService){
        
    }
}
