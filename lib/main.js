var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

var calculate = widgets.Widget({
  id: "calc",
  width: 72,
  label: "Player",
  contentURL: data.url("buttons.html"),
  contentScriptFile: data.url("calc.js")
});
