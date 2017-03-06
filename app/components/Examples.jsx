var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="text-center">Examples  </h1>
        <p>here is a list of locations to try out </p>
        <ol>
          <li>
            <Link to="/?location=los angeles">Los Angeles </Link>
          </li>
          <li>
            <Link to="/?location=rio BRAZIL">rio Brazil </Link>
          </li>
        </ol>
      </div>

    );
  }
});

module.exports = Examples;
