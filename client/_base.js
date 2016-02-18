Template.zfBase.onCreated(function () {
  var instance = this;
  var dataAttribute = instance.data.dataAttribute;
  instance.selector = '[data-' + dataAttribute + ']';
  instance.componentName = dataAttribute.split('-').map(capitalize).join('');

  if (Meteor.settings.public.debug) {
    console.log('Created', instance.componentName, 'with ID', instance.data.id, 'and data', instance.data);
  }
});

Template.zfBase.onRendered(function () {
  var instance = this;
  var componentName = instance.componentName;
  var element = instance.$(instance.selector);
  var options = instance.options || {};

  if (! instance[componentName.toLowerCase()]) {
    instance[componentName.toLowerCase()] = new Foundation[componentName](element, options);

    if (Meteor.settings.public.debug) {
      console.log('Rendered', instance.componentName, 'with element', element, 'and options', options);
    }
  }
});

Template.zfBase.onDestroyed(function () {
  var instance = this;
  var component = instance[instance.componentName.toLowerCase()]
  if (component) {
    component.destroy();

    if (Meteor.settings.public.debug) {
      console.log('Destroyed', instance.componentName, 'with ID', instance.data.id);
    }
  }
});

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
}
