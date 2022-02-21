import React from 'react';
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
//----------- Needed for internationalization -------------------------------------
// import { useTranslation } from 'react-i18next';
//---------------------------------------------------------------------------------
export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchQuery: ""
      }
  }

  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleButtonClicked() {
    var searchQuery = this.state.searchQuery;
    window.location.href = "/searchTerm/" + searchQuery;
  }

  render() {

    return (
      <div tabIndex="0    " className="header__search">
        <input type="search" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)} />
        <Button endIcon={<SearchIcon/>} onClick={this.handleButtonClicked.bind(this)}></Button>
      </div>
    );
  }
}