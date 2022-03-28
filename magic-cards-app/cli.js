
const yargs = require('yargs/yargs');

const app = require('./app.js');

yargs(process.argv.slice(2))

    .usage('$0: Usage <cmd> [options]')
    .command(
        // command to search card name
        'search <name>', 
        // command description
        'search for a card by name', 
        // builder
        (yargs) => {
            return yargs
                .option('n', {
                    alias: 'name',
                    describe: 'name for a card',
                    
                    type: 'string'
            });
        }, 
        // handler
        (args) => {
        //call our application which handles everything
            app.cardSearch(args.name)
        }
    )
    .help().argv;