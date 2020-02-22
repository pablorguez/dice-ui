import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { system, color } from 'styled-system';
import css from '@styled-system/css';

const StyledHeading = styled('h2')(
  css({
    label: 'heading',
    fontWeight: 'bold',
    mb: 4
  }),
  color,
  system({
    fontSize: true,
    noMargin: {
      property: 'noMargin',
      properties: [ 'spacings' ],
      transform: value => value && 0
    }
  })
);

const Heading = props => <StyledHeading {...props} />;

Heading.propTypes = {
  /**
   * Element to be rendered
   */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * Element's color
   */
  color: PropTypes.string,
  /**
   * font size
   */
  fontSize: PropTypes.number,
  /**
   * Remove element's margin
   */
  noMargin: PropTypes.bool
};

Heading.defaultProps = {
  as: 'h2',
  color: 'colorTextPrimary',
  fontSize: 5
};

export default Heading;
