const beeps =process.argv.slice(2);
let time = 0;
for (let i = 0; i < beeps.length; i++ ) {
  time = beeps[i] * 1000;
  if(beeps[i] > 0  && beeps[i] !== NaN){
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
  }
}