import { LightningElement, api } from 'lwc';

export default class EditRecordWithCustomLayout extends LightningElement {
    @api recordId;
    objectApiName = 'Case';

    handleFormSuccess(event){
        //as soon as success happens, reset the form.
        const formElement = this.template.querySelector('lightning-record-edit-form');
        formElement.reset();

    }
}