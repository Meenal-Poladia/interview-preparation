/*

    Steps for creating an EC2 instance on aws

    Go to Dashboard -> select EC2 instance -> From the sidebar select Instances -> Launch instances -> Fill the form
    now

    Name: EC2 instance name

    Select Operating System: Amazon Linux 2023 AMI (Free tier Eligible)

    Linux Version
    Amazon Linux 2023
    2023.3.20231218.0-kernel-6.1-x86_64 OR Higher Patch Version(20231218)

    It has
    GLIBC Version (Check using ldd --version)
    v2.34
    which supports
    Node Version (Check using node --version)
    v20.80.0

    Architecture: 64-bit (x86)

    Instance type: t2.micro (Free tier Eligible)

    Key Pair
    Create a new key-pair or select from the existing one

    Select existing security group or create one
    launch-wizard-1
    OR
    Security Group must include
    IPv4	HTTPS	        TCP	443	    0.0.0.0/0	        HTTPS for IPv4  //Port 443 is used explicitly for HTTPS services and hence is the standard port for HTTPS (encrypted) traffic.
	IPv4	HTTP	        TCP	80	    0.0.0.0/0	        HTTP for IPv4   //Port 80 is the default network port for web servers using HTTP.
	IPv4	SSH	            TCP	22	    0.0.0.0/0	        –               // To connect with remote server
	IPv6	HTTP	        TCP	80	    ::/0	            HTTP for IPv6   //Port 80 is the default network port for web servers using HTTP.
	IPv6	HTTPS	        TCP	443	    ::/0	            HTTPS for IPv6  //Port 443 is used explicitly for HTTPS services and hence is the standard port for HTTPS (encrypted) traffic.
	IPv4	MYSQL/Aurora	TCP	3306	99.245.20.53/32	    MySQL for My IP // To connect with mysql client

    Configure Storage (Add Storage according to requirements)
    10GB

    Review the details and click on launch instance

 */