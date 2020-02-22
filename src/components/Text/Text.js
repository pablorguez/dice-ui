import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { system, color } from 'styled-system';
import css from '@styled-system/css';

const StyledText = styled('p')(
  color,
  system({
    fontSize: true,
    bold: {
      property: 'bold',
      properties: ['fontWeight'],
      scale: 'fontWeights',
      transform: value => value && 'bold'
    },
    italic: {
      property: 'italic',
      properties: ['fontStyle'],
      transform: value => value && 'italic'
    },
    strike: {
      property: 'strike',
      properties: ['textDecoration'],
      transform: value => value && 'line-through'
    }
  }),
  css({
    mb: 2
  })
);

const Text = props => <StyledText {...props} />;

Text.propTypes = {
  /**
   * element to render
   */
  as: PropTypes.oneOf(['p', 'div', 'span']),
  /**
   * bold
   */
  bold: PropTypes.bool,
  /**
   * text color
   */
  color: PropTypes.oneOf(['colorTextPrimary', 'colorTextSecondary']),
  /**
   * font size
   */
  fontSize: PropTypes.number,
  /**
   * italic
   */
  italic: PropTypes.bool,
  /**
   * strike through
   */
  strike: PropTypes.bool
};

Text.defaultProps = {
  as: 'p',
  color: 'colorTextPrimary'
};

export default Text;
