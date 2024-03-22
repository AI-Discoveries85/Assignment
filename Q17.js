"use strict";
let Guest_List = ['Imran Khan', 'Newaz Sharif', 'Asif Ali Zardari'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n') 
// } 
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n') 
// }  
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table So we are inviting 3 more guestes.');

// Three guests aaded in array.
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Marym Nawaz');
Guest_List.push('Bilawal Bhotto Zardari');

// I printed 6 array guests here.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}

// Sorry message for the guests not inviting.
console.log('\nSorry we can not arrange big table, only two people will be invited.');

// I removed guests from here.
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, you are not invited for Dinner.`);
} 

// Our two remaing guests.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank you!\n\n');
}

// I removed all the from array.
Guest_List.splice(0, 2);
console.log(Guest_List);
