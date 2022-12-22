isFormCompleted = ()=>{
    note_subject = document.querySelector("#note_subject").value;
    note_title = document.querySelector("#note_title").value;
    note_content = document.querySelector("#note_content").value;
    if(note_title.length<=0 || note_content.length<=0){
        alert("Please fill note");
        return false;
    }else{
        console.log(`${note_subject}:${note_title}:${note_content}`);
        return true;
    }
}

deleteNote = ()=>{
    return confirm('are you sure?');
}

ShowNote =(event)=>{
    const template="note_content-";
    console.log(event.target.getAttribute('id'));
    note = document.querySelector(`#${template}${event.target.getAttribute('id')}`)
    console.log(note.style.display);
    if(note.style.display!="block"){
        note.style.display = "block";
    }else{
        note.style.display = "none";
    }
    
}