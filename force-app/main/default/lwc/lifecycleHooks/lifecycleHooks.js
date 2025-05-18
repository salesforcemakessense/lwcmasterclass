import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    userName = 'Subhashini';

    handleNameChange(){
        this.userName = 'Vinod';
    }

    constructor(){
        super();
        //console.log('Constructor is called!');
    }

    connectedCallback(){
        //console.log('Connected Calback is fired!');
    }

    renderedCallback(){
        //console.log('Rendered Calback is fired!');
    }

    disconnectedCallback(){
        //console.log('Component is done with what it was supposed to do');
    }

    errorCallback(stack,trace){
        //console.log(stack + '---' + trace);
    }
}