import {Component, provide, Directive, Output, EventEmitter, Input, OnChanges, ChangeDetectorRef} from '@angular/core';
import {VinylPanelComponent} from './vinyl-panel.component';
import * as client from './env/spotify_sec';
import SpotifyService from 'angular2-spotify/angular2-spotify';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_INPUT_DIRECTIVES, MdInput, MdPlaceholder} from '@angular2-material/input';
import {FORM_DIRECTIVES} from '@angular/forms';

import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/components/dropdown';
import { CORE_DIRECTIVES} from '@angular/common';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MyAccount} from './my-account.component';
import {SearchChanges} from './change.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/html/app.component.html',
    styleUrls: ['app/css/app.component.css'],
    directives: [VinylPanelComponent,
      MD_BUTTON_DIRECTIVES,
      MdIcon,
      MD_TOOLBAR_DIRECTIVES,
      MD_INPUT_DIRECTIVES,
      MdInput, 
      FORM_DIRECTIVES, 
      DROPDOWN_DIRECTIVES,
      CORE_DIRECTIVES,
      SearchChanges,
      MD_LIST_DIRECTIVES,
      MyAccount,
      ],
    providers: [SpotifyService, provide("SpotifyConfig", {
            useValue: {    
                clientId: client.client_id,
                redirectUri: client.redirect_uri,
                scope: 'user-read-private',
                authToken: localStorage.getItem('spotify-token'),
            }
        }), MdIconRegistry],
   

})

export class AppComponent{

    
  
    
    title = "hello there";
    token = localStorage.getItem('spotify-token');
    data: any;

    test: string[] = ["test1",
    "secundo"];

   
    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};
  
 
 
  public toggleDropdown() {
    this.status.isopen = !this.status.isopen;
    console.log("We are here" + this.status.isopen);
  }


    constructor(private spotifyService: SpotifyService, private cdr: ChangeDetectorRef ){
        this.data  = spotifyService;
    
    }



    login(){
        this.spotifyService.login().subscribe( data =>{
            
            console.log("im here");
            console.log(data);

           });
    }

    getcurrentUser(){
        this.spotifyService.getCurrentUser().subscribe(data => {
          console.log(data['display_name']);
        });
    }


        getalbum(){
            this.spotifyService
          .getAlbums('2BTZIqw0ntH9MvilQ3ewNY,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37')
          .subscribe(data => {
            console.log(data);
            console.log(data['albums'][1]['artists'][0]['name']);
            this.data =  "hello";
      });
        }

        


        


    }





