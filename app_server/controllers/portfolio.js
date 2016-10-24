/* GET 'home' page */
module.exports.profile = function(req, res) {
  res.render('profile', {title: 'Home'});
};

/* GET 'Work' page */
module.exports.work = function(req, res) {
  res.render('work', {title: 'Work Experience'});
};

/* GET 'Education' page */
module.exports.other = function(req, res) {
  res.render('other', {title: 'Other'});
};

/* GET 'Volunteer' page */
module.exports.volunteer = function(req, res) {
  res.render('volunteer', {title: 'Volunteer Work'});
};

/* GET 'Contact' page */
module.exports.contact = function(req, res) {
  res.render('contact', {title: 'Contact'});
};
