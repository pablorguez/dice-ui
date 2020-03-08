import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import typeVariant from './variants/type';
import sizeVariant from './variants/size';

const StyledLink = styled('a')(
  css({
    cursor: 'pointer',
  }),
  typeVariant,
  sizeVariant
);

const Link = props => <StyledLink {...props} />;

Link.propTypes = {
  /**
   * fontSize for the Element
   */
  size: PropTypes.oneOf(['s', 'm', 'l']),
  /**
   * Styling you want for the Element
   */
  type: PropTypes.oneOf(['default', 'negative']),
}

Link.defaultProps = {
  size: 'm',
  type: 'default'
}

export default Link;
