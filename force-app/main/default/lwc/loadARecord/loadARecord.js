import { LightningElement, api} from 'lwc';

export default class LoadARecord extends LightningElement {
    @api recordId;
    objectApiName='Case';
    fields=['CaseNumber', 'Priority', 'Status','Reason','Type'];
}