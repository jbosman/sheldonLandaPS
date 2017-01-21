app.factory('RandomGreetings', function () {

    var getRandomFromArray = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    var greetings = [
        'Hello, world!',
        'Y\'know, I could eat a peach for hours.',
        'Hello, simple human.',
        'Big gulps huh? Welp, see you later!',
        'Your “best”! Losers always whine about their best.',
        'Rule #76: Play like a champion.',
        'こんにちは、ユーザー様。',
        'Cowabunga!',
        'Put the bunny back in the box.',
        'You see this? This... is my BOOMSTICK!',
        'You know what ol\' Jack Burton always says at a time like this?',
        'You crossed the line. People trusted you and they died. You gotta\' go down.',
    ];

    return {
        greetings: greetings,
        getRandomGreeting: function () {
            return getRandomFromArray(greetings);
        }
    };

});
