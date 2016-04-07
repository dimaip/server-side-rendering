import React from 'react';
import s from 'Hello.scss';
import fetch from 'isomorphic-fetch';

const Hello = React.createClass({
  getInitialState: function() {
    return {
      hello: ''
    };
  },
  componentDidMount: function() {
    fetch('/static/data.json')
      .then(r => r.json())
      .then(r => this.setState({hello: r.hello}));
  },
  render: function() {
    return <div className={s.root}>Hello {this.props.name}. Async hello {this.state.hello}</div>;
  }
});

export default Hello;
