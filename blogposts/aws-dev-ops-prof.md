---
id: 'aws-dev-ops-cert'
title: 'AWS DOP-C01'
date: '2022-08-23'
category: "Guidance/Advice"
template: "blog-post"
tags: 'AWS, Exam, DEV OPS'
---
## The Domains of Exam

- **Domain 1: SDLC Automation (16 questions)** -
- **Domain 2: Configuration Management & Infrastructure as Code (16 questions)** -
- **Domain 3: Monitoring and Logging (11 questions)** -
- **Domain 4: Policies and Standards Automation (9 questions)** -
- **Domain 5: Incident and Event Response (13 questions)** -
- **Domain 6: High Availability, Fault Tolerance, & DR (10 questions)** -

### CD

#### blue/green is past but want to change to run one set of servers and to update everything at same time

- Edit CD application deployment group and change the deployment type from blue/green to in-place
- you are able to edit the application deployment group in CodeDeploy, you do not have to create a new one.

#### new CC repo all but 1 can connect via SSh

- CC requires KMS. a policy might be attached to the already existing IAM user that DENIES KMS actions required
- For a new IAM user attach AWSCodeCommitFullAccess or another managed policy for CC access
- user might have prev configured his local computer to use credential helper for CC. if so EDIT the .GITCONFIG file to remove the credential helper info from the file before using git creds

#### RDS test DB is isolated on private subnet. Want to run at night

- Amazon VPC access in your CB project needs to be enabled
- Specify your VPC ID, subnets, and securty groups in your build project
- set up CW Events to start pipeline on schedule
- ```aws events put-rule --schedule-expression 'cron(10 3 ? * MON-FRI *)' --name IntegrationTests```
- CB DOES NOT SUPPORT assigning elastic IP addresses to the network interfaces that it creates, and auto-assigning a public IP address is not supported by EC2 for any network interfaces created outside EC2 instance launches

#### AWS_CODEBUILD_MAX_MEM_ALLOC defined in multiple parts

- value in **start build operation** call takes HIGHEST precedence
- value in the **build project definition**
- value in the **build spec declaration** takes lowest precedence
- DO NOT SET ENV VAR with 'CODEBUILD_'

### CW

- With CloudTrail enabled create CW Event rule to track AWS API call via CloudTrail
- use SNS as a target for notification
- create a rule that triggers on an action by an AWS service that doesn not emit events, you can base the rule on API calls
- Dynamo Streams captures information but do not capture DeleteTable API calls, they only capture item level events

#### Resolving the audit deficiency requires the creation of a centralized log monitoring capability for the AWS-based apps and infrastructure, and for certain on-premises systems that they interface with

- Elasticsearch is a fully managed service that lets you collect and analyze logs metrics, giving you a comprehensive view into your apps and infrastructure
- CloudWatch collects via CloudWatch Agent:
  - API events from CloudTrail
  - networking events from VPC Flow Logs
  - app & system logs from EC2 instances
- Using a single CloudWatch log group ensures that system logs share the same retention, monitoring, and access control settings.
- Lambda in each account can move log data from CW into Elasticsearch for indexing
- Visualization with Kibana
- CloudWatch log streams are a sequences of events from the same source, whereas a log group is a collection of log streams.
- Logstash works well for collecting logs, but is usuallly paired with Elasticsearch for log monitoring and analysis.
- AWS System Manager agents send status and execution info back to Systems Manager but NOT THE APPS LOGS, which the CW Logs agents are capable of sending.

#### want to monitor AWS resources, on premises resources, apps and services

- CW console is a suitable service for selecting metrics and creating graphs
- CW logs will allow you to log both AWS and on premises resources
- CW Alarams will be suitable for alerts and notifications

### CF

#### Best Practices

- seperate stacks into individual, seperate logical components with dependencies on eachother
- best way to link is with Exports and Imports
- each CF template to be seperate file

#### upgrade database

- major update - advances both minor and major - can take longer - compatability issue during & after possible
- minor update - keeps the major version the same while advanic the minor
- SourceDBInstanceIdentifier in CF template for a RDS Read Replica
- rolling upgrade with read replicas

#### template creating VPC and a subnet forEach AZ w/in Region the Stack is created. Requires Region to be passed in stack as a parameter. Automate with intrinsic

- Mappings Section - list each AZ in each Region
- Resources use !Ref "AWS::Region" to return the Region
- Fn::GetAZs to return a list of ALL AZs
- FN:Select to choose each AZ from the list

