Package.describe({
  name: 'merlin:foundation-blaze',
  version: '0.0.4',
  summary: 'Blaze wrappers for Zurb Foundation Components',
  git: 'https://github.com/merlinpatt/foundation-blaze',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating');
  api.use('zurb:foundation-sites@6.1.2');
  api.imply('zurb:foundation-sites@6.1.2');

  api.addFiles([
    'client/lib/helpers.js',
    'client/_base.html',
    'client/_base.js',

    'client/close_button.html',
    'client/progress_bar.html',
    'client/dropdown.html',
    'client/dropdown.js',
    'client/reveal.html',
    'client/reveal.js',
    'client/tooltip.html',
  ], 'client');
});
