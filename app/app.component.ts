import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: '<header><h1>{{title}}</h1></header>'
})
export class AppComponent {
	title = 'PCDP Assessment Results';
	data = {
		"activity": "Assessment Subskill 1B"
	};
}
