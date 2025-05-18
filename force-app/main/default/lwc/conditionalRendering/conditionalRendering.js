import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    @track likeState = false;
    @track answerState = false;
    @track likeStateSize01 = false;
    @track likeStateSize02 = false;
    @track likeStateSize03 = false;
    @track likeStateSize04 = false;
    @track likeStateDisabled = false;
    @track answerStateDisabled = false;

    displaySetting = false;
    displayPosition = true;
    displayFirst = false;
    displaySecond = false;
    displayThird = false;

    handleOption1Click(event){
        this.displayFirst = true;
        this.displaySecond = false;
        this.displayThird = false;
    }

    handleOption2Click(event){
        this.displayFirst = false;
        this.displaySecond = true;
        this.displayThird = false;
    }

    handleOption3Click(event){
        this.displayFirst = false;
        this.displaySecond = false;
        this.displayThird = true;
    }

    handleLikeButtonClick() {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() {
        this.answerState = !this.answerState;
    }

    handleLikeButtonSizeClick(event) {
        const buttonNumber = event.target.dataset.buttonNumber;

        this[`likeStateSize${buttonNumber}`] =
            !this[`likeStateSize${buttonNumber}`];
    }

    handleLikeButtonDisabledClick() {
        this.likeStateDisabled = !this.likeStateDisabled;
    }

    handleAnswerButtonDisabledClick() {
        this.answerStateDisabled = !this.answerStateDisabled;
    }
}