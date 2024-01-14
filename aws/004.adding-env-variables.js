/*

    Environmental variables added to the terminal are deleted once we close the amazon linux terminal. So, to make them
    persistent  we need to store them in a .sh file of the server. Using the below procedure we are saving the env
    variables for all the users.

    It is recommended to create a custom.sh file which contains the variables to be set. The .sh files are run by bash.
    The bash run the commands set in the .sh files when the project is setup everytime it is closed or shut down due to
    some crash. Thus, we are ensured that variables will be set without any failure.

    At first we need to locate where we are in project using the below command
    -> pwd

    If we are in /home/ec2, we need to then go to the root directory using
    -> cd .. (twice)

    Then we need to see the list of folders in the current directory, where we will find the etc folder. We need to
    navigate inside this folder using the below folder structure
    -> cd etc/project.d

    In this folder we create a custom.sh file using the command. It is important for us to note that we need to use
    sudo in the command as only super users can create new files.
    -> sudo touch custom.sh

    To edit the custom.sh we use the below command. nano is a text editor here which helps us to edit.
    -> sudo nano custom.sh

    Once this file is created we can set our environmental variables here, where we insert the value in a single quote
    -> export userName='Node'

    Once all the variables have been set to save them we use the command
    -> CTL + O

    To amend save all changes we use the command
    -> CTL + M
    -> CTL + A

    To exit the code editor we use the command
    -> CTL + X

    Once the environmental variables have been set we need to disconnect and connect again again to the server as the
    variables will be set only once the server is starting up by running its .sh files.

 */