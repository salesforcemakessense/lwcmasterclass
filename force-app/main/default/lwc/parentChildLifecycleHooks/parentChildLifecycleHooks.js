import { LightningElement } from 'lwc';

export default class ParentChildLifecycleHooks extends LightningElement {
    
    constructor(){
        super();
        console.log('Parent - Constructor is called!');
    }

    connectedCallback(){
        console.log('Parent - Connected Calback is fired!');
    }

    renderedCallback(){
        console.log('Parent - Rendered Calback is fired!');
    }

    disconnectedCallback(){
        console.log('Parent - Component is done with what it was supposed to do');
    }

    errorCallback(stack,trace){
        console.log(stack + '---' + trace);
    }

}