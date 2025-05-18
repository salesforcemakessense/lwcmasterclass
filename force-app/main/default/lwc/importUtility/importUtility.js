import { LightningElement } from 'lwc';
import MYLOGO from "@salesforce/resourceUrl/SMS_Logo";
import SHOWINPROD from "@salesforce/label/c.Show_in_Prod";
import SVGVECTOR from "@salesforce/resourceUrl/svgvect";
import USER_INFO from "@salesforce/user/Id";
import HASPERMISSION from "@salesforce/userPermission/ViewSetup";
import DEVICEINFO from "@salesforce/client/formFactor";
import LANG from "@salesforce/i18n/lang";
import LOCALE from "@salesforce/i18n/locale";
import CURRENCY from "@salesforce/i18n/currency";

export default class ImportUtility extends LightningElement {
    src = MYLOGO;
    svgSample = SVGVECTOR;
    userId = USER_INFO;
    deviceInfo = DEVICEINFO;

    language = LANG;
    localeInfo = LOCALE;
    currency = CURRENCY;
    
    get showInProd(){
        return SHOWINPROD == "true" ? true : false;
    }

    get hasPermissions(){
        console.log('Imported from permission set: ' + HASPERMISSION);
        return HASPERMISSION;
    }
}