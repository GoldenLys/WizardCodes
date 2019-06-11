var loadState = 0;

function HYD(length, type) {
  var Resultat = "";
  for (var h = 0; h < type; h++) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
  $("#generate").on("click", function() {

  });
})();

function UpdateEngine() {
  if (loadState < 3) {
    loadState++;
    $("#loading").show();
    $("#main").hide();
    $("#q").hide();
  }
  if (loadState == 3) {
    $("#loading").hide();
    $("#main").show();
    $("#q").show();
    loadState++;
  }
}

function Generate() {
  var CN = $("#CN").html();
  var CL = $("#CL").html();
  $("#generate").append("<br><li>" + HYD(CL, CN) + "</li>");
}
