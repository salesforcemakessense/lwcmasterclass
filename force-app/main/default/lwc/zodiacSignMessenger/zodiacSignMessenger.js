import { LightningElement, track } from 'lwc';

export default class ZodiacSignMessenger extends LightningElement {

    @track userProfile = {};
    zodiacTraits = [
    {
      sign: 'Capricorn',
      from: '12-22',
      to: '01-19',
      emoji: '🐐',
      trait: "You re disciplined, practical, and quietly ambitious. You don t just chase goals—you build them brick by brick. But your worth isn t tied to your output. It s okay to rest. You ve earned it more than you know."
    },
    {
      sign: 'Aquarius',
      from: '01-20',
      to: '02-18',
      emoji: '💧',
      trait: "You're a thinker, a dreamer, and often the most original person in the room. Rules were made to be rewritten by you. But even rebels need connection—let others into your world, even if it s just a little."
    },
    {
      sign: 'Pisces',
      from: '02-19',
      to: '03-20',
      emoji: '🐟',
      trait: "Your heart is a sponge for the world s emotions, and your imagination could paint entire galaxies. You give endlessly, sometimes to the point of forgetting yourself. Guard your energy—you re more powerful when you re whole."
    },
    {
      sign: 'Aries',
      from: '03-21',
      to: '04-19',
      emoji: '🔥',
      trait: "You re a natural-born leader—bold, driven, and full of fire. When you set your mind to something, there's no stopping you. Just remember: not every battle needs to be fought, and slowing down doesn't mean you're losing."
    },
    {
      sign: 'Taurus',
      from: '04-20',
      to: '05-20',
      emoji: '🐂',
      trait: "You crave stability, comfort, and the finer things in life. Loyalty runs deep in your soul, and when you commit, you re all in. Just be mindful—your strength can sometimes come off as stubbornness."
    },
    {
      sign: 'Gemini',
      from: '05-21',
      to: '06-20',
      emoji: '👯',
      trait: "You think fast, talk faster, and always have five ideas buzzing in your head. People love your wit and charm, but even you need a pause from the noise sometimes. Give your thoughts a moment to breathe."
    },
    {
      sign: 'Cancer',
      from: '06-21',
      to: '07-22',
      emoji: '🦀',
      trait: "Your emotions are deep and true, and you love with everything you have. You're the protector of your circle, often putting others before yourself. Just don t forget—you deserve that same care in return."
    },
    {
      sign: 'Leo',
      from: '07-23',
      to: '08-22',
      emoji: '🦁',
      trait: "You light up every room with confidence and warmth. Your presence is magnetic, and your heart, generous. But underneath the boldness, there's a soft soul that just wants to be appreciated for who you truly are."
    },
    {
      sign: 'Virgo',
      from: '08-23',
      to: '09-22',
      emoji: '🌾',
      trait: "You see the details others miss, and you bring order to chaos. Always ready to help, you hold yourself (and others) to high standards. Be kind to yourself—perfection isn t always the goal, progress is."
    },
    {
      sign: 'Libra',
      from: '09-23',
      to: '10-22',
      emoji: '⚖️',
      trait: "You re the peacemaker, the charmer, the one who sees both sides. Balance means everything to you—whether in aesthetics, relationships, or choices. But in trying to please everyone, don t forget to choose yourself."
    },
    {
      sign: 'Scorpio',
      from: '10-23',
      to: '11-21',
      emoji: '🦂',
      trait: "You feel everything with intensity, whether it s love, ambition, or truth. You have a gift for seeing through façades, but that doesn t mean you always need to hide behind your own. Vulnerability isn t weakness—it s power."
    },
    {
      sign: 'Sagittarius',
      from: '11-22',
      to: '12-21',
      emoji: '🏹',
      trait: "You were born to roam—physically, mentally, and spiritually. Adventure excites you, and honesty guides you. Just remember: not everyone can keep up, so slow down occasionally and let someone catch their breath beside you."
    }
  ];

  
    userName;
    userBirthDate;

    handleNameChange(event){
       this.userName = event.target.value;
    }

    handleDateChange(event){
        this.userBirthDate = event.target.value;
    }

    resultsRecieved = false;

    handleSubmit(){
        
        let userDob = new Date(this.userBirthDate);
        const userMonth = userDob.getMonth() + 1;
        const userDate = userDob.getDate();
        this.userProfile = this.checkZodiacSign(userMonth, userDate);

    }

    checkZodiacSign(month, day){
        for(let sign of this.zodiacTraits){
           const [fromMonth, fromDay] = sign.from.split('-').map(Number);
           const [toMonth, toDay] = sign.to.split('-').map(Number);

           if((month === fromMonth && day >= fromDay) || (month === toMonth && day <= toDay) ) {
                this.resultsRecieved = true;
                return sign;
           }
        }
    }
}