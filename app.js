const chalk = require('chalk');
const yargs = require('yargs')
const validator = require('validator')
const addi = require('./util')
const notes = require('./notes');
const { required } = require('yargs');
const resutl =addi(10, 6)


// console.log(chalk.blue.underline.italic(resutl))
// console.log(st)
// console.log(chalk.rgb(123, 255, 67).bold(validator.isEmail('sandy@gmaic.ocm')))
// const name = 'Sindre';
// console.log(chalk.red('Hello %s'), name);
// console.log(chalk`{bold.rgb(10,100,200) Hello!}`)


yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'contend of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(chalk.red.bold('Title: ') + argv.title + chalk.red.bold('\nBody: ') + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(chalk.red.bold('Title: ') + argv.title)
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(args) {
        notes.readNote(args.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'show the lists of notes',
    handler() {
        notes.listNotes()
    }
})

yargs.parse()
