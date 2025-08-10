public class IndependentWireController {
    
    @AuraEnabled(cacheable = true)
    public static List<Case> getCases(){
        return [SELECT Id, Subject, Origin, Description FROM CASE LIMIT 5];
    }

    @AuraEnabled(cacheable = true)
    public static List<Task> getTasks(){
        return [SELECT Id, Subject, ActivityDate, Description FROM TASK LIMIT 5];
    }
}