Handlebars.registerHelper('formatScore', function(score) {
  if(score !== 1) {
    return score + " points";
  } else {
    return score + " point";
  }
});
