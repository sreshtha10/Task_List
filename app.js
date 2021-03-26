// delete item

const collectionItem  = document.querySelector('.collection');


collectionItem.addEventListener('click',delItem);

function delItem (e){
    
    if(e.target.parentElement.classList.contains('delete-item')){
        //console.log('delete');
        // deletion logic
        e.target.parentElement.parentElement.remove();
        // delete from localStorage as well
    }
}


// adding to the list

const addItem = document.getElementsByTagName('input');



addItem[1].addEventListener('click',subItem);

function subItem(e){
    
    //console.log('add');
    //add logic

    // read the text inside 
    let newTask = (document.getElementById('task')).value;
    //console.log(newTask);

    const newListItem = document.createElement('li');
    newListItem.className = 'collection-item';
    
    newListItem.innerHTML = `${newTask}
    <a href="#" class="delete-item secondary-content">
      <i class="fa fa-remove"></i>
    </a>`;

    document.querySelector('ul.collection').appendChild(newListItem);
    e.preventDefault();


    // add to local storage as well.
    
}



// clear task button

const clearBtn = document.querySelector('a:last-child');

//console.log(clearBtn.innerHTML);

clearBtn.addEventListener('click',clear);


function clear(e){
    let items = document.querySelectorAll('ul.collection li.collection-item');

    items.forEach(function(item){
        item.remove();
    });


    // also delete it from storage.
    
}


