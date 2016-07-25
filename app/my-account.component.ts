import {Component} from '@angular/core';
import {MD_ICON_DIRECTIVES, MdIconRegistry, MdIcon} from '@angular2-material/icon';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/components/dropdown';
import { CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';




@Component({
	selector: 'my-account',
	templateUrl: 'app/html/my-account.component.html',
	styleUrls: ['app/css/my-account.component.css'],
	directives: [MD_BUTTON_DIRECTIVES,
	 MD_LIST_DIRECTIVES,
	  MdIcon,
	  DROPDOWN_DIRECTIVES,
	  CORE_DIRECTIVES,
	  FORM_DIRECTIVES ],
	providers: [MdIconRegistry]

})


export class MyAccount{


	options: string[] = ["Account", "Settings", "Logout"];
	public dropdown:{isopen:boolean} = {isopen: false};


	toggleProfileMenu() {
		this.dropdown.isopen = !this.dropdown.isopen;
		console.log("im here" + this.dropdown.isopen);
	}






}