### CP

- two versions of code require 2 pipelines
- master to one production to another

#### GitHub Errors?

- CP uses OAuth tokens to integrate with GitHub you might have revoked permissions on the Oath token for CP
- The number of OAuth tokens is limited and if CP reaches that limit older tokens will stop working and actions in pipeline that rely upon that token will fail.
- Try to manually configure one OAuth token as a personal access token and then configure all pipeline in your AWS account to use that token

### CodeCommit

- create IAM policy with required permissions and attach it to a  ```developers``` group

#### auto building PR's with a testing status badge

- CW Events rule on POST/PUT to PR's with a target set to CB
- 2nd rule for success or fail of CB build it's target would be a lambda to update the PR

#### CICD pipeline for DR - Docker

- use CB to acquire ECR credentials using the CLI helpers
- build the image and push it into ECR
- start another CD stage -> into ECS
- CW Events does NOT support CodeDeploy as a target there CodeDeploy must be invoked by CP

#### compile release notes from CC

- Setup CW Event rule to match CodeCommit repository events 'CodeCommit Repository State Change'
- commit must be tagged for easy future reference
- look for 'referenceCreated' events with a 'tag' referenceType that are created when a production release is tagged after a merge to master
- Lmabda func use the CC API to retrieve that release commit message and store it in a static website hosting enabled S3 bucket

### AWS Config

- _AWS Config auditing capabilitiy provided with a timeline dashboard with compliance over time._

#### alerts of EBS unencryption

- Config custom managed rule checking for EBS volume encryption.
- CW Event rule alerts
- _SNS topics when directly integrated with Config can only be used to stream all the notifications and configuration changes and **NOT** selectively for a given rule_

### StepFunctions

#### daily EBS backup workflow

- StepFunction state machine with Lambda and CW Events is a solution
- sf can coordinate the logic to automate the a snapshot flow

#### golden ami retrieve and inspect with AWS Inspector

- using CW events schedule a SF which will launch a single EC2 instance from the AMI & tag it
- SF kicks off AMI assessment template using AWS Inspector and the created tag.
- cost effecitive to test on SINGLE EC2 instance - run assesment then terminate

### Dynamo & Lambda & EC2

#### send logs before termination

- Lifecycle hooks = custom actions by pausing instances as an ASG launches or terminates them.
- while is **WAIT** state you can connect and download logs or other data
- termination hook for ASG & create CW Event rule target -> lambda which invokes SSM Run Cmd to send log files from EC2 to S3
- DynamoDB table to compile metadata index -> primary key = instance_id & sort key = datetime
- S3 event integrate w/ lambda ```PUT``` -> triggers write to DynamoDB table

#### streams lambda throttle

- fan-out pattern with lambda and SQS/SNS

### ECS

#### send logs om a container on ECS

- awslogs driver writes to CW logs natively
- the EC2 should have proper IAM role to write to CWL
- require ```logs:CreateLogStream``` and ```logs:PutLogEvents``` permission on the IAM role

### AMIs ?

#### security hardened daily check for vulnerabilities

- CWE on daily sched target = SF
- SF -> EC2 instanve from AMI

### Health Service

#### AWS_RISK_CREDENTIALS_EXPOSED

- CW Event checking -> SF workflow to issue API calls to IAM, CloudTrail, and SNS (for alert)
- Personal Health Dashboard service
- if way to react to event will have retries and you want full audit trail of each workflow SF > Lambda

### SSM

#### list of install software packages

- _SSM Agent can be installed and configured on EC2 instance, on prem, or a VM._
- makes it possible for System Manager to update, manage, and configure these resources
- SSM Inventory collects metadata from managed instances - data can be stored
- Create CW Event rule yo trigger a lambda func on hourly basis. This can be set to do a comparison of the instances that sare running in EC2 and those tracked by SSM

