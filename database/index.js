const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcherTest', {useMongoClient: true});


let repoSchema = new mongoose.Schema({
  repoID: Number,
  repoName: String,
  repoURL: String,
  username: String,
  private: Boolean,
  forks: Number,
  dates: {
    createdAt: Date,
    UpdatedAt: Date
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (GHData, callback) => {
  //GH data is the big data that github is sending
  // GH data is an array of the different repo data

  //idea: map the data so I get an array of objects of the
  // data I want, and then use the insertMany function to put
  // it all on the data base at once

  var formattedData = GHData.map((repo) => {
    return ({
      repoID: repo.id,
      repoName: repo.name,
      repoURL: repo.owner.html_url,
      username: repo.owner.login,
      private: repo.private,
      forks: repo.forks,
      dates: {
        createdAt: repo.created_at,
        UpdatedAt: repo.updated_at
      }
    });
  });

       //return array of repoIds from the database
    var repoOwner = GHData[0].owner.login
    Repo.find({username: repoOwner}, (err, docs) => {
      if (err) {
        console.log(err);
      } else {
        // this is the array of repoIds
        let repoIds = docs.map((doc) => {
          return doc.repoID;
        })
        //now see if each repoID in formattedData matches any from repoIds...
        let finalArray = [];
        formattedData.forEach((doc) => {
          if (!repoIds.includes(doc.repoID)) {
            finalArray.push(doc)
          };
        })
        console.log(finalArray)
        // THEN push the finalArray
        Repo.insertMany(finalArray, (err) => {
          if (err) {
            console.log('not done')
            callback(err, null)
          } else {
            console.log('done')
            callback(null, 'success!')
          }
        });
      };
    })
  //refactor later using promises




  // this code if for individual entries. I put multiple entries in an array and just used insertMany
  // test.save((err) => {
  //   if (err) {
  //     return handleError(err)
  //   } else {
  //     mongoose.connection.close();
  //   }
  // })

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

let retrieve = (username, callback) => {
  Repo.find( {username: username}, null, {limit: 25}, (err, docs) => {
    if (err) {
      callback(err, null)
    } else {
      let list = docs.map((doc) => {
        return doc._doc
      });
      callback(null, list);
    }
  })
}

module.exports.save = save;
module.exports.retrieve = retrieve;