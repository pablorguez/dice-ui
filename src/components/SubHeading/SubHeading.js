import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { system, variant } from 'styled-system';
import css from '@styled-system/css';

const StyledSubHeading = styled('h3')(
  css({
    textTransform: 'uppercase',
    fontWeight: 'bold',
    mb: 2
  }),
  system({
    noMargin: {
      property: 'noMargin',
      scale: ['spacings'],
      transform: value => value && 0
    }
  }),
  variant({
    prop: 'size',
    variants: {
      medium: {
        fontSize: 'fontSize.subHeading.m'
      },
      large: {
        fontSize: 'fontSize.subHeading.l'
      }
    }
  })
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
  noMargin: PropTypes.bool
};

export default SubHeading;
