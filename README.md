# Doe
Project developed during a MaratonaDev 3.0

## Install Dependencies
```
npm install mysql express body-parser nunjucks
```

## In MySQL
<p>
  Create database 'doe' and create table: </br>
  <pre><code>  CREATE TABLE donors (
    id int primary key AUTO_INCREMENT,
    name char(255),
    email char(255),
    blood char(3)
  )</code></pre>
</p>

## Run
yarn start // nodemon server.js
