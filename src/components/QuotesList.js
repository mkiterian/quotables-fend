import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuotes } from "../actions/quotesActions";

class QuotesList extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
    };
  }

  componentDidMount(){
    this.props.fetchQuotes();
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      quotes: nextProps.quotes.quotes
    })
  }

  render() {
    console.log(this.state.quotes);
    const { quotes } = this.state;
    return (
      <div>
        <h1>QuotesList</h1>
        {
          quotes.length && quotes.map(quote => (
            <li key={quote._id}>{ quote.text }</li>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.quotes
});

export default connect(mapStateToProps, { fetchQuotes })(QuotesList);
