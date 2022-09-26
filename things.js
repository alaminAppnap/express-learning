let express = require('express');

let router = express.Router();

/** you must call all router prefix /things  because in index.php use things */

router.get('/', function(req, res){
   res.send('GET route on things.');
});
router.post('/', function(req, res){
   res.send('POST route on things.');
});

router.all('/all-method', function(req, res){
    res.send('<h1>Getting all method from things</h1>');
 });

 router.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
 });


  /** regex route */
  router.get('/regex/:id?', function(req, res){
   res.send('regexids: ' + req.params.id);
}); 

 router.get('/:name?/:id?', function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
 });

 
 













 /** no url match */
 router.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

//export this router to use in our index.js
module.exports = router;