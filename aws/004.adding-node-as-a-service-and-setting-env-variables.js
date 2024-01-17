/*
    link: https://www.sammeechward.com/deploy-node-app-on-aws-ec2-amazon-linux-2

    Deploying Node as a service and adding environmental variables to the project

    Environmental variables added to the terminal are deleted once we close the amazon linux terminal. So, to make them
    persistent  we need to store them in a .env file of the server. Using the below procedure we are saving the env
    variables for all the users.
    It is recommended to create a .env file which contains the variables to be set.

    Part 1- At first we need to locate where we are in project using the below command
    -> pwd

    Then we need to go in our project directory pomodoro-timer-be and create a .env file using the command
    -> sudo touch app.env

    To edit the file using the nano text editor and for adding the variables we use the command
    -> sudo nano app.env

    Once all the variables have been listed, to save them we use the command
    -> CTL + O

    To amend save all changes we use the command
    -> CTL + M
    -> CTL + A

    To exit the code editor we use the command
    -> CTL + X

    Part 2- Now we create a service file in the directory
    sudo nano /etc/systemd/system/pomodoro-timer.service

    Then we add the content in the file
    [Unit]
    Description=Pomodoro Timer Server
    After=multi-user.target

    [Service]
    ExecStart=/home/ec2-user/.nvm/versions/node/v20.8.0/bin/node /home/ec2-user/pomodoro-timer-be/index.js
    Restart=always
    RestartSec=10
    StandardOutput=syslog
    StandardError=syslog
    SyslogIdentifier=pomodoro-timer
    User=ec2-user
    EnvironmentFile=/home/ec2-user/pomodoro-timer-be/app.env

    [Install]
    WantedBy=multi-user.target

    Once all the variables have been set to save them we use the command
    -> CTL + O

    To amend save all changes we use the command
    -> CTL + M
    -> CTL + A

    To exit the code editor we use the command
    -> CTL + X

    To enable the service and make it run always in the background we use the following commands
    sudo systemctl enable pomodoro-timer.service
    sudo systemctl start pomodoro-timer.service

    To check the status of the service we use the following commands
    sudo systemctl status pomodoro-timer.service

    If we made any changes on the .env or the .service file we need to restart the service again using the command
    sudo systemctl daemon-reload
    sudo systemctl restart pomodoro-timer
    sudo systemctl status pomodoro-timer.service

    Note:
    - While checking if the service is up and running we need to use the http://publicIp and not https
    - We also need to make sure that the security group has been enabled for us to connect to the service.

 */