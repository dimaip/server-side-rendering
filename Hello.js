import React from 'react';

const Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

export default Hello;
