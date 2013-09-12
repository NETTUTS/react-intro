/** @jsx React.DOM */

var Rectangle = React.createClass({


  mixins: [ShapePropertyMixin],

  render:function(){
    var style = this.extractStyle(true);
    return <div style={style} class="shape" />;
  }
});