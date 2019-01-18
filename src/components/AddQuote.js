import React, { Component } from "react";
import { connect } from "react-redux";
import { addQuote } from "../actions/quotesActions";

class AddQuote extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      author: "",
      year: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { text, author, year } = this.state;
    this.props.addQuote({ text, author, year });
  };

  render() {
    const { text, author, year } = this.state;
    return (
      <div>
        <h1>Add Quote Form</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              name="text"
              id="text"
              className="form-control"
              value={text}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              className="form-control"
              value={author}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="text"
              name="year"
              id="year"
              className="form-control"
              value={year}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addQuote })(AddQuote);
