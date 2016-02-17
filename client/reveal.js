Template.zfRevealModal.helpers({
  attributes: function () {
    var attributes = {};
    var data = Template.instance().data;
    if (data.noOverlay) {
      attributes['data-overlay'] = false;
    }
    return attributes;
  },
});
