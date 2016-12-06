describe('application', function () {
    var application,container;
    beforeEach(function () {
        container = fixture(
          '<input type="text" id="newTask">'+
      '<button id="addButton">Add new Task</button>'+
            '<ul id="todoList"></ul>'
        );
        document.body.appendChild(container);
        application = new Application(document);
        application.init();
    });

    afterEach(function () {
        document.body.removeChild(container);
    });

    it('should change results-value when button is clicked', function () {
        var value = "newtask";
        document.getElementById('newTask').value=value;
        document.getElementById('addButton').click();
        expect(document.getElementById('text1').textContent).toEqual(value);
    });


});



function fixture(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div;
}