import { LightningElement } from 'lwc';

export default class CreateARecord extends LightningElement {
    fields=['Subject','Type','Reason','Origin','Priority','SLAViolation__c'];
}