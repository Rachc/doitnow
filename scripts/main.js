$(document).ready(function() {
  $('#taskInput').keypress(function(event){
    if (event.which === 13){
      let task = $(this).val();
      if (task === ''){
        $(this).parent().css("border", "1px solid red");
      } else {
        $("#taskList").append("<li><div class='task'><div class='TaskName'><input type='checkbox'>" + task + "</div><div class='taskAction'><div class='deleteTaskIcon'></div></div></div></li><ul class='subtaskList'><li></li></ul>");
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
});
