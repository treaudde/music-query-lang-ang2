import {Note} from '../models/note';
import {Injectable} from 'angular2/core';

@Injectable()
export class MusicService{
    
    public note:Note;
    public chromatic_scale:Note[];
    public modified_chromatic_scale:Note[];
    public scale:Note[];
    public scale_type:string;
    
    public current_scale_type:string;
    public scale_types:Array<string> ;
    public scale_templates: any ;
        
    public chord: Note[];
    public chord_templates:any;
    public chord_types:any;
    public current_chord_type:string;
   
    public notes:string[]
        
    public step_values:any;
    
    constructor(){
        
        //the note object the operations will be based on
        this.note = null;
        
        //stores the chromatic scale
        this.chromatic_scale = [];
        
        //once a chord or scale is picked, this will hold the chromatic scale
        //starting and ending with the chosen note
        this.modified_chromatic_scale = [];
        
        //stores the chosen scale
        this.scale = [];
        this.current_scale_type = '';
        this.scale_types = [];
        this.scale_templates = {};
        
        this.chord = [];
        this.chord_templates = {};
        this.current_chord_type = '';
        this.chord_types = {
            three: [],
            four: [],
            five: [],
            six: [],
            seven: []
        }
        
        
        this.notes = ['A', 'A#|Bb', 'B', 'C', 'C#|Db', 'D', 'D#|Eb', 'E', 'F',
            'F#|Gb', 'G', 'G#|Ab'];
        
        this.step_values = {
            'W' : 2,
            'H' : 1,
            'WH' : 3,
            'WW' : 4,
            'WWH' : 5
        }

        this.init();
    }
    
    init(){
       this.createChromaticScale(); 
 
    }   
    
    createChromaticScale(){
        this.chromatic_scale = [];

        //process the notes and create chromatic scale
        this.notes.forEach((note, index, array) => {
            let noteObject = null;
            
            //split it to see if it has multiple names
            let noteParts = note.split('|');
            
            if(noteParts.length > 1){//we have an alternate name
                noteObject = new Note(noteParts[0], noteParts[1], index);
            }
            else{
                 noteObject = new Note(noteParts[0], null, index);
            }
            
            this.chromatic_scale.push(noteObject);
            
        })
        
        console.log(this.chromatic_scale);
    }
    
    getModifiedChromaticScale(){   
        //make sure this is empty
        this.modified_chromatic_scale = [];
        
        //where we will start and end to create the modified chromatic scale
        let start_index = 0;
        this.chromatic_scale.forEach((note, index) => {
            if(this.note.name === note.name){
                start_index = index;
               // break;
            }
        })
        
        //now lets create the modified chromatic scale
        for(let x=start_index; x<this.notes.length; x++){
            this.modified_chromatic_scale.push(this.chromatic_scale[x]);
        }
        
        for(let x=0; x<=start_index; x++){
             this.modified_chromatic_scale.push(this.chromatic_scale[x]);
        }
        
        //double it for the extended chords
        let modified_chromatic_scale_length = this.modified_chromatic_scale.length;
        for(let x=1; x<modified_chromatic_scale_length; x++){
            this.modified_chromatic_scale.push(this.modified_chromatic_scale[x]);
        }
        
        console.log(this.modified_chromatic_scale);
    }
    
    getScale(){

        //make sure this is empty since the service is only instantiated once
        this.scale = [];
        
        //get the scale type
        let scale_type = this.current_scale_type.toLowerCase();
          
        //get the template
        let template = this.scale_templates[scale_type];

        //get the next step to match
        let counter_number = 0;//initally
        let step = '';
        for(let x=0; x<this.modified_chromatic_scale.length; x++){
            
            if(x === counter_number){//if we match, push the note and pop the next pattern
                this.scale.push(this.modified_chromatic_scale[x]);
                step = template.shift(); 
                
                if(typeof this.step_values[step] !== 'undefined'){
                    counter_number += this.step_values[step]; 
                }
            }
 
        }
    }

    
    getChord(){
        //make sure this is empty since the service is only instantiated once
        this.chord = [];
        
        //get the chord type
        let chord_type = this.current_chord_type;
          
        //get the template
        //console.log(this.chord_templates);
        //console.log(chord_type);
        let template = this.chord_templates[chord_type];

        //get the next step to match
        let counter_number = 0;//initally
        let step = '';
        for(let x=0; x<this.modified_chromatic_scale.length; x++){
            
            if(x === counter_number){//if we match, push the note and pop the next pattern
                this.chord.push(this.modified_chromatic_scale[x]);
                step = template.shift(); 
                
                if(typeof this.step_values[step] !== 'undefined'){
                    counter_number += this.step_values[step]; 
                }
            }
 
        }

    }
    
    addScaleTemplate(type, template){ 
        this.scale_templates[type] = template
        //scale types
        this.scale_types.push(type.toUpperCase());
    }
    
    addChordTemplate(num_notes, type, template){ 
        this.chord_templates[type] = template
        //types
        this.chord_types[num_notes].push(type);
    }
    
}
