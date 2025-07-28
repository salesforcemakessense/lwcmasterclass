import { LightningElement, wire } from 'lwc';
import fetchTasksBySubject from '@salesforce/apex/TaskController.fetchTasksBySubject';

export default class SearchTaskBySubject extends LightningElement {

    taskList;
    subjectText = 'Follow Up';

    @wire(fetchTasksBySubject, {subjectString: '$subjectText'}) //dynamic binding for reactivity
    wiredTasks({data,error}){
        if(data){
            this.taskList = data;
        }
        else if(error){
            console.log('Error: Something went wrong' + error.body.message);
        }
    }

}