import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { system } from 'styled-system';
import css from '@styled-system/css';

const StyledList = styled('ol')(
  css({
    fontWeight: 'regular',
    mb: 3,
  })
);

const List = ({ ordered, ...props }) => (
  <StyledList as={ordered ? 'ol' : 'ul'} {...props} />
);

List.propTypes = {
  ordered: PropTypes.bool,
};

List.defaultProps = {
  ordered: false,
};

export default List;
