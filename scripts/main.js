var Application = function() {
    return {
        init: function () {
            document.getElementById('addButton').addEventListener('click',addItemToList);
        }
    };

};

var count=0;

function striketask(){
      document.getElementById('text'+this.id).innerHTML=document.getElementById('text'+this.id).textContent.strike();
}

function addItemToList(){
        var newTask = document.getElementById('newTask');
        var input=document.createElement('input');
        var listElement=document.createElement('li');
        var text=document.createElement('p');
        input.type="checkbox";
        ++count;
        input.id=count;
        text.innerHTML=newTask.value;
        text.id="text"+count;
  
        listElement.appendChild(input);
        listElement.appendChild(text);
        listElement.className='item';
        
        input.addEventListener('click',striketask);

        document.getElementById('todoList').appendChild(listElement);

        newTask.value="";
}
