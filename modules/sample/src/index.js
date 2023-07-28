import { Command } from 'commander'
import * as log4js from 'log4js'

const logger = log4js.getLogger();
logger.level = 'all'
const program = new Command(); 


program
    .version('0.0.1')
    .option('-f, --file <path>', 'flow.json or flow project path')
    .option('-o, --output <path>', 'Output path defaults to the current directory')
    .parse(process.argv);

const options = program.opts();
logger.info(options)