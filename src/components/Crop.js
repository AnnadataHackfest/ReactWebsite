import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
class Crop extends Component{
    state= {
        selectedFile: null
    }
    fileSelectedHandler= (e)=>{
        this.setState({
            selectedFile : e.target.files[0]
        })
    }
    fileUploadHandler= ()=>{
        const fd= new FormData();
        fd.append('file', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('http://localhost:5000/api/upload', fd, {

        })
        .then(res=>{
            console.log(res);
        });

    }
    render() {
        return (
            <div className="about_us">
            <h2>KNOW YOUR Crop</h2>
            <div className="mission">
            <span>MISSION</span>
            <p>We use artificial intelligence to predict the crop disease that can degrade agricultural output.</p>
            <input type= "file" onChange= {this.fileSelectedHandler} />
            <button onClick= {this.fileUploadHandler}>upload</button>
            </div>
        </div>
        );
    }
}
export default Crop;