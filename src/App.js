import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const getNotesFromLs = () => {
    const myNotes = JSON.parse(localStorage.getItem("TODOS"));
    if (myNotes) {
      return myNotes;
    }
    else {
      return [];
    }
  }
  const [todo, setTodo] = useState("");
  const [notes, setNotes] = useState(getNotesFromLs);
  localStorage.setItem("TODOS", JSON.stringify(notes));
   console.log(notes);
  return (
    <div className="App">
    <TodoForm todo={todo} setTodo={setTodo} notes={notes} setNotes={setNotes}  /><br />
    <div className="container">
      <div className="row-justify-content-center">
        <div className="col-md-10">
          <h1 className='mb-3' style={{ textAlign: "center" }}><i class="icon-book"></i>&nbsp;My Todos</h1>
          {
            notes.length === 0 ?
              <div className='card-mb3'>
                <div className="card-body text-primary">
                  <p className="card-text" style={{ color: "red", textAlign: 'center' }}><h1><i class="icon-eye-close"></i>&nbsp;No Todos to display</h1></p>
                </div>
              </div> : notes.map((element) => {
                return (
                  <div>
                    <div className="container my-3">
                      <div className="card" style={{ width: "20rem" }}>
                        <div className="card border-secondary mb-2 mt-2" style={{ maxWidth: "20rem" }}>
                        
                          <TodoList element={element} key={element.id} setTodo={setTodo}  todo={todo}  notes={notes} setNotes={setNotes}  />
                        </div>
                      </div>
                    </div>
                  </div>

                )
              })
          }
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
