/** @jsx React.DOM */

var Text = React.createClass({


  mixins: [ShapePropertyMixin],

  render:function(){
    var style = this.extractStyle(false);
    return <div style={style} class="shape">{this.props.properties.value}</div>;
  }
});