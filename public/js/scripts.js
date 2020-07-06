$(document).ready(function(){

  $(".items").click(function(){
    $(this).children(".describe").slideToggle(1000);
    $(this).children(".picture").toggle(1200);
  });


  $(".col-md-3").mouseover(function(){
    $(this).children(".projectName"). show()
  });

  $(".col-md-3").mouseout(function(){
    $(this).children(".projectName"). hide()
  });


  $("form#contForm").submit(function(){
    var name=$("#name").val();
    var email= $("#email").val();
    var message= $("#message").val();
    alert(' Hi ' + name + ', we have received your message. Thank you for contacting us. We will get in touch soon.');


    $("form#contForm")[0].reset();
  });


});
