import React from 'react';
import { Global } from '@emotion/core';

import { createBaseStyles } from './BaseStylesService';

const BaseStyles = () => <Global styles={(theme) => createBaseStyles(theme)} />;

export default BaseStyles;
