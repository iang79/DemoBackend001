$('#navId a').click(e => {
    e.preventDefault();
    $(this).tab('show');
});

$('#exampleModal').on('show.bs.modal', event => {
    var button = $(event.relatedTarget);
    var modal = $(this);
    // Use above variables to manipulate the DOM
    
});

$(document).ready(function () {
    $("#signup-form").submit(function () {
      var nm1 = $("#name1").val();
      var ps1 = $("#pass1").val();
      localStorage.setItem("n1", nm1);
      localStorage.setItem("p1", ps1);

    });

    $("#login-form").submit(function () {
      var enteredName = $("#name2").val();
      var enteredPass = $("#pass2").val();

      var storedName = localStorage.getItem("n1");
      var storedPass = localStorage.getItem("p1");

      if (enteredName == storedName && enteredPass == storedPass) {
        alert("You are logged in!");
        window.open("pagina1.html"); 
     
      }
      else {
        alert("Username and Password do not match!");
      }

    });

  });

