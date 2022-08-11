var topDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(topDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var textBlock= $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(timeBlock, textBlock);
    })
})