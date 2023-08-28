import React from 'react';
import PropTypes from 'prop-types';
import { BtnLoadMore } from './LoadMoreBtn.styled';

const Button = ({ onClick }) => {
  return (
    <>
      <BtnLoadMore type="button" onClick={onClick}>
        Load More
      </BtnLoadMore>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
