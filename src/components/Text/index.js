import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { color } from 'styled-system';
import css from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';

import boldVariant from './variants/bold';
import italicVariant from './variants/italic';
import strikeVariant from './variants/strike';
import sizeVariant from './variants/size';

const StyledText = styled('p', { shouldForwardProp })(
  color,
  css({
    mb: 2,
  }),
  boldVariant,
  italicVariant,
  strikeVariant,
  sizeVariant
);

const Text = (props) => <StyledText {...props} />;

Text.propTypes = {
  /**
   * element to render
   */
  as: PropTypes.oneOf(['p', 'div', 'span', 'li']),
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
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /**
   * italic
   */
  italic: PropTypes.bool,
  /**
   * strike through
   */
  strike: PropTypes.bool,
};

Text.defaultProps = {
  as: 'p',
  size: 'm',
  color: 'colorTextPrimary',
};

export default Text;
