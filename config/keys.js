const dbURL = `mongodb://rodney:${encodeURIComponent(
  "robear13"
)}@ds159164.mlab.com:59164/devconnect`;
module.exports = {
  mongoURI: dbURL,
  secretOrKey: "secret"
};
