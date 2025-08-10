import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import getTasksByAccountName from "@salesforce/apex/DependentWireController.fetchTasksForAccount";

export default class DependentWires extends LightningElement {

    @api recordId;
    accountName;
    taskList;
    taskFound = false;
    fields = [ACCOUNT_NAME];

    @wire(getRecord, {recordId: '$recordId', fields: '$fields'})
    wiredAccount({data,error}){
        if(data){
            this.accountName = data.fields.Name.value;
        }
        else if(error){

        }
    }

    @wire(getTasksByAccountName, {accountName: '$accountName'})
    wiredTasks({data, error}){
        if(data){
            this.taskList = data;
            this.taskFound = true;
        }
        else if(error){
            console.log(error.body.message);
        }
    }





}