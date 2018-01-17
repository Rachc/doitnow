$(document).ready(function() {
  $('#taskInput').keypress(function(event){
    if (event.which === 13){
      let task = $(this).val();
      $("#taskList").append("<li><div class='task'><div class='TaskName'><input type='checkbox'>" + task + "</div><div class='taskAction'><div class='deleteTaskIcon'></div></div></div></li><ul class='subtaskList'><li></li></ul>");
      $(this).val("");
    }
  });

  $('#taskInput').keypress(function(event){
    if (event.which === 13){
      let task = $(this).val();
      $("#taskList").append("<li><div class='task'><div class='TaskName'><input type='checkbox'>" + task + "</div><div class='taskAction'><div class='deleteTaskIcon'></div></div></div></li><ul class='subtaskList'><li></li></ul>");
      $(this).val("");
    }
  });
});
