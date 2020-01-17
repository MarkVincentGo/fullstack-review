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
    createdAt: String,
    UpdatedAt: String
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (GHData) => {
  //GH data is the big data that github is sending

  let test = new Repo({
    repoID: 4,
    repoName: 'hi',
    repoURL: 'hi',
    userID: 'hi',
    private: true,
    forks: 7,
    dates: {
      createdAt: 'hi',
      UpdatedAt: 'hi'
    }
  });

  const doc = Repo.find({repoID : 4});
  console.log(doc)

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;