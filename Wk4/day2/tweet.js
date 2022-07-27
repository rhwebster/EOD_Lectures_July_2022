/* 
    Create a class 'Tweet' that has a text body and a method 'printTweet' that
    prints the body of the tweet
*/

class Tweet {
    constructor(body) {
        this.body = body;
    }

    printTweet() {
        console.log(this.body);
    }
};

/* export the tweet class */
module.exports = Tweet;