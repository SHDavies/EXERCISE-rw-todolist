var React = require('react');
var ListContainer = require('ListContainer.js');

var App = React.createClass({
  render: function() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

React.render(<App />, document.getElementById('app'));
