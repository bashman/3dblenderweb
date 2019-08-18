const express = require('express');
const app = express();

const PORT = 5555

app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`listening in PORT: ${PORT}`);
});