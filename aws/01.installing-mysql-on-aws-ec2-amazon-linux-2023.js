/*
    Link: https://www.sammeechward.com/mysql-on-aws-ec2-amazon-linux-2

    Github link: https://gist.github.com/meech-ward/db3597795904584b83a0cfa79b461b7d

   -> Install MySQL and start it using the following commands
    sudo yum install -y https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
    sudo amazon-linux-extras install epel -y
    sudo yum install -y mysql-community-server
    sudo systemctl start mysqld
    sudo systemctl enable mysqld

   -> Get the password for the root user:
    sudo grep 'temporary password' /var/log/mysqld.log

   -> Login to MySQL:
    mysql -u root -p

   -> You have to change the root user's password before you can do anything, so run the following command to do that:
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyNewPass1!';

   -> upload the sql file or create the database using the below command
    https://gist.githubusercontent.com/meech-ward/1723b2df87eae8bb6382828fba649d64/raw/ee52637cc953df669d95bb4ab68ac2ad1a96cd9f/lotr.sql

   -> Create Database
     CREATE DATABASE `mydatabase`y;

   -> Create a new user called sam with the password MyNewPass1! that can access the database from localhost:
    CREATE USER 'sam'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyNewPass1!';
    GRANT ALL PRIVILEGES ON mydatabase.* TO 'sam'@'localhost';

   -> Now we can access the database with this user from the ec2 instance. So If I installed a web app on this instance,
      I could use this username and password.
      However, if you want to be able to access the database from anywhere else, First, we have to create a new user
      that can access this database from any host.
    CREATE USER 'frodo'@'%' IDENTIFIED WITH mysql_native_password BY 'MyNewPass1!';
    GRANT ALL PRIVILEGES ON *.* TO 'frodo'@'%';

 */