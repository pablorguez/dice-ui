import React from 'react';

import Link from './';
import docs from './Link.docs.mdx';

const content = 'This is a <Link> element';

export default {
  title: 'Typography/Link',
  component: Link,
  parameters: {
    docs: { page: docs },
  },
};

export const base = () => <Link>{content}</Link>;

export const type = () => (
  <>
    <Link type="default">{content} of type default.</Link>
    <Link type="negative">{content} of type negative.</Link>
  </>
);

export const size = () => (
  <>
    <Link size="s">{content} of size s.</Link>
    <Link size="m">{content} of size m.</Link>
    <Link size="l">{content} of size l.</Link>
  </>
);
