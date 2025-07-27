public with sharing class CaseController {

    //fetch 20 cases based on their createddate ascending order
    @AuraEnabled(cacheable= true)
    public static List<Case> getCasesInSequence(){
        return [SELECT Id, Origin, Reason, Priority, Subject FROM Case ORDER BY CreatedDate LIMIT 20];
    }

}