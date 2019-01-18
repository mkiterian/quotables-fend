import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuotes } from "../actions/quotesActions";

class QuotesList extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    this.props.fetchQuotes();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      quotes: nextProps.quotes.quotes
    });
  }

  renderQuotes = quotes => {
    return quotes.map(quote => (
      <div className="card" key={quote._id}>
        <div className="card-body">
          <p>{quote.text}</p>
          <p> - {quote.author} - {quote.year} </p>
          </div>
      </div>
    ));
  };

  render() {
    const { quotes } = this.state;
    return (
      <div>
        <h1>QuotesList</h1>
        {quotes.length && this.renderQuotes(quotes)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.quotes
});

export default connect(
  mapStateToProps,
  { fetchQuotes }
)(QuotesList);
