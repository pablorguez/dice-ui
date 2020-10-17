import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';

import typeVariant from './variants/type';
import sizeVariant from './variants/size';
import roundedVariant from './variants/rounded';
import circledVariant from './variants/circled';
import fullWidthVariant from './variants/fullWidth';

const StyledButton = styled('div', { shouldForwardProp })(
  css({
    alignContent: 'center',
    border: 0,
    borderRadius: 2,
    cursor: 'pointer',
    flex: 'none',
    justifyContent: 'center',
  }),
  typeVariant,
  sizeVariant,
  roundedVariant,
  circledVariant,
  fullWidthVariant
);

const Button = (props) => <StyledButton as="button" {...props} />;

Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

Button.defaultProps = {
  size: 'm',
  onClick: () => {},
};

export default Button;
