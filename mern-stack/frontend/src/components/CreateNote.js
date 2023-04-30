import React, { Component } from 'react'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



export default class CreateNote extends Component {

    state={
        users: [],
        userSelected: '',
        title: '',
        content:'',
        date: new Date(),
        editing: false,
        _id: '' 

    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/api/users')
        this.setState({
           users: res.data,
           userSelected: res.data[0].username
        })
        if(this.props.match.params.id){
            console.log(typeof(this.props.match.params.id));
            const res = await axios.get('http://localhost:4000/api/notes/' + this.props.params.id);
            this.setState({
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date),
                userSelected: res.data.author,
                editing: true,
               _id: this.props.match.params.id
            })
        }
        
        
    }
    onSubmit = async (e) => {
        console.log('editing', this.state._id)
        e.preventDefault();
        const newNote ={
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        }
        if(this.state.editing){
            await axios.put('http://localhost:4000/api/notes/' + this.state._id, newNote)
        }else{
            await axios.post('http://localhost:4000/api/notes', newNote);
        }


        window.location.href = '/';
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
            <div className="card card-body">
                <h4>Create a Note</h4>
                
                <div className="form-group">
                    <select 
                        className="form-control"
                        name="userSelected"
                        
                        onChange={this.onInputChange}
                        

                    >
                        {
                         this.state.users.map(user => 
                         <option key={user._id} value={user.username}>
                             {user.username}
                         </option> )   
                        }
                    </select>
                </div>
                <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Title" 
                            name="title"
                            value={this.state.title}
                            onChange={this.onInputChange}

                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-control"
                            placeholder="Content"
                            name="content"
                            value={this.state.content}
                            onChange={this.onInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <DatePicker 
                            className="form-control" 
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>

                <form onSubmit={this.onSubmit}>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        </div>

        

        )
    }
}
