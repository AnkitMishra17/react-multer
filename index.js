const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const uuidv4 = require('uuid/v4');
const multer = require("multer");

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
  
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
      cb(null, newFilename);
    },
  });
  
const upload = multer({ storage });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/',upload.single('file'), (req,res) => {
  res.send();
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`We are live on port ${port}`);
});
