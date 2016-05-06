import React from 'react';
import { Alert } from 'react-bootstrap';


let notepad = {
    notes: [
        {
            id: 1,
            content: "Hello, world!\nBoring.\nBoring.\nBoring."
        },
        {
            id: 2,
            content: "React is awesome.\nSeriously, it's the greatest."
        },
        {
            id: 3,
            content: "Robots are pretty cool.\nRobots are awesome, until they take over."
        },
        {
            id: 4,
            content: "Monkeys.\nWho doesn't love monkeys?"
        }
    ]
}


class App extends React.Component {
    constructor() {
        super();
        this.state = { notes: notepad.notes, resultMessage: "" };
    }

    deleteNote(id) {
        this.setState({
                notes: this.state.notes.filter((note) => {
                    return note.id != id;
                })
            })
    }
    addNote() {
        // Clears any previous error messages
        this.setResultMessage("");
        
        let newNotes = this.state.notes;
        const maxNote = newNotes.length > 0  
                ? newNotes.reduce((prev, current) => (prev.id > current.id) ? prev : current)
                : {
                    id: 0,
                    content: ""
                };
        const maxId = maxNote.id;
        
        // Takes the text from the input with ref content
        const content = this.refs.content.value;
        
        if (!content) {
            const errorMessage = "The text cannot be empty";
            
            this.setResultMessage(errorMessage);
            
            return;
        }
        
        // Clears the old text from the input 
        this.refs.content.value = "";
        
        const newNote = {
            id:maxId + 1, 
            content:content
        }; 
        
        
        const resultMessage = "Success!";
        
        newNotes.push(newNote);
         
        this.setState({
            notes: newNotes,
            resultMessage
        })
    }
    
    setResultMessage(resultMessage) {
        this.setState({
            notes: this.state.notes,
            resultMessage: resultMessage
        })
    }
    
    render() {
        return (
            <div className='note-list'>
                {this.state.notes.map((note) => {
                    const id = note.id;
                    let title = note.content.substring(0,
                        note.content.indexOf('\n'));
                    title = title || note.content;
                    return (
                        <div className='note-content' key={note.id}>
                            ID: {id}&nbsp; &nbsp; &nbsp; &nbsp;
                            Title: {title}
                            <button className='btn-delete' onClick={() => this.deleteNote(id) }>Delete</button>
                        </div>
                        
                    )
                }) }
                <input className='form-control' type='text' ref="content"></input>
                <button className='btn-add' onClick={()=>this.addNote()}>Add Element</button>
                <input className='btn-file' type='file'></input>
                <span class="alert alert-danger" role="alert">
                {this.state.resultMessage}
                </span>
            </div>
        );
    }
}

export default App;