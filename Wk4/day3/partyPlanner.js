// Party Planner

/*
1. Create a PartyPlanner class
2. A newly instantiated instance should have its guestList property initialized 
to an empty array.
3. Add two instance methods a. addToGuestList(name) - add the name to the guestList, 
b. throwParty() - return a different string depending on the length of the guestList: 
    - If there are no guests, return "gotta add people to the guest list"
    - If there are guest in the guestList, return the guests' names. For example, 
    if there are two guests, return "Welcome to the party ${name1} and ${name2}".
*/


let party = new PartyPlanner();
party.addToGuestList('Ryan W');
party.addToGuestList('Shane');
party.addToGuestList('Nick');
party.addToGuestList('Sherry');
party.addToGuestList('Ryan S');
party.addToGuestList('Andrew');
console.log(party.throwParty());