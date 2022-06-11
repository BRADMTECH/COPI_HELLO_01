const app = require('express')();
const routes = require('./routes/index');
app.set('view engine', 'ejs');

app.use(routes);
app.listen(3000, ()=>{
	console.log('=D');
});
