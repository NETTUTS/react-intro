/** @jsx React.DOM */
var ShapeCanvas = React.createClass({

  getDefaultProps: function(){
    return {
      shapes: []
    };
  },

  render: function () {
    var self = this;
    var shapeTree = <div class="shape-canvas">
    {
      this.props.shapes.map(function(s) {
        return self._createShape(s);
      })
    }
      </div>;

    var noTree = <div class="shape-canvas no-shapes">No Shapes Found</div>;

    return this.props.shapes.length > 0 ? shapeTree : noTree;
  },

  _createShape: function(shape) {
    return this._shapeMap[shape.type](shape);
  },

  _shapeMap: {
    ellipse: function (shape) {
      return <Ellipse properties={shape.properties} />;
    },

    rect: function (shape) {
      return <Rectangle properties={shape.properties} />;
    },

    text: function (shape) {
      return <Text properties={shape.properties} />;
    }
  }

});
