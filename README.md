# Gas-Booking-System
Gas Online Booking System with user Registration page and Login page with validation Using Mysql and Nodejs

1) Download the Given RAR file and extract it in a desired location.

2) Download Xampp with Mysql.

3) In Xampp control panel start Mysql server and click on the Admin tab.

4) Create a Database named "nodejs-login" and table name as "users" with 6 columns.

5) Paste the following sql code 
    CREATE TABLE `nodejs-login`.`users` ( `id` INT(10) NOT NULL AUTO_INCREMENT , `name` VARCHAR(100) NOT NULL , `email` VARCHAR(200) NOT NULL , `password` VARCHAR(50) NOT NULL , `total_booked` INT(11) NOT NULL , `status` VARCHAR(20) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
    
6) Now a table is created with Required credentials.

7) Install Nodejs("https://nodejs.org/en/download/") and run "npm install express-handlebars" in terminal to install package.

8) Now run Server using "node app.js" Meanwhile start Mysql and apache in Xampp.

