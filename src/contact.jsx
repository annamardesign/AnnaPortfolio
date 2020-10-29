import React, { Component } from 'react';
class Contact extends Component {
    constructor(props) {
     super(props);
      this.state = {
       name: '',
       number:'',
       email: '',
       message: ''
      }
    }
    render() { 
        return (
        <div className="page">
         <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
           <label htmlFor="name">Name:</label><br>
           <input type="text"
            value={this.state.name} 
            className="form-input" 
            onChange={this.onNameChange.bind(this)}/><br>

           <label htmlFor="number">Phone Number:</label><br>
           <input type="number" 
           value={this.state.number} 
           className="form-input" 
           onChange={this.onNumberChange.bind(this)}/>

           <label htmlFor="email">Email:</label><br>
           <input type="email" 
           value={this.state.email} 
           className="form-input" 
           onChange={this.onEmailChange.bind(this)}/>

           <label htmlFor="message">Message</label>
           <textarea 
           className="form-control" 
           rows="15" 
           value={this.state.message} 
           onChange={this.onMessageChange.bind(this)} />
          
          <button type="submit" className="send-btn">Send</button>
        </form>
           </div>  );
    }
}
 
export default Contact;