import { LightningElement } from 'lwc';
import fetchTasksBySubject from '@salesforce/apex/TaskController.fetchTasksBySubject';

export default class SearchTaskBySubjectImperative extends LightningElement {
    subject;
    taskList;
    errorMessage;
    showTable = false;

    handleSubjectChange(event){
        this.subject = event.target.value;
    }

    searchTasks(){
        fetchTasksBySubject({subjectString: this.subject})
        .then(result => {
            this.taskList = result;
            this.showTable = true;
        })
        .catch(error => {
            this.errorMessage = error.body.message;
        });
    }
}