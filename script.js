let inputField = document.getElementById('input-box')
let addButton = document.getElementById('add-note')
let mainContainer = document.getElementById('note-section')

//access local storage to check for existing records

let notes = JSON.parse(localStorage.getItem('notes')) || []

if(!Array.isArray(notes)){
    notes = []
}

//create
notes.forEach((note, event) => {
    let div = document.createElement('div')
    
    let paragraph = document.createElement('p')
    paragraph.innerHTML = note;

    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete Note'

    div.append(deleteButton)
    div.append(paragraph)
    mainContainer.append(div)

    deleteButton.addEventListener('click', deleteNote)
});

//event listner to add notes
addButton.addEventListener('click', (event)=>{
    let div = document.createElement('div')

    inputText = inputField.textContent
    paragraph = document.createElement('p')
    paragraph.innerHTML = inputText

    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete Note'

    div.append(deleteButton)
    div.append(paragraph)
    mainContainer.append(div)

    //push to local storage
    notes.push(inputText)
    localStorage.setItem('notes', JSON.stringify(notes))

    deleteButton.addEventListener('click', deleteNote)
})

// localStorage.clear()

function deleteNote(event){
    let elemDelete = event.target.parentElement
    elemDelete.remove()
    
    notes.splice(event, 1)
    localStorage.setItem('notes', JSON.stringify(notes))
}