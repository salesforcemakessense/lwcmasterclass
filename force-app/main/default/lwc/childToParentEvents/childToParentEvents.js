import { LightningElement } from 'lwc';

export default class ChildToParentEvents extends LightningElement {

    eventReceived = false;
    selectedProduct = {};
    timestamp;
    selectedBy = 'Unknown as of now';

    handleProductSelection(event){
        this.eventReceived = true;
        const {selectedProduct,timestamp, selectedBy}  = event.detail;
        console.log(selectedProduct);
        console.log(timestamp);
        console.log(selectedBy);

        this.selectedProduct = selectedProduct;
        this.timestamp = timestamp;
        this.selectedBy = selectedBy;

    }
}