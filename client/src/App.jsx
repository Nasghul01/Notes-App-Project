import { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Editor from './Editor.jsx'   

export default function App (){

  const [notes, setNotes] = useState([])
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  )

  function createNewNote () {
    
  }
  return (
    <main>
      {
        notes.length > 0
        ? 
        <Sidebar/>
        
        
          :
          <div className="container">
            <h1>You have no notes</h1>
            <button
            className='btn btn-primary '
            type='button'
            onClick={createNewNote}>
              Create one now
            </button>
          </div>


      }
          
    </main>
  )
}
