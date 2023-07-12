function newItem(){
    let inputValue = $('#input').val();
    let list = $('#list');
    let li = $('<li></li>');
    let X_button = $('<button>X</button>')
    li.append(inputValue);


    if (inputValue === ''){
        alert('Please input a value!')
    }else{
        list.append(li);
        li.append(X_button)
        $("#input").val('');
    }

    li.on("dblclick", function() {
        li.toggleClass('strike');
    });

    X_button.on("click", function(){
        li.addClass('delete')
        X_button.addClass('delete')
    });
    $('#list').sortable();
}