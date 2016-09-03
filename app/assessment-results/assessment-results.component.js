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
var assessment_service_1 = require('./assessment-service');
var result_service_1 = require('./result-service');
var AssessmentResultsComponent = (function () {
    function AssessmentResultsComponent(assessmentService, resultService) {
        this.assessmentService = assessmentService;
        this.resultService = resultService;
    }
    AssessmentResultsComponent.prototype.ngOnInit = function () {
        this.assessment = this.assessmentService.getAssessment();
        this.results = this.resultService.getResults();
    };
    AssessmentResultsComponent = __decorate([
        core_1.Component({
            selector: 'assessment-results',
            templateUrl: 'app/assessment-results/assessment-results.component.html',
            styleUrls: ['vendor/bootstrap/css/bootstrap.min.css'],
            providers: [assessment_service_1.AssessmentService, result_service_1.ResultService]
        }), 
        __metadata('design:paramtypes', [assessment_service_1.AssessmentService, result_service_1.ResultService])
    ], AssessmentResultsComponent);
    return AssessmentResultsComponent;
}());
exports.AssessmentResultsComponent = AssessmentResultsComponent;
//# sourceMappingURL=assessment-results.component.js.map