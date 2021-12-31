const VERSION = "2.3";

function generate(length, number) {
  var final_string = "";
  for (var h = 0; h < number; h++) {
    var result = "";
    var characters = "";
    if ($("#letters").is(":checked")) {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if ($("#lowercase").is(":checked")) characters = characters + "abcdefghijklmnopqrstuvwxyz";
    }
    if ($("#numbers").is(":checked")) {
      if ($("#binaries").is(":checked")) characters = characters + "01"; else characters = characters + "0123456789";
    }
    if ($("#symbols").is(":checked")) {
      if ($("#symbols2").is(":checked")) characters = characters + "~`!@#$%^&*()_-+={[}]|\:;',.?/"; else characters = characters + "!@&*_-?";
    }
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    if (h == 0) final_string = result; else final_string = final_string + "-" + result;
  }
  return final_string;
}

(function () {
  const cb = navigator.clipboard;
  $("#copyright").html(`Wizard Codes v${VERSION}<span>Made by Purple Wizard#0984</span>`);
  $('.ui.dropdown').dropdown();
  $("input[type=checkbox]").on("click", function () {
    if ($("#letters").is(":checked")) $("#checkbox2").show(); else $("#checkbox2").hide();
    if ($("#numbers").is(":checked")) $("#checkbox4").show(); else $("#checkbox4").hide();
    if ($("#symbols").is(":checked")) $("#checkbox6").show(); else $("#checkbox6").hide();
  });
  $("#generate").on("click", function () {
    if ($("#letters").is(":checked") || $("#numbers").is(":checked") || $("#symbols").is(":checked")) {
      $("#results").append("<li id='code'>" + generate($("#chains_length").html(), $("#chains_number").html()) + "</li>");
    }
  });
  $("#clear").on("click", function () { $("#results").html(""); });
  $("#copyAll").on("click", function () {
    const paragraph = $("#results").html().split('<li id="code">').join('').split('</li>').join('\r\n');
    cb.writeText(paragraph);
  });
  $("#sidebar-btn").on("click", function () { window.open('https://discord.gg/SBuYeHh', '_blank'); });
  $("#results").on("click", "li", function () {
    const paragraph = $(this).html();
    cb.writeText(paragraph);
  });
})();