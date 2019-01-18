import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuotes } from "../actions/quotesActions";

class QuotesList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(){
    this.props.fetchQuotes();
  }

  render() {
    console.log(this.props.quotes);
    return (
      <div>
        <h1>QuotesList</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.quotes
});

export default connect(mapStateToProps, { fetchQuotes })(QuotesList);
