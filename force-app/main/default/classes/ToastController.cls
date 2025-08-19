public with sharing class ToastController {
    
    @AuraEnabled
    public static void createAccountWithName(String accountName){
        insert new Account(Name = accountName);
    }
}