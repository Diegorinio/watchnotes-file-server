const note_content_input = document.querySelector("#note_content");
const note_content_input_length = document.querySelector(".input_value_characters");

OnInputChange=(event)=>{
    let len = event.target.value.length;
    note_content_input_length.innerHTML = len
}

note_content_input.addEventListener("input", OnInputChange);

isFormCompleted = ()=>{
    note_subject = document.querySelector("#note_subject").value;
    note_title = document.querySelector("#note_title").value;
    note_content = document.querySelector("#note_content").value;
    if(note_title.length<=0 || note_content.length<=0){
        alert("Please fill note");
        return false;
    }
    else if(note_title.length > 12){
        alert("Title is too long[ max 12 characters]");
        return false;
    }
    else{
        console.log(`${note_subject}:${note_title}:${note_content}`);
        return true;
    }
}

deleteNote = (title)=>{
    return confirm(`Do you want to delete: ${title}`);
}

ShowNote =(event)=>{
    const template="content";
    const id = event.target.getAttribute('id');
    console.log(id);
    note = document.getElementById(`${id}-${template}`);
    // note = document.querySelector(`#'${event.target.getAttribute('id')}'-content`)
    console.log(note.style.display);
    if(note.style.display!="block"){
        note.style.display = "block";
    }else{
        note.style.display = "none";
    }
    
}

addCharacterToInput=(e)=>{
    console.log(e.target.getAttribute("value"));
    const char = e.target.getAttribute("value");
    document.querySelector("#note_content").value+=char;
}