const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector('.body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(event.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }

  })
});