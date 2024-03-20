/*

    Integrating Cloudwatch for Production

    Logging on production is important as it helps us to keep track of the errors and info. Logs can also be helpful
    for analysing data, setting alarms and for notifying us when there is anything wrong on the server.

    Used winston and winston cloudwatch library to add logs from backend to cloudwatch.

    001. Installed the libraries on the backend
    npm i winston
    npm i winston-cloudwatch

    002. Getting CLOUDWATCH_ACCESS_ID, AWS_CLOUDWATCH_ACCESS_SECRET_KEY and AWS_REGION
        -> Go to Security, Identity and Compliance Services of the AWS
        -> Select IAM
        -> In the side panel select Users from Access Management
        -> Click on Create User button
        -> Type the user name and click Next
        -> Select Attach policies directly => select policy - CloudWatchLogsFullAccess
        -> Once the user is generated you will be able to see the access id, secret key and aws region.

        Use these details in the next step.

    003. Added code to productionLogger.js
    import winston, { createLogger, format } from 'winston';
    import WinstonCloudWatch from 'winston-cloudwatch';

    const { combine, timestamp, printf } = format;

    const productionFormat = printf(({ level, message, timestamp }) => {
        return `[${level}] | ${timestamp} | ${message}`;
    });

    export const productionLogger = () => {
        return winston.createLogger(
            {
                level: 'debug',
                format: combine(
                    format.json(),
                    timestamp(),
                    productionFormat,
                ),
                transports: [
                    new winston.transports.Console({
                        json: true,
                        colorize: true,
                        level: 'info',
                    }),
                    new WinstonCloudWatch({
                        logGroupName: 'pomodoro-logs',
                        level: 'error',
                        awsOptions: {
                            credentials: {
                                accessKeyId: process.env.AWS_CLOUDWATCH_ACCESS_ID,
                                secretAccessKey: process.env.AWS_CLOUDWATCH_ACCESS_SECRET_KEY
                            }
                        },
                        logStreamName: 'error',
                        awsRegion: process.env.AWS_REGION,
                    }),
                    new WinstonCloudWatch({
                        logGroupName: 'pomodoro-logs',
                        level: 'info',
                        awsOptions: {
                            credentials: {
                                accessKeyId: process.env.AWS_CLOUDWATCH_ACCESS_ID,
                                secretAccessKey: process.env.AWS_CLOUDWATCH_ACCESS_SECRET_KEY
                            }
                        },
                        logStreamName: 'combined',
                        awsRegion: process.env.AWS_REGION,
                    })
                ],
            }
        )
    };

    004. Added variables to .env
      accessKeyId: process.env.AWS_CLOUDWATCH_ACCESS_ID
      secretAccessKey: process.env.AWS_CLOUDWATCH_ACCESS_SECRET_KEY
      awsRegion: process.env.AWS_REGION

    005. On Server, After taking the latest pull from git
        git pull origin
        npm i --production
        add variables to .env file
        sudo systemctl daemon-reload
        sudo systemctl restart pomodoro-timer
        sudo systemctl status pomodoro-timer.service

    006. Integration with Cloudwatch
        -> Go to Log groups in the side panel
        -> Click on create log groups
        -> Enter the logGroup name as the one we mentioned on our backend
        -> LogStreamName are created inside the logGroup so we can define them as per our level.

    007. Additional integrations
        -> We can change the time when the Retention Duration for which we want to delete our logs automatically
        -> We can add alarms as well.

 */