var form=document.getElementById('addForm');
var item_list=document.getElementById('items');
var filter = document.getElementById('filter');

///
///form submit event
///
form.addEventListener('submit',add_item);
item_list.addEventListener('click',delete_event);
filter.addEventListener('keyup',filter_items)

///
///ADD ITEM
///
function add_item(e){
    e.preventDefault();
    
    ///
    ///get input value
    ///
    var new_item=document.getElementById('item').value;

    ///
    ///create new li element
    ///
    var li=document.createElement('li');
    ///
    ///class name
    ///
    li.className='list-group-item';
    console.log(li)

    ///
    ///add text node with input value
    ///
    li.appendChild(document.createTextNode(new_item));
    ///
    ///add delete button
    ///
    var delete_btn=document.createElement('button');
    
    ///
    ///add classes to delete button
    ///
    delete_btn.className='btn btn-danger btn-sm float-right delete';

    ///
    ///addtext node
    ///
    delete_btn.appendChild(document.createTextNode('X'));

    ///
    ///append button to li
    ///
    li.appendChild(delete_btn);

    ///
    ///adding li in list
    ///
    item_list.appendChild(li)
};

///
///remove item
///
function delete_event(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure")){
            var li = e.target.parentElement;
            item_list.removeChild(li);
        }
    }
}

///
///filter items
///

function filter_items(e){
    ///
    ///converted to lower case
    ///
    var text = e.target.value.toLowerCase();
    console.log(text)
    ///
    ///get all the li 
    ///
    var items = item_list.getElementsByTagName('li');
    ///
    ///conver html list to array
    ///
    Array.from(items).forEach(function(item){
        
        var item_name=item.firstChild.textContent;
        
        if (item_name.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })


    	
}
