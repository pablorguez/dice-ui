import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { system, variant } from 'styled-system';
import css from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';

import sizeVariant from './variants/size';
import noMarginVariant from './variants/noMargin';

const StyledSubHeading = styled('h3')(
  css({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    mb: 2
  }),
  sizeVariant,
  noMarginVariant
);

const SubHeading = props => <StyledSubHeading {...props} />;

SubHeading.propTypes = {
  /**
   * The HTML heading element to render.
   */
  as: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * Removes the default bottom margin from the subheading.
   */
  noMargin: PropTypes.bool,
  /**
   * fontSize
   */
  size: PropTypes.oneOf(['s', 'm', 'l'])
};

SubHeading.defaultProps = {
  as: 'h4',
  size: 'm'
};

export default SubHeading;
