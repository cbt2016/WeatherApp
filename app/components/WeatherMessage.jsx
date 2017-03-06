var React = require('react');

// var WeatherMessage = React.createClass({
//
//   render: function(){
//       var {location,temp} = this.props;
//     return (
//       <h4>it's {temp} in {location} </h4>
//     );
//   }
// });


var WeatherMessage = ({location,temp})=>{
  //var {location, temp} = props;
  return (
    <h4>Temperature : {temp} , location {location} </h4>
  );
}

module.exports = WeatherMessage;
