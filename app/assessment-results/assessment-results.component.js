"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AssessmentResultsComponent = (function () {
    function AssessmentResultsComponent() {
        this.assessment = {
            "id": 1,
            "title": "Assessment for Subskill 1A",
            "type": 3
        };
        this.results = [
            {
                "user": {
                    "id": "juandcfromMFI",
                    "username": "juandc",
                    "name": "Juan Miguelita Asuncion Dela Cruz",
                    "email": "juandc@pcdpforever.com"
                },
                "answers": []
            },
            {
                "user": {
                    "id": "songokuthesupersaiyan",
                    "username": "songoku",
                    "name": "Goku",
                    "email": "songoku@pcdpforever.com"
                },
                "answers": []
            },
            {
                "user": {
                    "id": "saitamathecapedbaldy",
                    "username": "capedbaldy",
                    "name": "Saitama",
                    "email": "saitamathecapedbaldy@pcdpforever.com"
                },
                "answers": []
            }
        ];
    }
    AssessmentResultsComponent = __decorate([
        core_1.Component({
            selector: 'assessment-results',
            template: "\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">{{assessment.title}}</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\tDescription here\n\t\t\t</div>\n\t\t\t<table class=\"table-header\">\n\t\t\t\t<span>User</span>\n\t\t\t\t<span>Item 1</span>\n\t\t\t\t<span>Item 2</span>\n\t\t\t\t<span>Item 3</span>\n\t\t\t\t<span>Score</span>\n\t\t\t</table>\n\n\t\t\t<div class=\"table-row\" *ngFor=\"let result of results\">\n\t\t\t\t{{result.user.name}}\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AssessmentResultsComponent);
    return AssessmentResultsComponent;
}());
exports.AssessmentResultsComponent = AssessmentResultsComponent;
//# sourceMappingURL=assessment-results.component.js.map