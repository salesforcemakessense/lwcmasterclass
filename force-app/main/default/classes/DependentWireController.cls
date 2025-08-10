public with sharing class DependentWireController {

    @AuraEnabled(cacheable = true)
    public static List<Task> fetchTasksForAccount(String accountName){
        try {
            return [SELECT Id, Subject, ActivityDate, Description, What.Name FROM TASK WHERE What.Name = :accountName];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}