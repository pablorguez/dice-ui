import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { color } from 'styled-system';
import css from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';

import sizeVariant from './variants/size';
import noMarginVariant from './variants/noMargin';

const StyledHeading = styled('h2', { shouldForwardProp })(
  css({
    label: 'heading',
    fontWeight: 'bold',
    mb: 4
  }),
  color,
  sizeVariant,
  noMarginVariant
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
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /**
   * Remove element's margin
   */
  noMargin: PropTypes.bool
};

Heading.defaultProps = {
  as: 'h2',
  color: 'colorTextPrimary',
  size: 'm'
};

export default Heading;
