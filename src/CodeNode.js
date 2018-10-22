import React from 'react';

export default function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}
