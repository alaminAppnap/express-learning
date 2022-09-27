let expressJs = require('express');

let router = expressJs.Router();
let bodyParser = require('body-parser');
const { json } = require('body-parser');



// for parsing application/json
router.use(bodyParser.json()); 

// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded


/** you must call all router prefix /things  because in index.php use things */


/** start middleware */
router.use('/user/:id', (req, res, next) => {
   // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('no-authorized')
  // otherwise pass control to the next middleware function in this stack
  else next()
 }, (req, res, next) => {
   console.log('Request Type:', req.method)
   next()
 })

/** End middleware */

router.get('/', function(req, res){
   res.send('GET route on things.');
});

router.get('/no-authorized', function(req, res){
   res.send('you are not authorized.');
});

router.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request! "+JSON.stringify(req.body, null, 2));
});

router.all('/all-method', function(req, res){
    res.send('<h1>Getting all method from things</h1>');
 });

 router.get('/:id', function(req, res){
    res.send('The id you specified is ' + req.params.id);
 });


  /** regex route */
  router.get('/regex/:id', function(req, res){
   res.send('regexids: ' + req.params.id);
}); 

 router.get('/:name?/:id', function(req, res) {
    res.send(`<strong>MY NAME IS :  ${req.params.name} <br> AND MY ID IS :  ${req.params.id}</strong>`);
 });

 












 /** no url match */
 router.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

//export this router to use in our index.js
module.exports = router;