const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send("Hello Sweet Friend");
// });

app.listen(PORT, console.log(`Listening at ${PORT}`));