require('react');
require('react-dom');
require('jsx-transform');
var $ = require('jquery');

window.DeleteTodo = function(el, post_id){
    $.ajax({
        type: 'DELETE',
        url: '/todos/' + post_id,
        success: function(){
            $(el).parent().parent().remove();
        }
    })
}


