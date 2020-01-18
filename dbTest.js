const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/heyo', {useMongoClient: true});

// let db = mongoose.connection;
//  //db.on('error', console.error.bind(console, 'console error:'));
//  db.once('open', function() {
//    console.log('connected')
//  })

 var schema = new mongoose.Schema({ name: 'string', soize: 'string' });

 var Poop = mongoose.model('Poop', schema);


 var small = new Poop({ soize: 'smaoooooll' });
 small.save(function (err) {
   if (err) {
     return handleError(err)
   } else {
     console.log('yes')
     Poop.find({soize: 'smaoooooll'}, (err,data )=>{
       if (err) {
         console.log(err)
       } else {
         console.log('hi')
         var format = data.map((k) => {
          return k._doc
         })
         console.log(format);

         mongoose.connection.close()
       }
      })
   }

 });


