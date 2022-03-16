const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (listen) => {
      rl.question('Which meal is your favorite (eg: dinner, brunch, etc.)? ', (meal) => {
        rl.question('What\'s your favorite thing to eat for that meal? ', (favFood) => {
          rl.question('Which sport is your absolute favorite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you\'re amazing at! ', (superPower) => {
              console.log(`Name: ${name}, likes to: ${activity}, while listening to: ${listen}, before or after: ${meal}, while eating: ${favFood}, to play: ${sport}, all while being able to: ${superPower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

