import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Component} from 'angular2/core';
import {MusicService} from '../../main/services/music.service';
import {Note} from '../../main/models/note';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    templateUrl: '/app/scales/views/scale-choose-type.html',
    directives: [ROUTER_DIRECTIVES]
})

export class ScaleChooseTypeComponent implements OnInit{ 
    
    public scaleTypes:Array<any>;
    public chosenNote:String;
    
    constructor(private _musicService: MusicService,
        private _router:Router){
       
        this._musicService.scale_templates = {};
        this._musicService.scale_types = [];
        
        //add the scale templates
        this._musicService.addScaleTemplate('major', 
            ['W', 'W', 'H', 'W', 'W', 'W', 'H']);
        
        this._musicService.addScaleTemplate('minor', 
            ['W', 'H', 'W', 'W', 'H', 'W', 'W']);
            
        this._musicService.addScaleTemplate('harmonic minor', 
            ['W', 'H', 'W', 'W', 'H',  'WH', 'H']);
            
        this._musicService.addScaleTemplate('pentatonic', 
            ['W', 'W', 'WH', 'W', 'WH']);
            
        this._musicService.addScaleTemplate('minor pentatonic', 
            ['WH', 'W', 'W', 'WH', 'W']);

    }
    
    
    ngOnInit(){
        this.scaleTypes = this._musicService.scale_types;
        this.chosenNote = this._musicService.note.getNoteDisplayName();
    }
    
    chooseType(scaleType:string){
        
        this._musicService.current_scale_type = scaleType.toUpperCase();
        
        //get the modified chromatic scale for that note
        this._musicService.getModifiedChromaticScale();
        
        //get the modified chromatic scale for that note
        this._musicService.getScale();
        
        //go to the chord types
        this._router.navigate(['ScaleDisplay']);
    }
    
}
