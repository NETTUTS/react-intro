/** @jsx React.DOM */

var shapeEditor = <ShapeEditor />;
React.renderComponent(
  shapeEditor,
  document.getElementsByClassName('container')[0]
);


function readShapes() {
  var file = $('.shapes-picker').val(),
    text = SHAPES[file] || '';

  $('.editor').val(text);
  shapeEditor.setState({ text: text }); // force a render
}

$('.shapes-picker').change(readShapes);
readShapes(); // load time