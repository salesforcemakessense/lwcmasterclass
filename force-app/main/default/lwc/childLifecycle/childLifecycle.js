import { LightningElement } from 'lwc';

export default class ChildLifecycle extends LightningElement {

    constructor(){
        super();
        console.log('Child - Constructor is called!');
    }

    connectedCallback(){
        console.log('Child - Connected Calback is fired!');
    }

    renderedCallback(){
        console.log('Child - Rendered Calback is fired!');
    }

    disconnectedCallback(){
        console.log('Child - Component is done with what it was supposed to do');
    }

    errorCallback(stack,trace){
        console.log(stack + '---' + trace);
    }
}