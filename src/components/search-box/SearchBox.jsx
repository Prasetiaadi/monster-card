import React, { Component } from 'react';
import './searchBox.css';

class SearchBox extends Component {
  render() {
    return (
      <div className='box'>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default SearchBox;
