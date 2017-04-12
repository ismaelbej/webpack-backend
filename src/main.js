import Promise from 'bluebird';

async function main() {
  await Promise.delay(1000);
  console.log('Hello world!');
}

main();
