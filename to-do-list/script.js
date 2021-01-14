function addItem(){
    var h1 = document.createElement('h1');
    var textAnser = document.createTextNode( "You are days old!");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnser);
    document.getElementById('incomplete tasks').appendChild(h1);

}