function addItem(){
    //var taskInput=document.getElementById("new-task");//Add a new task.
    var taskInput = document.getElementById('new-task').value;
    var listItem = document.createElement('li');
    var textAnser = document.createTextNode(taskInput);
    listItem.setAttribute('id', 'ageInDays');
    listItem.appendChild(textAnser);
    document.getElementById('incomplete tasks').appendChild(listItem);

}