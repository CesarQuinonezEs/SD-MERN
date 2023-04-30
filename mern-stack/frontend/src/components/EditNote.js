import { Link, useParams } from "react-router-dom"
import DatePicker from 'react-datepicker'
import axios from 'axios'

const state = {
    userSelected: '',
    title: '',
    content: '',
    date: new Date(),
    _id: ''
}



const EditNote = () => {

    function onChangeTitle (e){
        state.title = e.target.value;
    }
    function onChangeContent (e){
        console.log("Contenido");
        state.title = e.target.value;
    }
    async function onSubmit(e){
        console.log(state);
    }

    async function getNotes(id) {
    
        const res = await axios.get('http://localhost:4000/api/notes/' + id);
        state.title = res.data.title;
    
        state.content= res.data.content;
        state.date= new Date(res.data.date);
        state.userSelected= res.data.author;
        state.editing= true;
        state._id= id;
        console.log(state);
    }

    const { id } = useParams();
    getNotes(id);
    return (
        <div className="col-md-6 offset-md-3">
            <div className="card card-body">
                <h4>Editing a Note</h4>
                
                <div className="form-group">
                    <input 
                        className="form-control"
                        name="userSelect"
                        value={state.userSelected}
                    />
                        
                 
                </div>
                <div className="form-group">
                        <input 
                         type="text" 
                         className="form-control" 
                         placeholder="Title" 
                         name="title"
                         value={state.title}
                         onChange={onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                         className="form-control"
                         placeholder="Content"
                         name="content"
                         value={state.content}
                         onChange={onChangeContent}
                        />
                    </div>
                    <div className="form-group">
                        <DatePicker 
                         className="form-control" 
                         selected={state.date}
                         onChange={Date.onChangeDate}
                        />
                    </div>

                <form >
                    <button type="submit" className="btn btn-primary" onClick={onSubmit}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditNote;