import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { system } from 'styled-system';

const StyledText = styled('p')(
  system({
    fontSize: {
      property: 'fontSize',
      properties: [ 'fontSize' ],
      scale: 'fontSizes'
    },
    bold: {
      property: 'bold',
      properties: [ 'fontWeight' ],
      scale: 'fontWeights',
      transform: value => value && 'bold'
    },
    italic: {
      property: 'italic',
      properties: [ 'fontStyle' ],
      transform: value => value && 'italic'
    },
    strike: {
      property: 'strike',
      properties: [ 'textDecoration' ],
      transform: value => value && 'line-through'
    },
    color: {
      property: 'color',
      properties: [ 'color' ],
      scale: 'colors'
    }
  })
)

const Text = props => (
  <StyledText { ...props } />
)

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
  strike: PropTypes.bool,
}

Text.defaultProps = {
  as: 'p',
  color: 'colorTextPrimary'
}

export default Text;
