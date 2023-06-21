import image1 from "../img/pps/1.jpg";
import image2 from "../img/pps/2.jpg";
import image3 from "../img/pps/3.jpg";
import imageLondon from "../img/london.jpg";
import image4 from "../img/pps/4.jpg";
import image5 from "../img/pps/5.jpg";
import image6 from "../img/pps/6.jpg";
import image7 from "../img/pps/7.jpg";
import image8 from "../img/pps/8.jpg";
import pp from "../img/pp.jpg";

const tweets = [
    {
        profilePicture: image1,
        name: "LJ",
        username: "LilyJohnson",
        time: "1h",
        tweet: "Just had the most amazing cup of coffee! ☕️ Starting my day with a boost of energy.",
        options: {
            reply: 14,
            retweet: 3,
            like: 211,
        },
    },
    {
        profilePicture: image2,
        name: "Ava",
        username: "AvaMitchell",
        time: "30m",
        tweet: "Feeling grateful for the little things in life. It's the simple moments that bring the most joy.",
        options: {
            reply: 19,
            retweet: 14,
            like: 326,
        },
    },
    {
        profilePicture: image3,
        name: "Soph",
        username: "SophiaMiller",
        time: "49m",
        tweet: "Exploring new places is always an adventure! Just arrived in the beautiful city London and can't wait to discover its hidden gems. #Wanderlust",
        image: {
            source: imageLondon,
            width: "963",
            height: "962",
        },
        options: {
            reply: 55,
            retweet: 38,
            like: 703,
        },
        reply: {
            profilePicture: image4,
            name: "Isabella",
            username: "BellaLopez",
            time: "20m",
            tweet: "Hope you're enjoying your time in London! It's a vibrant city with so much to explore. Have a fantastic trip!",
            options: {
                reply: 4,
                retweet: "",
                like: 59,
            },
        },
    },
    {
        profilePicture: image5,
        name: "Park",
        username: "EthanParker",
        time: "2h",
        tweet: 'Just finished reading an incredible book "Republic" that left me speechless. Highly recommend adding it to your reading list!',
        options: {
            reply: 24,
            retweet: 29,
            like: 330,
        },
    },
    {
        profilePicture: image6,
        name: "Liv",
        username: "OliviaThomas",
        time: "9h",
        tweet: "Spending quality time with loved ones is priceless. Cherish those special moments and create beautiful memories. ❤️",
        quote: {
            profilePicture: image7,
            name: "Sophia",
            username: "ReynoldsSophia",
            time: "11h",
            tweet: "Had an amazing family reunion today. So grateful for the opportunity to spend quality time with all my loved ones.",
        },
        options: {
            reply: 17,
            retweet: 15,
            like: 251,
        },
    },
    {
        profilePicture: image8,
        name: "Andy",
        username: "LeoAnderson",
        time: "1h",
        tweet: "Today's workout was intense, but it feels great to push my limits and strive for progress. #FitnessGoals",
        options: {
            reply: 42,
            retweet: 22,
            like: 349,
        },
        reply: {
            profilePicture: pp,
            name: "Benjamin",
            username: "BenjaminWalker",
            time: "31m",
            tweet: "Keep crushing those workouts 💪",
            options: {
                reply: 1,
                retweet: 1,
                like: 97,
            },
        },
    },
];

export default tweets;
