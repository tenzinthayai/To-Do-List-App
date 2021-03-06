// Check off Specific Todos by Clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed")
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        todoText = todoText.charAt(0).toUpperCase() + todoText.slice(1);
        $(this).val("");
        if(todoText === "") {
            alert("Please enter a value and try again.");
        } else {
        //create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ todoText + "</li>");
        }
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});