import React, { Component } from "react";
import SearchForm from "../SearchForm/SearchForm";
import ResultList from "../ResultList/ResultList";
import "./SearchResultsContainer.css";

//Parent Component: SearchResultsContainer
//Children Component: ResultList and Search Form
//CSS note: Main CSS features held in SearchResultContainer.css

class SearchResultContainer extends Component {
  //Search will hold the user query +++++ Result holds URL
  state = {
    search: "",
    results: ""
  };

  // When this component mounts, search the Robot URL for Robot Avatar for Kelson
  componentDidMount() {
    this.searchRobot("kelson");
  }

  // Sets state.results to the robot search query
  searchRobot = query => {
    //if there's no query run query "kelson"
    if (query === "") {
      this.searchRobot("kelson");
    } else {
      const BASEURL = "https://robohash.org/";
      let URL = BASEURL + query;
      console.log(URL);
      this.setState({ results: URL }, function () {
        console.log(this.state.results);
      })
    }
  };

  // Function that handles the input in the search bar
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Robot API with the search query
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchRobot(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
