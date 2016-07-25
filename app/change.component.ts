import {OnChanges,Component, Input, SimpleChange} from '@angular/core';



@Component({
	selector: 'search-changes',
	template: '',

})






export class SearchChanges implements OnChanges{
	@Input() tester: string;


	ngOnChanges(...args: any[]) {
           console.log('onChange fired');
        
    }

    



}