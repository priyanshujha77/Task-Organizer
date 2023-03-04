let main=document.querySelector('#list')
const text=document.querySelector('#text');

const submit=document.querySelector('#submit');

submit.addEventListener('click', function(e){
    e.preventDefault();
    addTodo();
   console.log(e.target);
})

main.addEventListener('click',delCheck);


function addTodo(){

   if(text.value===''){
      alert('Empty task!');
      return;
   }
   const todo=document.createElement('div');
   const li=document.createElement('li');
   const tick=document.createElement('button');
   const del=document.createElement('button');
   li.innerText=text.value;
   tick.classList.add('btn-check', 'fas', 'fa-check-square');
   del.classList.add('btn-trash', 'fas', 'fa-trash');

   todo.appendChild(li);
   todo.appendChild(tick);
   todo.appendChild(del);
   main.appendChild(todo);
   todo.classList.add('newTodo');
   text.value='';


}

function delCheck(e){
   const del=e.target;
   const todo=del.parentElement;
   if(del.classList[0]==='btn-trash') {

      todo.remove();
   }

   if(del.classList[0]==='btn-check'){
      todo.classList.toggle('complete');
      todo.children[0].classList.toggle('complete');

   }
}