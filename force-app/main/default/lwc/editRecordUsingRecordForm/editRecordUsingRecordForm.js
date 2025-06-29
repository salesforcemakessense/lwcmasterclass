import { LightningElement, api } from 'lwc';

const FIELDS = ['CaseNumber','Reason','Type'];
export default class EditRecordUsingRecordForm extends LightningElement {
    @api recordId;
    fields = FIELDS;

}