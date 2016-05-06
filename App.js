import React from 'react';


let notepad = {
    notes:[
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


class App extends React.Component{
    constructor(){
        super();
        this.state={notes: notepad.notes};
    }
    
    deleteNote(id) {
        console.log('remove'+id);
    }
    
    render(){
        return (
            <div className='note-list'>
            {this.state.notes.map((note)=>{
                const id = note.id;               
                let title=note.content.substring(0,
                note.content.indexOf('\n'));
                title=title ||note.content;
                return (        
                    <div className='note-content' key={note.id}>
                    ID: {id}&nbsp;&nbsp;&nbsp;&nbsp;
                    Title: {title}
                    <button className='btn-delete' onClick={() => this.deleteNote(id)}>Delete</button>
                    </div>
                )
            })}
            </div>
        ); 
    }
    
    
}

export default App;