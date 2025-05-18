import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    userName = 'Ravi';
    currentTime = new Date().toLocaleTimeString();
    subscriberScore = 9;
    totalLessonsWatched = 50;
    memberStatus;

    updateMemberStatus(event){
        this.memberStatus = event.target.value;
    }

    _minutesWatched = (this.totalLessonsWatched * 10);

    get minutesWatched(){
        return this._minutesWatched; 
    }

    set minutesWatched(value){
        this._minutesWatched = value < 1000 ? value : 5000;
    }

    handleWatchChange(event){
        this.minutesWatched = parseInt(event.target.value);   
    }

}