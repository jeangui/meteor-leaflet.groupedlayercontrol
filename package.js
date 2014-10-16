Package.describe({
  summary: "Leaflet group layered control Plugin for Meteor ",
  version: "1.0.0",
  git: "https://github.com/jeangui/meteor-leaflet.groupedlayercontrol"
});

Package.onUse(function(api,where) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.addFiles('lib/leaflet.groupedlayercontrol.js','client');
  api.addFiles('style/leaflet.groupedlayercontrol.css','client');
  api.addFiles('images/layers.png','client');
});

/*
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jeangui:leaflet.groupedlayercontrol');
  api.addFiles('jeangui:leaflet.groupedlayercontrol-tests.js');
});
*/
