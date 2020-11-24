import React, { Component } from "react";
import { BsEnvelope } from 'react-icons/bs';
import copy from "copy-to-clipboard"; 
import './email.css';

export default class Email extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "annamardesignbg@gmail.com",
      isCopied: false
    }
  }

    copyEmail = () => {  
    copy(this.state.email);
    this.setState({isCopied: true})
    }  
  

  render() {
      const{ email, isCopied } = this.state;

    return (
      <div>
        <div>
          <a onClick={() => this.copyEmail()} ><BsEnvelope/></a>
          {
            isCopied ?
            <div className="message">
               Email successfully copied!
            </div> : null
          }
        </div>
      </div>
    )
  }
}
