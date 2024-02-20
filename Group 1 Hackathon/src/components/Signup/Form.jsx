import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        phone: ""
    });

    const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value
            });
          };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <>
        <div className="container-right" id="form-right-container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card" id="formCard">
                        <div class="card-body">                                   
                            <div className="col-md-12">
                                <form action="/submit-form" method="POST" onSubmit={handleSubmit}>
                                    <label htmlFor="title" className="inline-label">Title*:</label>
                                    <input type="text" id="title" name="title" placeholder="Mr/Mrs/Miss/Other" required /><br /><br />
                                    <label htmlFor="firstName" className="inline-label">First Name*:</label>
                                    <input type="text" id="firstName" name="firstName" placeholder="Your First Name" required /><br /><br />
                                    <label htmlFor="lastName" className="inline-label">Last Name*:</label>
                                    <input type="text" id="lastName" name="lastName" placeholder="Your Last Name" required /><br /><br />
                                    <label htmlFor="email" className="inline-label">Email*:</label>
                                    <input type="email" id="email" name="email" placeholder="email@email.com" required /><br /><br />
                                    <label htmlFor="dateOfBirth" className="inline-label">Date of Birth:</label>
                                    <input type="date" id="dateOfBirth" name="dateOfBirth" required /><br /><br />
                                    <label htmlFor="phone" className="inline-label">Phone*:</label>
                                    <input type="tel" id="phone" name="phone" placeholder="07999999999" required /><br /><br />
                                    <input type="submit" value="Sign Me Up" style={{ backgroundColor: '#f2c338', color: 'black' }} />
                                </form>
                            </div>     
                        </div> 
                    </div>  
                </div>   
            </div>   
        </div>                   
    </>
    );
}

export default Form;
