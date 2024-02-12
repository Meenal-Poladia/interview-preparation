/*

    Setting Alarms on CloudWatch

    For setting alarms with the metrics specified in the metric filter we use the below process:
        -> Go to CloudWatch Service
        -> Select Alarms in the side bar panel
        -> Click on Create Alarm
        -> Select Metrics
        -> Browse and select the region in which we have our services deployed
        -> Scroll Down (We will see many different services are available from which we will select the one for which
        we want to select the metrics. Eg: We select EC2 -> select Per Instance Metrics -> CPU Utilization ->
        Select Metrics
        -> Inset the period, values and threshold number. We can add percentage in the threshold field as well -> click
        Next
        -> Insert the details in the Notification model like topic name and email address -> Select Next ->
        Preview and Create Alarm

    For creating a personal metrics use the following steps:
    link: https://www.youtube.com/watch?v=ZR6Pr9Kvv3E

        -> Go to CloudWatch Service
        -> Select Log Group in the side bar panel -> Select Log group name
        -> Click on Actions -> From teh drop-down select Create Metrics Filter
        -> Enter filter pattern eg: error
        -> Select log data to test (Select the log stream name) -> Test pattern to see if the pattern is valid ->
        select Next
        -> Add Filter name, Metric Name, Metric namespace and click Next
        -> Preview the details and click create metrics

        Once the metrics is created we can now create an alarm
        -> Go to CloudWatch Service
        -> Select Log Group in the side bar panel -> Select Log group name
        -> Select Metrics Filter from the menu below and click on Create Alarm
        -> Now follow all the same steps from above to create an alarm

 */