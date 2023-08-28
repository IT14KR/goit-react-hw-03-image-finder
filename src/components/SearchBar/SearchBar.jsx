import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchSpan,
} from './SearchBar.styled';

export class SearchBar extends Component {
  state = {
    searchName: '',
    inputValue: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  hendleSubmit = event => {
    event.preventDefault();

    const searchQuery = event.target.elements.searchName.value.trim();
    this.props.onSubmit(searchQuery);
    event.target.reset();
  };

  render() {
    return (
      <header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton>
            <SearchSpan>Search</SearchSpan>
          </SearchButton>
          <SearchInput
            name="searchName"
            type="text"
            id="search"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
