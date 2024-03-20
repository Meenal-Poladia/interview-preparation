/*
    Adding nginx as a reverse proxy for Hot Module Replacement Node App

    Nginx is a web server that can also be used as a hot module replacement (reverse proxy), load balancer, mail proxy
    and HTTP cache.
    Currently we are using it as a layer where it accepts request from the client, if the request is valid then it will
    go to the node app to get the response and then respond to the client with the response. It will always keep our
    server up live.

    To install nginx we use the command
    sudo amazon-linux-extras install nginx1 -y
    ----------------------------------------
    sudo yum install nginx -y

    To enable and start the service we use the command
    sudo systemctl enable nginx
    sudo systemctl start nginx

    To check the version number we use the command
    nginx -v

    To make changes to the config file we use the command
    sudo nano /etc/nginx/nginx.conf

    First for running on port 80 (We will remove this after SSL is setup is complete)
    Add this to to nginx.conf file
    server {
        listen       80;
        listen       [::]:80;
        server_name  _;                     -> Delete all the lines below it
        location / {                        -> We need to add this location object with the port we are using
          proxy_pass http://localhost:8080;
    }

    Once all the variables have been set to save them we use the command
    -> CTL + O

    To amend save all changes we use the command
    -> CTL + M
    -> CTL + A

    To exit the code editor we use the command
    -> CTL + X

    If we made any changes on the config file we need to restart the service again using the command
    sudo systemctl restart nginx

    To check the status of the service we use the following commands
    sudo systemctl status nginx

    Note:
    - While checking if the service is up and running we need to use the http://publicIp and not https
    - We also need to make sure that the security group has inbound rules for HTTP(port 80) on all traffic
    for us to be able to connect to the service.
 */