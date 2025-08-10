import { LightningElement, wire } from 'lwc';
import fetchCases from "@salesforce/apex/IndependentWireController.getCases";
import fetchTasks from "@salesforce/apex/IndependentWireController.getTasks";

export default class IndependentWires extends LightningElement {
    foundCases = false;
    foundTasks = false;

    caseList;
    taskList;

    @wire(fetchCases)
    wiredCases({data, error}){
        if(data){
            this.caseList = data;
            this.foundCases = true;
        }
        if(error){
            this.caseList = undefined;
        }
    }

    @wire(fetchTasks)
    wiredTasks({data, error}){
        if(data){
            this.taskList = data;
            this.foundTasks = true;
        }
        if(error){
            this.taskList = undefined;
        }
    }


}