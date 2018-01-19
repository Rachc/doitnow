$(document).ready(function() {

  //Add new task
  $("#taskInput").keypress(function(event){
    if (event.which === 13){
      let task = $(this).val();
      if (task === ''){
        $(this).parent().css("border", "1px solid red");
      } else {
        if($(this).hasClass("newListTaskInput")){
          $("#taskList").append("<li><div class='task'><div class='TaskName'><input type='checkbox'>" + task + "</div></div></li>");
        } else {
          $("#taskList").append("<li><div class='task'><div class='TaskName'><input type='checkbox'>" + task + "</div><div class='taskAction'><div class='deleteTaskIcon'></div></div></div></li>");
        }
        $(this).val("");
      }
    }
  });

  //add new subtask
  $("#subTaskInput").keypress(function(event){
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

  //prevent list to be submited with enter key
  $("#newListForm").on("keyup keypress", function(e) {
    let keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.preventDefault();
      return false;
    }
  });

  //delete a task
  $('.deleteTaskIcon').on('click', function() {
    let list = $(this).parents('li').first();
    list.hide();
  });

  //delete a list
  $('.deleteListIcon').on('click', function() {
    let list = $(this).parents('li').first();
    list.hide();
  });

  //checked task if all the subtask are completed.
  $('.subtaskName > input[type=checkbox]').on('change', function() {
    let subtask = $('.subtaskName');
    let checked_subtask = subtask.find('input[type=checkbox]:checked').length;
    let task_checkbox = $('.TaskName').find('input[type=checkbox]');

    if (subtask.length === checked_subtask) {
      task_checkbox.prop('checked', true);
    } else {
      task_checkbox.prop('checked', false);
    }
  });

});
