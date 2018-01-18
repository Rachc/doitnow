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
    let keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.preventDefault();
      return false;
    }
  });

  $('.deleteTaskIcon').on('click', function() {
    let list = $(this).parents('li').first();
    list.hide();
  });

  $('.deleteListIcon').on('click', function() {
    let list = $(this).parents('li').first();
    list.hide();
  });

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
