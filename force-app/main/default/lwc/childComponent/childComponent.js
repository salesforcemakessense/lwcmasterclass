import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api productId;
    @api productName;
    @api productRating;

}