import { LightningElement } from 'lwc';

export default class CaseFormWithEvents extends LightningElement {
    objectApiName = 'Case';

    handleSubmit(event){
        event.preventDefault();
        console.log('Form is submitted for Case Creation' +  JSON.stringify(event.detail));
    } 

    handleSuccess(event){
        alert('Case has been successfully created!' + JSON.stringify(event.detail));
    }

    handleLoad(){

    }

    handleError(){

    }

}