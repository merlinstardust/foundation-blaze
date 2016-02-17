Package.describe({
  name: 'merlin:foundation-blaze',
  version: '0.0.2',
  summary: 'Blaze wrappers for Zurb Foundation Components',
  git: 'https://github.com/merlinpatt/meteor-foundation-blaze',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating');
  api.use('underscore');
  api.use('zurb:foundation-sites@6.1.2');
  api.imply('zurb:foundation-sites@6.1.2');

  api.addFiles([
    'lib/underscore.js',
  ], 'client', 'server');

  api.addFiles([
    'client/lib/helpers.js',
    'client/stylesheets/main.scss',
    'client/_base.html',
    'client/_base.js',
    'client/close_button.html',
    'client/dropdown.html',
    'client/dropdown.js',
    'client/reveal.html',
    'client/reveal.js',
  ], 'client');
});
