Template.zfBase.onCreated(function () {
  var instance = this;
  var dataAttribute = instance.data.dataAttribute;
  instance.selector = '[data-' + dataAttribute + ']';
  instance.pluginName = _.map(dataAttribute.split('-'), _.capitalize).join('');
  console.log('Rendering', instance.pluginName);
});

Template.zfBase.onRendered(function () {
  var instance = this;
  var pluginName = instance.pluginName;
  var element = instance.$(instance.selector);
  var options = instance.options || {};
  instance.component = new Foundation[pluginName](element, options);
});

Template.zfBase.onDestroyed(function () {
  var instance = this;
  if (instance.component) {
    instance.component.destroy();
  }
});
