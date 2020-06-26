var loadState = 0;
function HYD(length, type) {
  var Resultat = "";
  for (var h = 0; h < type; h++) {
    var result = "";
    var characters = "";
    if ($("#letters").is(":checked")) {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if ($("#uppercase").is(":checked")) { characters = characters + "abcdefghijklmnopqrstuvwxyz"; }
    }
    if ($("#numbers").is(":checked")) { characters = characters + "0123456789"; }
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (h == 0) { Resultat = result; } else { Resultat = Resultat + "-" + result; }
  }
  return Resultat;
}
(function () {
  setInterval(UpdateEngine, 1000);
  $('.ui.dropdown').dropdown();
  $("#generate").on("click", function () { Generate(); });
  $("#clear").on("click", function () { Clear(); });
  $("#sidebar-btn").on("click", function () { window.open('https://discordapp.com/invite/SBuYeHh', '_blank'); });

  $( "#results" ).on( "click", "li", function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).text()).select();
    document.execCommand("copy");
    $temp.remove();
    console.log("TEXT COPIED.");
  });
})();
function UpdateEngine() {
  if (loadState < 3) {
    loadState++;
    $("#loading").show();
    $("#main").hide();
  }
  if (loadState == 3) {
    $("#loading").hide();
    $("#main").show();
    loadState++;
  }
  if ($("#letters").is(":checked")) {
    $("#CH2").show();
  } else { $("#CH2").hide(); }
}
function Generate() {
  var CN = $("#CN").html();
  var CL = $("#CL").html();

  if ($("#letters").is(":checked") || $("#numbers").is(":checked")) {
    $("#results").append("<li id='code'>" + HYD(CL, CN) + "</li>");
  }
}
function Clear() {
  $("#results").html("");
}
