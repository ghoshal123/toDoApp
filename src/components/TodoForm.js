import React from 'react'

const TodoForm = ({todo, setTodo,  notes, setNotes} ) => {
    const submitForm = (e) => {
        if (!todo) {
            alert("Please Fill the data");
        }
        else {
            e.preventDefault();
            const allInputData = { todo: todo,  id: new Date().getTime() };
            setNotes([...notes, allInputData]);
            setTodo("");
            
        }

    }
  return (
    <div>
    <div className="container my-3">
    <div className="row justify-content-center">
        <div className="col-md-10">
            <form style={{ border: "2px solid grey", borderRadius: "10px", padding: "30px", backgroundColor: "whitesmoke" }}>
                <div className="mb-3">
                    <label htmlFor="todo" className='form-label'><b>My Todos</b></label>
                    <input type="text" className="form-control" id="todo" placeholder="Enter Todos" value={todo} onChange={(e) => setTodo(e.target.value)} />
                </div>
                <div class="col text-center">
                    <button type="submit" className="btn btn-primary mx-2" onClick={submitForm}><b><i class="icon-plus"></i>&nbsp;Submit</b></button>
                </div>
            </form>
        </div>
    </div>
</div><br /><br />
    
    </div>
  )
}

export default TodoForm