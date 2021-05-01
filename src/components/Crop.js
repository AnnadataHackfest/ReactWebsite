import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
const Crop = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null);
    const fileSelectedHandler = (e)=>{
        setSelectedFile(e.target.files[0])
    }
    const fileUploadHandler= ()=>{
        const fd= new FormData();
        fd.append('file', selectedFile, selectedFile.name);
        axios.post('http://localhost:8000/predict', fd, {

        })
        .then(res=>{
            console.log(res);
            const temp = {
              disease: res.data.disease,
              disease_name: res.data.disease_name,
              plant_name: res.data.plant_name
            }
            setData(temp);
        });

    }

    return (
        <div className="about_us">
        <h2>KNOW YOUR Crop</h2>
        <div className="mission">
        <span>MISSION</span>
        <p>We use artificial intelligence to predict the crop disease that can degrade agricultural output.</p>
        <input type= "file" onChange= {fileSelectedHandler} />
        <button onClick= {fileUploadHandler}>upload</button>
        </div>
        {data && (<div>
          <h2>Disease: {data.disease ? "true" : "false"}</h2>
          {data.disease_name && (<h2>Disease Name: {data.disease_name}</h2>)}
          <h2>plant Name: {data.plant_name}</h2>
        </div>)}
    </div>
    );
}
export default Crop;