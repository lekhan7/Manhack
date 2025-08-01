import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
function Application( { start, ...props }) {
    const navigate = useNavigate();
    

    const [formData, setFormData] = useState({
        region: "",
        agegroup: "",
        gender: "",
        sesons:""
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleAddEntry = async () => {
        if (
          !formData.region ===""
       
      
          
       
        ) {
          alert("Please fill in all fields before adding.");
          return;
        }
        try {
          const response = await fetch("http://localhost:5000/api/application", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          });
          if (response.ok) {
            alert("YOUR DATA  HAVE BEEN ADDED SUCCESSFULLY ADDED TO OUR DATA BASE ");
            navigate("/");
        } else {
            alert("Failed to add the data. Please try again.");
        }
    } catch (error) {
        console.error("Error while adding entry:", error);
        alert("An error occurred. Please try again later.");
    }
    };

  return (


    <div >

<FloatingLabel controlId="floatingInput" label="REGION" className="mb-3">
          <Form.Control name="region" onChange={handleInputChange} type="text" value={formData.region} placeholder="Enter Any Notes" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label=" AGE GROUP" className="mb-3">
          <Form.Control name="agegroup" type='number' onChange={handleInputChange} value={formData.agegroup} placeholder="Business Idea" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="GENDER" className="mb-3">
          <Form.Control name="gender"  onChange={handleInputChange} value={formData.gender} placeholder="Business Idea" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="seasons" className="mb-3">
          <Form.Control name="sesons"  onChange={handleInputChange} value={formData.sesons} placeholder="Business Idea" />
        </FloatingLabel>
     
        <Button variant="success" onClick={handleAddEntry}>ADD-DETAILS</Button>

    </div>
  )
}

export default Application
