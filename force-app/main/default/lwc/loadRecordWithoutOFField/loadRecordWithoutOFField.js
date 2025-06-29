import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import CASE_NUMBER from '@salesforce/schema/Case.CaseNumber';
import ORIGIN_FIELD from '@salesforce/schema/Case.Origin';
import TYPE_FIELD from '@salesforce/schema/Case.Type';


export default class LoadRecordWithoutOFField extends LightningElement {

    @api recordId;
    fields = [CASE_NUMBER,ORIGIN_FIELD,TYPE_FIELD];

    @wire(getRecord, {recordId: '$recordId', fields: '$fields'}) caseVar;

    get casenumber(){
        return getFieldValue(this.caseVar.data, CASE_NUMBER);
    }

    get origin(){
        return getFieldValue(this.caseVar.data, ORIGIN_FIELD);
    }

    get type(){
        return getFieldValue(this.caseVar.data, TYPE_FIELD);
    }

}