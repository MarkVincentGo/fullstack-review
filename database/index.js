const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});

let db = mongoose.connection;
 //db.on('error', console.error.bind(console, 'console error:'));
 db.once('open', function() {
   console.log('connected')
 })

let repoSchema = mongoose.Schema({
  repoID: Number,
  repoName: String,
  repoURL: String,
  userID: String,
  private: Boolean,
  forks: Number,
  dates: {
    createdAt: Date,
    UpdatedAt: Date
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;