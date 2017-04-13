$(document).ready(function(){
    $("#answer").val("0")
    $("button").hover(function(){
      $(this).css("cursor", "pointer")
      $(this).css("background","rgb(0,61,78)")
    },
      function() {
      $(this).css("background", "rgb(192,192,192)")
    });

    var num = ""
    $(".numButton").on("click", function(){
      num += $(this).html() 
      $("#answer").val(num)
      console.log(num)
      $("#equals").on("click", function(){
        $("#answer").val(eval(`${num}`))
      })
    })
    $("#clear").on("click", function(){
      $("#answer").val("0")
      num = ""
    
    })
})
      
    