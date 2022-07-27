/* 
1. Create a class User that has the following attributes:
    a. name
    b. username
    c. email
    d. password
    e. bio
    f. follows - starts out as an empty array
    g. followers - starts out as an empty array
    h. tweets - starts out as an empty array
*/

class User {
    constructor(name, username, email, password, bio,
        follows = [], followers = [], tweets = []) {
            this.name = name;
            this.username = username;
            this.email = email;
            this.password = password;
            this.bio = bio;
            this.follows = follows;
            this.followers = followers;
            this.tweets = tweets;
        }

        /* Add the following methods:
                1. getUsername: which returns the user's username
                2. userInfo: which prints the user's name, username, email, and bio
                3. changeUsername: which changes the username to the newly assigned username,
                    and prints 'Your new username is <new username>'
        */
        getUsername() {
            return this.username;
        };

        userInfo() {
            console.log(
                `Name: ${this.name},
                Username: ${this.username},
                Email: ${this.email},
                Bio: ${this.bio}`
            )
        };

        changeUsername(newUsername) {
            this.username = newUsername;
            console.log(`Your new username is ${this.username}`);
        };


        /* 
        4. changePassword: which changes the password and let's you know it's been
                    changed with the message 'Your password has been updated'
        5. follow: adds a user to the user's following array
        6. unfollow: removes a user from the user's following array
        */

        changePassword(newPassword) {
            this.password = newPassword;
            console.log(`Your password has been updated`);
        }

        follow(...users) {
            users.forEach(user => {
                this.follows.push(user)
            });
        };

        unfollow(user) {
            this.follows = this.follows.filter(follow => follow !== user);
        }

        /*
        7. showFollows: shows a list of the usernames of the users they follow
        8. addTweet: which adds a new tweet to the user's list of tweets
        9: allTweets: that prints the contents of all of the user's tweets
        */

        showFollows() {
            if (this.follows.length) {
                const followList = this.follows.map(follow => follow.getUsername());
                console.log(`Here's who you follow: ${followList}`);
            } else {
                console.log(`You don't follow anyone. Maybe you should.`)
            }
        }

        addTweet(tweet) {
            this.tweets.push(tweet)
        };

        allTweets() {
            this.tweets.forEach(tweet => {
                tweet.printTweet();
            })
        }

}


/* export the user class */
module.exports = User;