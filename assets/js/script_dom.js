// window.alert(`chega mas cumpadi`)

// window.confirm(`fala chupa cabra chega ae`)

//  window.console(`quer sair do site?`)




//  document.getElementById('add-item-btn').addEventListener('click', function() {
//      var newItem  = document.createElement('li');
//      newItem.textContet = 'novo item';
//  document.getElementById('dynamic-list').appendChild(newItem);
//  });

//  document.getElementById('change-color-btn').addEventListener('click', function() {
//  document.body.style.backgroundColor = 'red';
//  });

document.getElementById('user-form').addEventListener('submit', function(e) {
var name = document.getElementById('name').value;
if (name === '') {
e.preventDefault();
document.getElementById('erro-message').style.display  = 'block';
}
});




