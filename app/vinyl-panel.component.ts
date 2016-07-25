import {Component, EventEmitter, Output, Input} from '@angular/core';
import { MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES}  from '@angular2-material/sidenav';
import {MdIcon, MdIconRegistry, MD_ICON_DIRECTIVES} from '@angular2-material/icon'


@Component({

	selector: 'vinyl-panel',
	templateUrl: 'app/html/vinyl-panel.component.html',
	styleUrls: ['app/css/vinyl-panel.component.css'],
	directives: [MD_BUTTON_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MdIcon],
	providers: [MdIconRegistry]
	
})



export class VinylPanelComponent {

	sidenav: {isopen: boolean} = {isopen: false};



	toggleSideNav() {
		this.sidenav.isopen = !this.sidenav.isopen;
		
	}

	


	

}