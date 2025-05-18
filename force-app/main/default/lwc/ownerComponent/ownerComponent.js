import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {

    productList = [
        {id:'1', name:'Macbook Air', rating: '3/5' },
        {id:'2', name:'Macbook Pro', rating: '4/5' },
        {id:'3', name:'Humanity', rating: '5/5' },
    ];

    callChildMethod(){
        this.template.querySelector('c-container-component').handleParentCall();
    }
}