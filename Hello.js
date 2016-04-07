import React from 'react';
if (process.env.BROWSER) {
    require('Hello.css');
}

const Hello = React.createClass({
  render: function() {
    return <div className="Hello">Hello {this.props.name}</div>;
  }
});

export default Hello;
