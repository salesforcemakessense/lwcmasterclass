import { LightningElement } from 'lwc';
import createAccountWithName from "@salesforce/apex/ToastController.createAccountWithName"; 
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastDisplay extends LightningElement {
    accountName;

    handleNameChange(event){
        this.accountName = event.detail.value;
    }

    handleAccountCreation(){
        
        if(this.accountName){
            createAccountWithName({accountName: this.accountName})
            .then(() => {
                this.showToast('Success','Your account has been created', 'success','sticky');
            })
            .catch(error => {
                this.showToast('Error','Something went wrong, please contact System Admin! ' + error.body.message , 'error','sticky');
            })
        }
        else{
            this.showToast('Error','Please enter Account Name', 'error','sticky');
        }
    }

    showToast(title, message, variant, mode) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant, 
            mode: mode
        });
        this.dispatchEvent(event);
    }
    
}