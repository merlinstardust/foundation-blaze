Template.zfDropdown.helpers({
  attributes: function () {
    var attributes = {};
    var data = Template.instance().data;
    if (data.hover) {
      attributes['data-hover'] = true;
    }
    if (data.autoFocus) {
      attributes['data-auto-focus'] = true;
    }
    return attributes;
  },
});
