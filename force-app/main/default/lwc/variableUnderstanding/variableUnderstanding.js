import { LightningElement, api, track} from 'lwc';

export default class VariableUnderstanding extends LightningElement {

    @api memberName = 'Subhashini';
    myListOfBooks = [];
    @track myPersonality = {
        name: 'Vinod',
        age: 35
    };

    @api myFavTeam = 'Kolkata Knight Riders';

    @api tryingTHIS = 'Tried Now';
}