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
      years
    });
  }

  filterQuotes = (criteria, value) => {
    const { quotes } = this.state;
    const filteredQuotes = quotes.filter(quote => quote[criteria] === value);
    this.setState({ filteredQuotes, showByFilter: true });
  };

  renderQuotes = quotes => {
    return quotes.map(quote => (
      <div className="card" key={quote._id}>
        <div className="card-body">
          <p>{quote.text}</p>
          <p>
            {" "}
            - {quote.author} - {quote.year}{" "}
          </p>
        </div>
      </div>
    ));
  };

  renderYearButtons = years => {
    return years.map(year => (
      <button
        className="btn btn-secondary"
        key={year}
        onClick={() => this.filterQuotes("year", year)}
      >
        {year}
      </button>
    ));
  };

  render() {
    const { quotes, years, filteredQuotes, showByFilter } = this.state;
    const displayQuotes = showByFilter ? filteredQuotes : quotes;
    return (
      <div>
        <h1>QuotesList</h1>
        {years.length && this.renderYearButtons(years)}
        <button className="btn btn-primary">Reset</button>
        {quotes.length && this.renderQuotes(displayQuotes)}
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
