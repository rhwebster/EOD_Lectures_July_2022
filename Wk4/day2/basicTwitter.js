/* Import the tweet and user classes */
const Tweet = require('./tweet');
const User = require('./user');

const ryan = new User("Ryan", "rwester", "rw@aa.io", "12345", "July '22 Cohort Lead");
const shane = new User("Shane", "swilkey");
const nick = new User("Nick", "nesqueda");
const sherry = new User("Sherry", "syu");
const ryanS = new User("Ryan", "rschneider");

let tweet1 = new Tweet("Welcome to Mod 2 and OOP!!!");
let tweet2 = new Tweet("This is where things start to get fun!")

/* Check user info and fix any typos */
ryan.userInfo();
ryan.changeUsername('rwebster');
ryan.userInfo();

/* Follow Shane and Nick */
ryan.follow(shane, nick, ryan);
// ryan.follow(nick);


// /* Follow Sherry and Ryan, and unfollow Shane */
// ryan.follow(sherry);
// ryan.follow(ryanS);
// ryan.unfollow(shane);


/* Show who you're following */
ryan.showFollows();

/* Add tweet1 and print it */
ryan.addTweet(tweet1);
ryan.allTweets();

/* Add tweet2 and print all tweets */
ryan.addTweet(tweet2);
ryan.allTweets();