$(function() {

  var today = dayjs();
  $("#currentDay").text(today.format("MMM D, YYYY"));
  
  $(".saveBtn").on("click",function(params) {
    console.log(this);
  var id = $(this).attr("id");
  const currentDayEl = document.getElementById("currentDay");
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  currentDayEl.innerHTML = now.toLocaleDateString("en-US", options);

  
const userlog = $(this).siblings(".description").val();
const time = $(this).parent().attr("id");
console.log("log = ", userlog);

localStorage.setItem(time, userlog);

 });   
});

$("#clearBtn").on("click", function() {
    $(".description").val("");
  });  

function getLocalStorageValues() {
  const hourIds = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  hourIds.forEach(hourId => {
    $(`#hour-${hourId} .description`).val(localStorage.getItem(`hour-${hourId}`));
  });
}

$(function() {
  // other code...

  // Call the function to get values from local storage
  getLocalStorageValues();
});

 $(function() {
    getLocalStorageValues();
  });
  

  function colorCoder(){
    let currentTime = dayjs().hour();
console.log("currentTime = ", currentTime);
       $(".time-block").each(function(){
    
      let logTime = parseInt($(this).attr("id").split("-")[1]);
      console.log("logTime = ", logTime);
     if(logTime < currentTime){
        $(this).addClass("past");
      } else if (logTime === currentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  colorCoder();
 
  
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

 