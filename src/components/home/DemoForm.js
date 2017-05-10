import React, { Component } from 'react';

class DemoForm extends Component {
  constructor() {
    super();

    this.state = {
      formName: '',
      formDate: '',
      formStore: '',
      formLocation: '',
      formLine: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.log('submitted')
    //post request
    event.preventDefault();
  }

  handleChange(event) {
    let field = event.target.className
    this.setState({[field]: event.target.value});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input className='formName' type="text" value={this.state.name} onChange={this.handleChange} />
      </label>
      <br />
      <label>
        Date:
        <input className='formDate' type="text" value={this.state.date} onChange={this.handleChange} />
      </label>
      <br />
      <label>
        Store:
        <input className='formStore' type="text" value={this.state.store} onChange={this.handleChange} />
      </label>
      <br />
      <label>
        Line:
        <input className='formLine' type="text" value={this.state.line} onChange={this.handleChange} />
      </label>
      <br />
      <label>
        Location:
        <input className='formLocation' type="text" value={this.state.location} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default DemoForm;
