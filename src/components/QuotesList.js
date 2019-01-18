import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuotes } from "../actions/quotesActions";
import generateUniqueYearslist from "../utils/generateUniqueYearsList";

class QuotesList extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      years: []
    };
  }

  componentDidMount() {
    this.props.fetchQuotes();
  }

  componentWillReceiveProps(nextProps) {
    const years = generateUniqueYearslist(nextProps.quotes.quotes);
    this.setState({
      quotes: nextProps.quotes.quotes,
      years,
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

  renderYearButtons = years => {
    return years.map(year => (
      <button className="btn btn-secondary" key={year}>
        {year}
      </button>
    ));
  }

  render() {
    const { quotes, years } = this.state;
    return (
      <div>
        <h1>QuotesList</h1>
        { years.length && this.renderYearButtons(years) }
        { quotes.length && this.renderQuotes(quotes)}
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
