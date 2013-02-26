const data = require("sdk/self").data;
const widgets = require("sdk/widget");
const tabs = require("sdk/tabs");

var togglcalc = widgets.Widget({
  id: "togglcalc",
  width: 20,
  label: "Convert to Hours",
  contentURL: data.url("time.png"),
  contentScriptFile: data.url("calc.js"),
  onClick: function() {
      this.port.emit('clicked', tabs.activeTab.url)
  }
});
