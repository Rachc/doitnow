$(document).ready(function() {
  $('#taskInput').keypress(function(event){
    if (event.which === 13){
      let task = $(this).val();
      if (task === ''){
        $(this).parent().css("border", "1px solid red");
      } else {
        if($(this).hasClass('newListTaskInput')){
          $("#taskList").append("<li><div class='task'><div class='TaskName'><input type='checkbox'>" + task + "</div></div></li>");
        } else {
          $("#taskList").append("<li><div class='task'><div class='TaskName'><input type='checkbox'>" + task + "</div><div class='taskAction'><div class='deleteTaskIcon'></div></div></div></li>");
        }
        $(this).val("");
      }
    }
  });

  $('#subTaskInput').keypress(function(event){
    if (event.which === 13){
      let task = $(this).val();
      if (task === ''){
        $(this).parent().css("border", "1px solid red");
      } else {
        $("#subtaskList").prepend("<li><div class='subtask'><div class='subtaskName'><input type='checkbox'>" + task + "</div><div class='subtaskAction'><div class='deleteTaskIcon'></div></div></div></li>");
        $(this).val("");
      }
    }
  });

  $('#newListForm').on('keyup keypress', function(e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode === 13) {
    e.preventDefault();
    return false;
  }
});
});
