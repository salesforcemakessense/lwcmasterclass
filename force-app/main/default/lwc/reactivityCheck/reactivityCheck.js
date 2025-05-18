import { LightningElement, track } from 'lwc';

export default class ReactivityCheck extends LightningElement {
    userAddress = '19 Yemen Road, Yemen';
    @track myPersonalDetails = [
        {
          "_id": "681f13e6818e12f21451e84b",
          "index": 0,
          "guid": "47b472b3-862c-49fb-a93d-474516d925f8",
          "isActive": false,
          "balance": "$3,832.23",
          "picture": "http://placehold.it/32x32",
          "age": 32,
          "eyeColor": "blue",
          "name": "Taylor Brewer",
          "gender": "female",
          "company": "UNIA",
          "email": "taylorbrewer@unia.com",
          "phone": "+1 (907) 525-3964",
          "address": "584 Kenmore Terrace, Noxen, Indiana, 6369",
          "registered": "2023-08-01T06:22:31 -04:00",
          "latitude": -9.044658,
          "longitude": 172.242497,
          "tags": [
            "ut",
            "cillum",
            "nostrud",
            "irure",
            "incididunt",
            "magna",
            "cupidatat"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Merrill Glass"
            },
            {
              "id": 1,
              "name": "Harrell Mcintosh"
            },
            {
              "id": 2,
              "name": "Summer Fuller"
            }
          ],
          "greeting": "Hello, Taylor Brewer! You have 1 unread messages.",
          "favoriteFruit": "strawberry"
        }
      ];

    updateAddress(){
        this.userAddress = '9 Yemen Road, Yemen';
        this.myPersonalDetails[0].guid = "681f13e6818e12f21451e84b";
        this.myPersonalDetails[0].friends[0].name = "Himanshu Maheshwari";
        
    }
}