console.log("[index.js]", '-----!!!!');
const execSync = require('child_process').execSync;
const readline = require('readline');

const exec  = require('child_process').exec;
exec('git flow feature start -h', function(error, stdout, stderr) {
    if (error) {
        console.log('exec error: ', error.message);
    }else{
       console.log(stdout)
    }
});

// process.output.on('data', (e)=>{
//     console.log(e);
// });

// const rl = readline.createInterface({
//     input: console.,
//     output: process.stdout
//   });
// rl.on('line', (input) => {
//     console.log(`接收到：${input}`);
//   });

// let ii;
try {
    // execSync(`npm view gfrp dist-tags -json`, { stdio: 'ignore' })

    ii = execSync(`git flow feature start -h`, { stdio: 'inherit' });
} catch (error) {
    // console.log('error!!', error.message);
}

// console.log('ii', process.stdout);


// console.log();

// const conventionalRecommendedBump = require(`conventional-recommended-bump`);
// conventionalRecommendedBump({
//     preset: `angular`
//   }, (error, recommendation) => {
//     console.log(recommendation.releaseType); // 'major'
//   });


// //   import bump from 'standard-version/lib/lifecycles/bump';
//   const bump = require('standard-version/lib/lifecycles/bump');
//   let args = {};
//     args.silent = true;
//     args.dryRun = true;
//     args.skip = {};
//     args.skip.changelog = true;
//     // args = { ...args, ...opt };


//     (async ()=>{
        
//         try {
//             console.log("bbbbb--", await bump(args, '1.1.1.2'));
//         } catch (error) {
//             console.log(error);
//         }
//     })()

// var readline = require('readline');
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What do you think of node.js? ", function(answer) {
//   console.log("Thank you for your valuable feedback:", answer);

//   rl.close();
// });

"gfrp --release --finish rFkDS (master release hotfix)"

"gfrp --release --pre rc(any)"

"gfrp --release-as 0.0.0-ex-%h"
"gfrp --release-as %v-ex-%h"
"gfrp --release-as %v-alpha.%n"
"<major|minor|patch>"



// const cmd = `npx standard-version@^7.0.0 ${process.argv.slice(2).join(' ')}`;
// try {
//     execSync(cmd, {stdio: 'inherit'});
// } catch (error) {
//     console.error(error.message);
// }


// const parse = require('parse-git-config');
 
// sync
// console.log(parse.sync());


// const commander = require('commander');

// // const fs = require('fs-extra');
// // const download = require('download');
// // const ora = require('ora');
// // const yaml = require('js-yaml');
// // const chalk = require('chalk').default;
// // const semver = require('semver');
// const async = require('async');
// // const {logger} = require('@react-native-community/cli-tools');

// let spinner;

// (async () => {
//   commander
//     .option('i, init <dir>', 'Initializes a directory with an example project.')
//     .option('-t, --typescript', 'Use typescript template.')
//     .option('-s, --starter <version>', 'Specify the version of starter.')
//     .option('-n, --npm ', 'Force usage of npm.')
//     .parse(process.argv);






// })()


// if (process.version.match(/v(\d+)\./)[1] < 6) {
//     console.error('standard-version: Node v6 or greater is required. `standard-version` did not run.')
//   } else {
//     const standardVersion = require('standard-version')
//     const cmdParser = require('standard-version/command')
//     standardVersion(cmdParser.argv)
//       .catch(() => {
//         process.exit(1)
//       })
//   }


console.log("[index.js]", 'END-----!!!!');