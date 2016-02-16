Template.FoundationDropdown.onCreated(function () {
  var instance = this;
  instance.hover = instance.data.hover;
  instance.autoFocus = instance.data.autoFocus;
});

Template.FoundationDropdown.helpers({
  attrs: function () {
    var attrs = {};
    if (Template.instance().hover) {
      attrs['data-hover'] = true;
    }
    if (Template.instance().autoFocus) {
      attrs['data-auto-focus'] = true;
    }
    return attrs;
  },
});
