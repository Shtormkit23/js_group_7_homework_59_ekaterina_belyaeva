import React, {Component} from 'react';
import AddANote from "../../components/AddANote/AddANote";
import Note from "../../components/Note/Note";
import './ToDoList.css';
import { nanoid } from 'nanoid'

class ToDoList extends Component {
    state = {
        notes: [
            {text: 'Harry Potter and the Chamber of Secrets', id: '1'},
            {text: 'Pirates of the Caribbean', id: '2'},
            {text: 'Casper The Friendly Ghost', id: '3'},
        ],
        newNote: {text: '', id: ''}
    };

    changeNote = event => {
        const newNoteCopy = {...this.state.newNote};
        newNoteCopy.text = event.target.value;
        this.setState({newNote:newNoteCopy});
    };

    changeNotes = (event, id) => {
        const index = this.state.notes.findIndex(p => p.id === id);
        const taskCopy = [...this.state.notes];
        const noteCopy = {...taskCopy[index]};
        noteCopy.text = event.target.value;
        taskCopy[index] = noteCopy;
        this.setState({notes:taskCopy});
        console.log(taskCopy)
        console.log('change note')
    };

    addNotes = () => {
        const notesList = [...this.state.notes];
        const newNoteCopy = {...this.state.newNote};
        const currentNote = {...newNoteCopy};
        console.log(currentNote)
        currentNote.id = nanoid();
        notesList.push(currentNote);
        this.setState({notes:notesList});
    }

    removeNote = id => {
        const index = this.state.notes.findIndex(p => p.id === id);
        const notesCopy = [...this.state.notes];
        notesCopy.splice(index, 1);
        this.setState({notes:notesCopy});
    };

    render() {
        return (
            <div className="ToDo-List">
                <AddANote onChange={this.changeNote} onClickAdd={this.addNotes}/>
                <h3>To watch list: </h3>
                {this.state.notes.map(note => (
                    <Note onClickDelete={() => this.removeNote(note.id)} onChangeList={(event) => this.changeNotes(event,note.id)} key={note.id} text={note.text}/>
                ))}
            </div>
        );
    }
}

export default ToDoList;