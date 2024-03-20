/*
    Resource Link:
    https://nip.io/

    To add an SSL Certificate, we first need to generate the certificate using certbot
    sudo yum install certbot python3-certbot-nginx -y

    Check certbot version
    certbot --version

    We will use nip.io as the host for generating the certificate. It acts as the host for your EC2 IP
    10.0.0.1.nip.io maps to 10.0.0.1

    Once Certbot is installed, you should be able to use the certbot command to obtain SSL/TLS certificates.
    You can then retry your command to obtain a certificate using the DNS challenge method.

    You will first need to stop the service running on port 80(nginx)
    sudo systemctl stop nginx

    If required stop the Node server as well
    sudo systemctl stop pomodoro-timer.service

    Then make the call to issue the certificate
    sudo certbot certonly --standalone -d 34.203.227.165.nip.io --staple-ocsp -m poladiameenal@gmail.com --agree-tos

    You may have to wait until the hour completes if you get the below error
    Error creating new order :: too many certificates already issued for "nip.io". Retry after 2024-02-23T18:00:00Z:
    see https://letsencrypt.org/docs/rate-limits

    Try again at the beginning of the hour at XX:00:01 seconds

    If everything went successfully, you will receive below message
    ---------------------------------------------------------------
    Successfully received certificate.
    Certificate is saved at: /etc/letsencrypt/live/34.203.227.165.nip.io/fullchain.pem
    Key is saved at:         /etc/letsencrypt/live/34.203.227.165.nip.io/privkey.pem
    This certificate expires on 2024-05-23.
    These files will be updated when the certificate renews.
    Certbot has set up a scheduled task to automatically renew this certificate in the background.
    ---------------------------------------------------------------

    As per the last message, certbot has already scheduled a task to run the renewal of the certificate
    It is however a good idea to check if the certificate has been renewed close to its expiry date
    Renewals window opens 1 month before certificate expiry

    Renewing the SSL Certificate
    https://community.letsencrypt.org/t/renew-letsencrypt-certificate/34677
    https://docs.digitalocean.com/support/how-can-i-renew-lets-encrypt-certificates/
    https://letsencrypt.org/docs/faq/#:~:text=Our%20certificates%20are%20valid%20for,your%20certificates%20every%2060%20days.

    Our certificates are valid for 90 days. There is no way to adjust this, there are no exceptions.
    We recommend automatically renewing your certificates every 60 days.

    To view all the ssl certificates and their expiration date use the command
    sudo certbot certificates

    To renew the ssl certificate use the command
    sudo certbot renew

    Once we have got the ssl certificate we need to attach it to the nginx.conf

    sudo nano /etc/nginx/nginx.conf
    server {
        listen       443 ssl http2;
        listen       [::]:443 ssl http2;
        server_name  34.203.227.165.nip.io;

        ssl_certificate /etc/letsencrypt/live/34.203.227.165.nip.io/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/34.203.227.165.nip.io/privkey.pem;

        location /api {
          proxy_pass http://localhost:8080;
          proxy_connect_timeout       300;
          proxy_send_timeout          600;
          proxy_read_timeout          600;
          send_timeout                600;
        }
    }

    Reload the pomodoro-timer service
    sudo systemctl daemon-reload
    sudo systemctl restart pomodoro-timer
    sudo systemctl status pomodoro-timer.service


    Restart nginx
    sudo systemctl restart nginx

    sudo systemctl status nginx

 */