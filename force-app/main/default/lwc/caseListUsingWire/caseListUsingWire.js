import { LightningElement, wire } from 'lwc';
import getCases from '@salesforce/apex/CaseController.getCasesInSequence';

export default class CaseListUsingWire extends LightningElement {

    caseList;
    errorMessage;

    @wire(getCases)
    wiredCases({data, error}){
        try{
            if(data){
                this.caseList = data;
                this.errorMessage = '';
            }
            if(error){
                this.data = undefined;
                this.errorMessage = error.body.message;
            }
        }
        catch(error){
            console.log('Error found while trying to retrieve cases');
        }
    }

}