import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationPossibilities extends NavigationMixin(LightningElement) {

    navigateToRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '001Qy00001JlcCsIAJ',
                objectAPIName: 'Account', 
                actionName: 'view'
            }
        })
    }

    navigateToWeb(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.youtube.com/@salesforcemakessense'
            }
        })
    }

    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Display_Notifications'
            }
        })
    }

    navigateToView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectAPIName: 'Account', 
                actionName: 'list'
            }, 
            state: {
                filterName: 'AllAccounts' 
            }
        })
    }
}