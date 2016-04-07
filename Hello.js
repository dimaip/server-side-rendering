import React from 'react';
import s from 'Hello.scss';

const Hello = React.createClass({
  render: function() {
    return <div className={s.root}>Hello {this.props.name}</div>;
  }
});

export default Hello;
