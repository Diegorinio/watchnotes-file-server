isFormCompleted = ()=>{
    note_subject = document.querySelector("#note_subject");
    console.log(note_subject.value);
}

deleteNote = ()=>{
    return confirm('are you sure?');
}