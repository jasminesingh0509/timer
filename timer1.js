const beeps =process.argv.slice(2);
let time = 0;
for (let i = 0; i < beeps.length; i++ ) {
  time += beeps[i] * 1000;
setTimeout(() => {
  process.stdout.write('\x07');
}, time);
}




