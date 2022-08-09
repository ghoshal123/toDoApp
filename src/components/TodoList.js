import React from 'react'

const TodoList = ({ element, notes, setTitle,  setNotes,  title }) => {
    const [line, setLine] = useState(false);
    
    const removeData = (id) => {
        const newNotes = notes.filter((elm) => {
            if (elm.id !== id) {
                return elm;
            }
        })
        setNotes(newNotes);
    }

    const completeData=()=>{
        setLine(true);
    }
  return (
    <div>
    <div className="card-header" style={{ color: "black",textDecoration: line ? 'line-through' : "none" }}><h3>Todos:{element.todo}</h3></div>
            <div className="card-body text-secondary">
                <button type="button" className="btn btn-Light mx-2" onClick={() => { removeData(element.id) }}><i class="icon-trash" style={{fontSize:"40px",color:"red"}}></i></button>
                <button type="button" className="btn btn-Light mx-2" onClick={completeData}><i class="icon-check" style={{fontSize:"40px",color:"green"}}></i></button>
            </div>

    </div>
  )
}

export default TodoList
