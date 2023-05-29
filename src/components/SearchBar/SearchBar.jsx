import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CloseBtn,
  CloseButton,
  CloseIcon,
  FormInput,
  FormLabel,
  IconWrapper,
  SearchForm,
  SearchIcon,
  SwapOffIcon,
  SwapOnIcon,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      alert('Please fill the search field');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="search">
          <FormInput
            value={query}
            onChange={handleChange}
            name="search"
            placeholder="search movies"
            id="search"
            type="text"
          />
          <SearchIcon>
            <svg
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="swap-on"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            <SwapOffIcon
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </SwapOffIcon>
          </SearchIcon>
          <CloseBtn type="reset" class="close-btn">
            <svg
              viewBox="0 0 20 20"
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </CloseBtn>
          {/* <button type="submit">Search</button> */}
        </FormLabel>
      </SearchForm>

      {/* <SearchForm>
        <FormLabel htmlFor="search">
          <FormInput
            required=""
            autocomplete="off"
            placeholder="search movies"
            id="search"
            type="text"
          />
          <IconWrapper>
            <SwapOnIcon
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </SwapOnIcon>
            <SwapOffIcon
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </SwapOffIcon>
          </IconWrapper>
          <CloseButton type="reset">
            <CloseIcon
              viewBox="0 0 20 20"
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fillRule="evenodd"
              ></path>
            </CloseIcon>
          </CloseButton>
        </FormLabel>
      </SearchForm> */}
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
