/** @jsx React.DOM */
var ShapeEditor = React.createClass({
  componentWillMount: function () {
    this._parser = new ShapeParser();
  },

  getInitialState: function () {
    return { text: '' };
  },

  render: function () {
    var shapes = this._parser.parse(this.state.text);

    var tree = (
      <div>
        <textarea class="editor" onChange={this.handleTextChange} />
        <ShapeCanvas shapes={shapes} />
      </div>);

    return tree;
  },

  handleTextChange: function (event) {
    this.setState({ text: event.target.value })
  }

});

