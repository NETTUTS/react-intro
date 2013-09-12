var ShapePropertyMixin = {
  _appearanceDefaults: {
    background: '#0099CC',
    width: 100,
    height: 100,
    'border': '1px solid #999',
    position: 'absolute'
  },

  getDefaultProps: function () {
    return {
      properties: null
    };
  },

  extractStyle: function (includeApperanceDefaults) {
    var p = this.props.properties;

    var defaults = includeApperanceDefaults ? $.extend({}, this._appearanceDefaults) : { position: 'absolute' };
    return $.extend(defaults, p);
  }

};