const fs = require('fs')
const chalk = require('chalk');


const getNote = () => {
    console.log('your notes')
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    
    // const duplicateNotes = notes.filter(function(note) {
    //    return note.title === title 
    // })
    debugger
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('Note saved!'))
    } else {
        console.log(chalk.red.bold('Title is taken!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    console.log(chalk.red.bold('Note to remove: ') + title)
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length == notesToKeep.length) {
        console.log(chalk.bgWhite.rgb(0, 0, 0).italic.bold(' Note does not exist! '))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.red.bold('Note removed!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Notes list:'))
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const theNote = notes.find((note)=>note.title === title)
    debugger
    if(theNote) {
        console.log(chalk.red.bold(theNote.title))
        console.log(theNote.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataString)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    } catch(e) {
        return []
    }
}

module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

}