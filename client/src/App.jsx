import React, { useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {

    const [notes, setNotes] = React.useState([])

    useEffect(() => {
        fetch("/")
        .then(res => res.json())
        .then(notes => setNotes(notes))
    }, [])
    
    
    

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )
    
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    },[notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    const currentNote =
    notes.find(notes => notes.id === currentNoteId) || notes[0]
    
    //old function update
    // function updateNote(text) {
    //     setNotes(oldNotes => oldNotes.map(oldNote => {
    //         return oldNote.id === currentNoteId
    //             ? { ...oldNote, body: text }
    //             : oldNote
    //     }))
    // }

    function updateNote(text) {
        setNotes( (oldNotes) =>{
            const newArray = []
            for (let i = 0 ; i < oldNotes.length ; i++){
                const oldNote = oldNotes[i]
                if(oldNote.id === currentNoteId ) {
                    newArray.unshift({ ...oldNote, body: text})
                }else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        } )
        
    }


    function deleteNote(event, noteId) {
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter((note) => note.id !==  noteId))
    }
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <>
              <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNote={currentNote}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={currentNote} 
                        updateNote={updateNote} 
                    />
                }
            </Split>
            </>
            
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}
