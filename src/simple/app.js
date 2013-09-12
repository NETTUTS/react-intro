/** @jsx React.DOM */

var Simple = React.createClass({

  getInitialState: function(){
    return { count: 0 };
  },

  handleMouseDown: function(){
    alert('I was told: ' + this.props.message);
    this.setState({ count: this.state.count + 1});
  },

  render: function(){

    return <div>
      <div class="clicker" onMouseDown={this.handleMouseDown}>
        Give me the message!
      </div>
      <div class="message">Message conveyed
        <span ref="counter" class="count">{this.state.count}</span> time(s)</div>
    </div>
    ;
  }
});

React.renderComponent(<Simple message="Keep it Simple"/>,
                  document.body);