- An SSM automation cannont contain complex logic to hjandle failures, although it would provide an execution history.
- An SSM automation documents defines the actions that Systems Manager performs on your managed instances and other AWS resources when an automation execution runs.
- A document contains one or more steps that run in sequential order.
- Each ste[ is built around a single action. The output of one step can be used as input in a later step
- The process of running these actions and their steps is called the automation workflow.

### EB

#### container_commands

- ```container_commands``` key to execute commands that affect your applciation source code
- these run after the app and web server have been set up and the app version archive has been extracted
- this is BEFORE the app is deployed
- ```leader_only``` to only run cmd when a test evaluates to true
- ```commands``` do not support leader_only attribute there use ```container_commands```

- nginx comes default with Python in EB
- Java can be deployed with Java Option, and the Java parameters can be specified in the 'Environment properties' section

#### blue/green with .NET/SQLServer/Github

- Create an MSBuild container image with required tools for compliling .NET apps and push it to ECR
- Configure AWS Code Pipeline to fetch the latest GitHub code and schema update script
- Have CP trigger AWS CodeBuild to use the MSBuild container image from ECR to compile the source code
- Configure CB to then construct the .NET app
- Also have CB create an executable to run the schuma update script
- CP to trigger ACD to deploy .NET app to EB
- CB invoke a PowerShell script to run the schema update executable

### Trusted Advisor

- checks infrastructure accorss all regions and provides summary of the results

#### check for low cpu ultization

- check the low-utilized EC2 instances are on
- create CW event that tracks the events created by TA use lambda as a target
- the lambda should trigger SSM Automation document with manual approaval step
- Upon approval, the SSM document proceeds with instance termination

### Jenkins

#### Jenkins as build provider in CI/CD

- CodePipeline plugin for Jenkins

### AWS SAM

#### gradually shift customer traffic to the updated lambda in increments of 10% with 10 minutes between each increment until you are satisfied that it's working as expected

- Define a DeploymentPreference of type 'Linear10PercentEvery10Minutes' in your AWS SAM template
- Configure a post traffic hook Lambda function to run a sanity test that is invoked by CodeDeploy after traffic shifting completes

### EC2

#### High Performance Computing (HPC) app on small number of EC2 placed in single AZ

- Deploy the EC2 servers in a Cluster Placement Group
- Cluster Placement Groups are recommended for application that benefit from low network latency, high network throughput, or both
- also when the majority of the network traffic is between the instances in the group

### Server Migration Service

- migrate your servers to cloud?
- current servers are built and configured automatically using Chef
- Server Migration Service will bring your existing Chef managed machines into EC2 and to manage them with Chef the same way you have been on your in-house system

### Kinesis Data Streams

#### Kinesis Data Streams - throughput lower then expected

- Check the GetShartIterator, CreateStream, and DescribeStream **Service Limits**
- Use a SMall Producer with the Kinesis Producer Library, but using the PutRecords operation
- Develop code using the ZKinesis Producer Library to put data onto the streams

#### slower than expected reading from the shards, but you are also seeing records being skipped - WHAT COULD CAUSE A SLOW DOWN IN READDING FROM A SHARD

- for slow reading - it could be due to the maxRecords value being set too low
- code logic which is calling processRecords being inefficient and causing high CPU usage or blocking
- USUALLY PROCESSRECORDS CALLS HAVING BE UN HANDLED EXCEPTIONS

#### prcession incoming streaming data. GetRecords.IteratorAgeMilliseconds metric increases. How TO REDUCE THE TIME LAG IN THE STREAM

- Increase parallelism by adding more shards per stream
- Add more EC2 KCL consumers to allow each to process less shards per instance
- An increased GetRecords.IteratorAgeMilliseconds metric means that either the KCL consumer cannot keep up processing the data from the Kinesis stream or there aren't enough shards in the stream

### AWS CloudSearch

#### search contents of documents in S3

- Implement Amazon CloudSearch
- Setup Access policies
- Configure your index
- Creaete a search domain

### Amazon Inspector

#### weekly scan of ports reachable from outside the VPC

- Configure Netowork Assessments
- Amazon Inspector is an automated security assessment service which will allow you to improve the security and compliance of your applcations.
- **A network configuration analysis checks for any ports reachable from outside the VPC.**
- THE AGENT IS REQUIRED

### latency of static files currently shared EFS volume across all your app servers its to slow

- Utilise Amazone CloudFront to optimise your static content
- Use DynamoDB Global Tables to create a multi-master, multi-region data store for your application's back-end. 
- DynamoDB streams will propagate changes between the replicas so that users will have high performant and consistent app experience regardless of from where they access the site
- MULTI REGUION REPLICATION AND MULTI-MASTER WRITES = GLOBAL TABLE in DYNAMODB

## Importantly

Jake Armijo **|** Full Stack Software Engineer
</br>

Connect with me on [LinkedIn](https://www.linkedin.com/in/jake-armijo/)

</br>

Schedule a meeting with me on [Calendly](https://calendly.com/armijojake/meeting)
