/*
    link: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys#deploy-keys
    link: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key
    link: https://www.youtube.com/watch?v=J_yt1IzXPes

    On the SERVER generate an ssh-keygen
    -> ssh-keygen -t ed25519 -C "meenal.poladia94@gmail.com"

        -> Enter file in which to save the key (/home/ec2-user/.ssh/id_ed25519): (Click Enter)
        -> Enter passphrase (empty for no passphrase): (Click Enter)
        -> Enter same passphrase again: (Click Enter)

        Your identification has been saved in /home/ec2-user/.ssh/id_ed25519
        Your public key has been saved in /home/ec2-user/.ssh/id_ed25519.pub
        The key fingerprint is:

    To access the created key use the command
    -> cat ~/.ssh/id_ed25519.pub

    Now to go your GITHUB account, in the project for which you want to provide access
    Go to Settings -> Deploy keys -> Click on Add Deploy Keys

    Give it a name and add the key generated from using the command cat ~/.ssh/id_ed25519.pub and then click on Add Key

    GO TO SERVER(Make sure you are on ~ while installing git)
    // Install git on the server
    sudo yum install -y git

    GO TO GITHUB
    Go to project -> Code -> SSH (Copy link)

    GO TO SERVER
    git clone insertTheCopiedLink

    Go to the project
    cd pomodoro-timer-be

    Install Dependencies
    npm install --production

 */