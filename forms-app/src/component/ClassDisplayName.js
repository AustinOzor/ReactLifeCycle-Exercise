import React, { Component } from "react";

class ClassDisplayName extends Component {
    constructor(props) {
        super()
        this.state = {
            customer:  [
        {    firstName: '',
            lastName: '',
            job: '',
            company: '',
            email: '',
            telephone: 121,
            comment: ''
    }    
            ]
     }
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value });
        
    };
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            customer: [
                ...this.state.customer,
                {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    job: this.state.job,
                    company: this.state.company,
                    email: this.state.email,
                    telephone: this.state.telephone,
                    comment:this.state.comment,
                }
            ]
        })
     
    }
    render() {
        return (
            <div className="container">
                <form action="#" method="post">
            <h2 className="get-heading">GET IN TOUCH</h2>

              <div  className="form-group names">
                <label for="name">First Name</label>
                        <input type="text" id="fname" className="nameId" placeholder="Enter First Name" name="firstName"
                            value={this.state.firstName} onChange={this.handleChange} />
              </div>
              <div  className="form-group names">
                <label for="name">Last Name</label>
                        <input type="text" id="lname" className="nameId" placeholder="Enter Last Name" name="lastName"
                            value={this.state.lastName} onChange={this.handleChange} />
                    </div>
              <div className="form-group">
                 <label for="job">Job</label>
                        <input type="text" id="job" className="job" placeholder="Enter profession" name="job"
                            value={this.state.job} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                 <label for="company">Company name</label>
                        <input type="text" id="company" className="company" placeholder="Enter company" name="company"
                            value={this.state.company} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                 <label for="email">Email</label>
                 <input type="text" id="email" className="email" placeholder="johndoe@gmail.com" name="email"
                  value={this.state.email} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                 <label for="number">Numbers</label>
                 <input type="number" id="number" className="number" placeholder="Enter Number" name="telephone" 
                 value={this.state.telephone} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                 <label for="details">Add more details</label>
                 <textarea  id="details" cols="100%" rows="8" placeholder="Add more details below" name="comment"
                  value={this.state.comment} onChange={this.handleChange}></textarea>
              </div>
              
                <input type="checkbox" id="agree" value="agree”"/>
                <label for="agree" className="agree-label">I agree to receive information from CloudRock “Academy”</label>


              <div><button  className="btn" type="submit" onClick={this.handleSubmit}>Submit</button></div>
              <p className="para"></p>
              </form>
              {
                this.state.customer.map((client, index) =>{
                    return (
                        <div className="received ">
                            <h1>Contact Us</h1><hr></hr>
                            <p>First Name: {client.firstName} </p><hr></hr>
                            <p>Last Name: {client.lastName} </p><hr></hr>
                            <p>Job: {client.job}</p><hr></hr>
                            <p>Company Name: {client.company} </p><hr></hr>
                            <p>Email: {client.email}</p><hr></hr>
                            <p>Telephone: {client.telephone}</p><hr></hr>
                            <p>Comment: {client.comment}</p>
                           
                        </div>
                    )
                }
                
            )
               
        }
               
            
        </div>
        )
    }
}

export default ClassDisplayName;