// Vendor
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

// Our app
import { AppComponent } from './app.component';
import { AssessmentResultsComponent } from './assessment-results/assessment-results.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent, AssessmentResultsComponent
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}