isFormCompleted = ()=>{
    note_subject = document.querySelector("#note_subject");
    console.log(note_subject.value);
}

deleteNote = (form)=>{
    if(!valid)
    {
            alert("please set note properties")
    }
    else{
            return confirm("Do you really want to delete this note?");
    }
}