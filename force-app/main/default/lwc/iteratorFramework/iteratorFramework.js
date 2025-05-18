import { LightningElement } from 'lwc';

export default class IteratorFramework extends LightningElement {

    taskList = [
        {taskId: 1, taskName: 'Prepare Video Script', taskPriority: 'High', taskProgress: 'In Progress'},
        {taskId: 2, taskName: 'Record Tutorial', taskPriority: 'Medium', taskProgress: 'Pending'},
        {taskId: 3, taskName: 'Edit & Upload', taskPriority: 'Low', taskProgress: 'Pending'}
    ];
}