import React from 'react';
import OriginalHtml from '@theme-original/Html';

export default function Html(props) {
  return (
    <OriginalHtml {...props}>
      <meta httpEquiv="Cache-Control" content="max-age=86400, must-revalidate" />
      <meta httpEquiv="Pragma" content="cache" />
      <meta httpEquiv="Expires" content="0" />
    </OriginalHtml>
  );
}
