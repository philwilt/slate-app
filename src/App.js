import React, { Component } from 'react';
import { Editor } from 'slate-react';
import  { Value } from 'slate';
import CodeNode from './CodeNode';
import BoldMark from './BoldMark';
import MarkHotkey from './MarkHotkey';

import './App.css';

const plugins = [
  MarkHotkey({type: 'bold', key: 'b' }),
  MarkHotkey({type: 'code', key: '`' }),
  MarkHotkey({type: 'italic', key: 'i' }),
  MarkHotkey({type: 'strikethrough', key: '-' }),
  MarkHotkey({type: 'underline', key: 'u' }),
]

const initialValue = Value.fromJSON({
  document: {
    nodes: [{
      object: 'block',
      type: 'paragraph',
      nodes: [{
        object: 'text',
        leaves: [{
          text: 'A line of text in a paragraph.',
        }],
      }],
    }],
  },
});

class App extends Component {
  state = {
    value: initialValue,
  }

  handleOnChange = ({ value }) => {
    this.setState({ value })
  }

  renderMark = (props, next) => {
    switch (props.mark.type) {
      case 'bold':
        return <BoldMark {...props} />
      case 'code':
        return <CodeNode {...props} />
      case 'italic':
        return <em>{props.children}</em>
      case 'strikethrough':
        return <del>{props.children}</del>
      case 'underline':
        return <u>{props.children}</u>
      default:
        return next()
    }
  }

  render() {
    return (
      <Editor
        plugins={plugins}
        value={this.state.value}
        onChange={this.handleOnChange}
        renderMark={this.renderMark}
      />);
  }
}

export default App;
