
Template.registerHelper('extendContext', function (data) {
  var result = _.clone(this);
  if (data) {
    _.each(data.hash, function (value, key) {
      result[key] = value;
    });
  }
  return result;
});

capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}
