process.stdout.write('hello from spinner2.js... \rheyyy\n');

let array = ["|","/","-","\\","|","/","-","\\","|"];

let i = 100;
for(let item of array) {
  setTimeout(() => {
    process.stdout.write('\r'+item + "   ");
  }, i);
  
  i += 200;
}



setTimeout(() => {
  process.stdout.write('\n');
}, i);