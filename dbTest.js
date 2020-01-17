const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

// let db = mongoose.connection;
//  //db.on('error', console.error.bind(console, 'console error:'));
//  db.once('open', function() {
//    console.log('connected')
//  })

 var schema = new mongoose.Schema({ name: 'string', size: 'string' });

 var Tank = mongoose.model('Tanky', schema);
