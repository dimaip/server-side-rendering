import React from 'react';
import Transmit from 'react-transmit';
import fetch from 'isomorphic-fetch';
import s from 'Hello.scss';

const Hello = React.createClass({
  render: function() {
    return <div className={s.root}>Hello {this.props.name}. Async hello {this.props.hello}</div>;
  }
});

export default Transmit.createContainer(Hello, {
  // These must be set, or else it would fail to render
  initialVariables: {},
  // each fragmen will be resolved into a prop
  fragments: {
    hello () {
      return fetch('http://localhost:3000/static/data.json')
        .then(r => r.json())
        .then(r => r.hello);
    }
  }
});
