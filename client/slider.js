Template.zfSlider.helpers({
  attributes: function () {
    var attributes = {};
    var data = Template.instance().data;
    if (data.start) {
      attributes['data-initial-start'] = data.start;
    }
    if (data.end) {
      attributes['data-end'] = data.end;
    }


    if (data.lStart) {
      attributes['data-initial-start'] = data.lStart;
    }
    if (data.rStart) {
      attributes['data-initial-end'] = data.rStart;
    }

    if (data.vertical) {
      attributes['data-vertical'] = true;
    }

    return attributes;
  },
});

Template.zfSlider.onCreated(function () {
  var instance = this;
  var dataAttribute = 'slider';
  instance.selector = '[data-' + dataAttribute + ']';
  instance.componentName = dataAttribute.split('-').map(capitalize).join('');

  if (Meteor.settings.public.zfDebug) {
    console.log('Created', instance.componentName, 'with ID', instance.data.id, 'and data', instance.data);
  }
});

Template.zfSlider.onRendered(function () {
  var instance = this;
  var componentName = instance.componentName;
  var element = instance.$(instance.selector);
  var options = instance.options || {};

  if (! instance[componentName.toLowerCase()]) {
    instance[componentName.toLowerCase()] = new Foundation[componentName](element, options);

    if (Meteor.settings.public.zfDebug) {
      console.log('Rendered', instance.componentName, 'with element', element, 'and options', options);
    }
  }
});

Template.zfSlider.onDestroyed(function () {
  var instance = this;
  var component = instance[instance.componentName.toLowerCase()];
  if (component) {
    component.destroy();

    if (Meteor.settings.public.zfDebug) {
      console.log('Destroyed', instance.componentName, 'with ID', instance.data.id);
    }
  }
});
