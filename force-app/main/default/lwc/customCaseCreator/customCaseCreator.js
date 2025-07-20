import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CASE_OBJ from '@salesforce/schema/Case';
import SUBJECT from '@salesforce/schema/Case.Subject';
import PRIORITY from '@salesforce/schema/Case.Priority';
import DESCRIPTION from '@salesforce/schema/Case.Description';
import RECID from '@salesforce/schema/Case.RecordTypeId';

export default class CustomCaseCreator extends LightningElement {

    subject = '';
    priority = '';
    description = '';
    recordTypeId = '';

    @wire(getObjectInfo, {objectApiName: CASE_OBJ}) caseRecord({data, error}){
        if(data){
            let recordTypeDetails = data.recordTypeInfos;
            Object.keys(recordTypeDetails).forEach((key) => {
                const recordTypeInfo = recordTypeDetails[key];
                if(recordTypeInfo.name == 'SMS Community Cases'){
                    this.recordTypeId = recordTypeInfo.recordTypeId;
                }
            })
        }
    }
    
    get options() {
        return [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
        ];
    }



    populateSubject(event){
        this.subject = event.detail.value;
    }

    populatePriority(event){
        this.priority = event.detail.value;
    }

    populateDescription(event){
        this.description = event.detail.value;
    }

    async createCase(){

        const fields = {};
        fields[SUBJECT.fieldApiName] = this.subject;
        fields[PRIORITY.fieldApiName] = this.priority;
        fields[DESCRIPTION.fieldApiName] = this.description;
        fields[RECID.fieldApiName] = this.recordTypeId;

        let recordInput = {apiName: CASE_OBJ.objectApiName, fields};
        await createRecord(recordInput)
        .then((record) => {
            alert('Your case has been successfully submitted ' + record.id);
        })
        .catch(error => {
            alert('Sorry, something went wrong ' + error.body.message);
        });

    }
}