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
    onNameChange(event) {
     this.setState({name: event.target.value})
    }
    onNumberChange(event) {
     this.setState({number: event.target.value})
    }
    onEmailChange(event) {
     this.setState({email: event.target.value})
    }
    onMessageChange(event) {
     this.setState({message: event.target.value})
    }
    
    handleSubmit( event ) {
     event.preventDefault();
     console.log(this.state);
    }

    render() { 
        return (
        <div className="page">
        <section className="main-section">
            <div className="contact"><p className="contact-text">Contact me</p></div>
         <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="input-group">
           <label htmlFor="name">Name:</label>
           <input type="text"
            className="form-input" 
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}/>
         </div><br />
         <div className="input-group">
           <label htmlFor="number">Phone:</label>
           <input type="number" 
           className="form-input" 
           value={this.state.number} 
           onChange={this.onNumberChange.bind(this)}/>
         </div><br />
         <div className="input-group">
           <label htmlFor="email">Email:</label>
           <input type="email" 
           className="form-input" 
           value={this.state.email} 
           onChange={this.onEmailChange.bind(this)}/>
         </div><br />
         <div className="input-group">
           <label htmlFor="message">Message</label>
           <textarea 
           className="form-control" 
           rows="15" 
           value={this.state.message} 
           onChange={this.onMessageChange.bind(this)} />
          
          <button type="submit" className="send-btn">Send</button>
          </div><br />
        </form>
        </section>
    </div>  
           );
    }
}
 
export default Contact;