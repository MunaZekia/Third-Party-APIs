// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentHour = new Date().getHours()
console.log(currentHour)
$(function () {
  var buttons = $(".saveBtn")
  //console.log(buttons.length)
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", record)
  }
  eventTime()
})
function record() {
  var timeKey = (this.parentElement.id)
  var plan = ($(this.parentElement).find(".description")[0].value)
  window.localStorage.setItem(timeKey, plan)
  // eventTime()
};
$("#currentDay").text(dayjs().format('dddd, MMM D'))
function eventTime() {
  var timeBlocks = ($(".time-block"))
  // Get current hr from day.js
  timeBlocks.each(function () {
    var timeblockId = parseInt($(this).attr("id"))
    if (timeblockId < currentHour) {
      $(this).removeClass("future")
      $(this).removeClass("present")
      $(this).addClass("past")
    }
    else if (timeblockId === currentHour) {
      $(this).removeClass("future")
      $(this).removeClass("past")
      $(this).addClass("present")

    }
    else {
      $(this).removeClass("present")
      $(this).removeClass("past")
      $(this).addClass("future")

    }

  })
  // Grab the ID and parse to find the hour and determine where in time

}