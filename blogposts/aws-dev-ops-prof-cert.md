---
id: 'aws-dev-ops-prof-cert'
title: 'AWS DevOps Professional Cheat Sheet'
date: '2022-12-17'
category: "Guidance, Advice"
template: "blog-post"
tags: 'AWS, Exam, DEV OPS, AWS Certified, AWS Professional, Cheat Sheet, AWS Certified DevOps Engineer - Professional'
---
## [AWS DEV OPS PROFESSIONAL](https://aws.amazon.com/certification/certified-devops-engineer-professional/) CHEAT SHEET

____________________________________________________________

- **Domain 1: SDLC Automation (16 questions)**
- **Domain 2: Configuration Management & Infrastructure as Code (16 questions)**
- **Domain 3: Monitoring and Logging (11 questions)**
- **Domain 4: Policies and Standards Automation (9 questions)**
- **Domain 5: Incident and Event Response (13 questions)**
- **Domain 6: High Availability, Fault Tolerance, & DR (10 questions)**

</br>

### [CodeDeploy](https://aws.amazon.com/codedeploy/)

#### blue/green is past but want to change to run one set of servers and to update everything at same time

- Edit CD application deployment group and change the deployment type from [blue/green](https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/bluegreen-deployments.html) to in-place
- you are able to edit the application deployment group in [CodeDeploy](https://aws.amazon.com/codedeploy/), you do not have to create a new one.

#### AWS_CODEBUILD_MAX_MEM_ALLOC defined in multiple parts

- value in **start build operation** call takes HIGHEST precedence
- value in the **build project definition**
- value in the **build spec declaration** takes lowest precedence
- DO NOT SET ENV VAR with 'CODEBUILD_'

### [CloudWatch](https://aws.amazon.com/cloudwatch/)

- With [CloudTrail](https://aws.amazon.com/cloudtrail/) enabled create CW Event rule to track AWS API call via [CloudTrail](https://aws.amazon.com/cloudtrail/)
- use [SNS](https://aws.amazon.com/sns/) as a target for notification
- create a rule that triggers on an action by an AWS service that does not emit events, you can base the rule on API calls
- [Dynamo Streams](https://docs.aws.amazon.com/amazon[DynamoDB](https://aws.amazon.com/dynamodb/)/latest/developerguide/Streams.html) captures information but do not capture DeleteTable API calls, they only capture item level events

#### Resolving the audit deficiency requires the creation of a centralized log monitoring capability for the AWS-based apps and infrastructure, and for certain on-premises systems that they interface with

- [Elasticsearch](https://aws.amazon.com/what-is/elasticsearch/) is a fully managed service that lets you collect and analyze logs metrics, giving you a comprehensive view into your apps and infrastructure
- CloudWatch collects via [CloudWatch Agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-[EC2](https://aws.amazon.com/ec2/)-Instance.html):
  - API events from [CloudTrail](https://aws.amazon.com/cloudtrail/)
  - networking events from [VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html)
  - app & system logs from [EC2](https://aws.amazon.com/ec2/) instances
- Using a single [CloudWatch log group](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html) ensures that system logs share the same retention, monitoring, and access control settings.
- [Lambda](https://aws.amazon.com/lambda/) in each account can move log data from CW into [Elasticsearch](https://aws.amazon.com/what-is/elasticsearch/) for indexing
- Visualization with [Kibana](https://www.elastic.co/kibana/)
- CloudWatch log streams are a sequences of events from the same source, whereas a log group is a collection of log streams.
- Logstash works well for collecting logs, but is usually paired with [Elasticsearch](https://aws.amazon.com/what-is/elasticsearch/) for log monitoring and analysis.
- AWS System Manager agents send status and execution info back to Systems Manager but NOT THE APPS LOGS, which the CW Logs agents are capable of sending.

#### want to monitor AWS resources, on premises resources, apps and services

- CW console is a suitable service for selecting metrics and creating graphs
- CW logs will allow you to log both AWS and on premises resources
- CW Alarms will be suitable for alerts and notifications

### CloudFormation

#### Best Practices

- separate stacks into individual, separate logical components with dependencies on each other
- best way to link is with Exports and Imports
- each CF template to be separate file

#### upgrade database

- major update - advances both minor and major - can take longer - compatibility issue during & after possible
- minor update - keeps the major version the same while advance the minor
- SourceDBInstanceIdentifier in CF template for a RDS Read Replica
- rolling upgrade with read replicas

#### template creating VPC and a subnet forEach AZ w/in Region the Stack is created. Requires Region to be passed in stack as a parameter. Automate with intrinsic

- Mappings Section - list each AZ in each Region
- Resources use !Ref "AWS::Region" to return the Region
- Fn::GetAZs to return a list of ALL AZs
- FN:Select to choose each AZ from the list

### CodePipeline

- two versions of code require 2 pipelines
- master to one production to another

#### GitHub Errors?

- CP uses OAuth tokens to integrate with GitHub you might have revoked permissions on the Oath token for CP
- The number of OAuth tokens is limited and if CP reaches that limit older tokens will stop working and actions in pipeline that rely upon that token will fail.
- Try to manually configure one OAuth token as a personal access token and then configure all pipeline in your AWS account to use that token

### CodeCommit

- create IAM policy with required permissions and attach it to a  ```developers``` group

#### new CC repo all but 1 can connect via SSh

- CC requires [KMS](https://aws.amazon.com/kms/). a policy might be attached to the already existing IAM user that DENIES KMS actions required
- For a new IAM user attach AWSCodeCommitFullAccess or another managed policy for CC access
- user might have prev configured his local computer to use credential helper for CC. if so EDIT the .GITCONFIG file to remove the credential helper info from the file before using git credentials

#### [auto building PR's with a testing status badge](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-build-badges.html)

- CW Events rule on POST/PUT to PR's with a target set to CB
- 2nd rule for success or fail of CB build it's target would be a [Lambda](https://aws.amazon.com/lambda/) to update the PR

#### CICD pipeline for DR - Docker

- use CB to acquire [ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html) credentials using the CLI helpers
- build the image and push it into ECR
- start another CD stage -> into [ECS](https://aws.amazon.com/ecs/)
- CW Events does NOT support CodeDeploy as a target there CodeDeploy must be invoked by CP

#### compile release notes from CC

- Setup CW Event rule to match CodeCommit repository events 'CodeCommit Repository State Change'
- commit must be tagged for easy future reference
- look for 'referenceCreated' events with a 'tag' referenceType that are created when a production release is tagged after a merge to master
- [Lambda](https://aws.amazon.com/lambda/) func use the CC API to retrieve that release commit message and store it in a static website hosting enabled S3 bucket

### [CodeBuild](https://aws.amazon.com/codebuild/)

#### RDS test DB is isolated on private subnet. Want to run at night

- [Amazon](https://aws.amazon.com/certification/certified-devops-engineer-professional/) VPC access in your CB project needs to be enabled
- Specify your VPC ID, subnets, and security groups in your build project
- set up CW Events to start pipeline on schedule
- ```aws events put-rule --schedule-expression 'cron(10 3 ? *MON-FRI*)' --name IntegrationTests```
- CB DOES NOT SUPPORT assigning elastic IP addresses to the network interfaces that it creates, and auto-assigning a public IP address is not supported by [EC2](https://aws.amazon.com/ec2/) for any network interfaces created outside [EC2](https://aws.amazon.com/ec2/) instance launches

### [AWS Config](https://aws.amazon.com/config/)

- _AWS Config auditing compatibility provided with a timeline dashboard with compliance over time._

#### alerts of EBS NOT encrypted

- Config custom managed rule checking for [EBS volume encryption](https://docs.aws.amazon.com/config/latest/developerguide/encrypted-volumes.html).
- CW Event rule alerts
- _[SNS](https://aws.amazon.com/sns/) topics when directly integrated with Config can only be used to stream all the notifications and configuration changes and **NOT** selectively for a given rule_

### [StepFunctions](https://aws.amazon.com/step-functions/)

#### daily EBS backup workflow

- StepFunction state machine with [Lambda](https://aws.amazon.com/lambda/) and CW Events is a solution
- StepFunction can coordinate the logic to automate the a snapshot flow

#### [golden ami](https://aws.amazon.com/blogs/awsmarketplace/announcing-the-golden-ami-pipeline/) retrieve and inspect with AWS Inspector

- using [CW events schedule](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/Create-CloudWatch-Events-Scheduled-Rule.html) a StepFunction which will launch a single [EC2](https://aws.amazon.com/ec2/) instance from the AMI & tag it
- SF kicks off AMI assessment template using AWS Inspector and the created tag.
- cost effective to test on SINGLE [EC2](https://aws.amazon.com/ec2/) instance - run assessment then terminate

### [DynamoDB](https://aws.amazon.com/dynamodb/) & [Lambda](https://aws.amazon.com/lambda/) & [EC2](https://aws.amazon.com/ec2/)

#### send logs before termination

- Lifecycle hooks = custom actions by pausing instances as an [ASG](https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html) launches or terminates them.
- while is **WAIT** state you can connect and download logs or other data
- termination hook for [ASG](https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html) & create CW Event rule target -> [Lambda](https://aws.amazon.com/lambda/) which invokes SSM Run Cmd to send log files from [EC2](https://aws.amazon.com/ec2/) to S3
- [DynamoDB](https://aws.amazon.com/dynamodb/) table to compile metadata index -> primary key = instance_id & sort key = datetime
- S3 event integrate w/ [Lambda](https://aws.amazon.com/lambda/) ```PUT``` -> triggers write to [DynamoDB](https://aws.amazon.com/dynamodb/) table

#### streams [Lambda](https://aws.amazon.com/lambda/) throttle

- [fan-out pattern](https://en.wikipedia.org/wiki/Fan-out_(software)) with [Lambda](https://aws.amazon.com/lambda/) and [SQS](https://aws.amazon.com/sqs/)/[SNS](https://aws.amazon.com/sns/)

### [ECS](https://aws.amazon.com/ecs/)

#### send logs om a container on [ECS](https://aws.amazon.com/ecs/)

- [awslogs driver](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html) writes to CW logs natively
- the [EC2](https://aws.amazon.com/ec2/) should have proper IAM role to write to CWL
- require ```logs:CreateLogStream``` and ```logs:PutLogEvents``` permission on the IAM role

### AMIs ?

#### security hardened daily check for vulnerabilities

- CWE on daily schedule target = StepFunction
- SF -> [EC2](https://aws.amazon.com/ec2/) instance from AMI

### [Health Service](https://docs.aws.amazon.com/health/index.html)

#### [AWS_RISK_CREDENTIALS_EXPOSED](https://github.com/aws/aws-health-tools/blob/master/automated-actions/AWS_RISK_CREDENTIALS_EXPOSED/README.md)

- CW Event checking -> SF workflow to issue API calls to IAM, [CloudTrail](https://aws.amazon.com/cloudtrail/), and [SNS](https://aws.amazon.com/sns/) (for alert)
- Personal Health Dashboard service
- if way to react to event will have retries and you want full audit trail of each workflow SF > [Lambda](https://aws.amazon.com/lambda/)

### [SSM](https://docs.aws.amazon.com/systems-manager/index.html)

#### list of install software packages

- _SSM Agent can be installed and configured on [EC2](https://aws.amazon.com/ec2/) instance, on prem, or a VM._
- makes it possible for System Manager to update, manage, and configure these resources
- SSM Inventory collects metadata from managed instances - data can be stored
- Create CW Event rule yo trigger a [Lambda](https://aws.amazon.com/lambda/) func on hourly basis. This can be set to do a comparison of the instances that share running in [EC2](https://aws.amazon.com/ec2/) and those tracked by SSM

- An [SSM automation](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html) can not contain complex logic to handle failures, although it would provide an execution history.
- An [SSM automation](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html) documents defines the actions that Systems Manager performs on your managed instances and other AWS resources when an automation execution runs.
- A document contains one or more steps that run in sequential order.
- Each ste[ is built around a single action. The output of one step can be used as input in a later step
- The process of running these actions and their steps is called the automation workflow.

### [ElasticBeanstalk](https://aws.amazon.com/elasticbeanstalk/)

#### [container_commands](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customize-containers-ec2.html#:~:text=Container-,commands,-You%20can%20use)

- ```container_commands``` key to execute commands that affect your application source code
- these run after the app and web server have been set up and the app version archive has been extracted
- this is BEFORE the app is deployed
- ```leader_only``` to only run cmd when a test evaluates to true
- ```commands``` do not support leader_only attribute there use ```container_commands```

- nginx comes default with Python in EB
- Java can be deployed with Java Option, and the Java parameters can be specified in the 'Environment properties' section

#### blue/green with .NET/SQLServer/Github

- Create an [MSBuild container image](https://aws.amazon.com/blogs/devops/building-windows-containers-with-aws-codepipeline-and-custom-actions/) with required tools for compiling .NET apps and push it to ECR
- Configure AWS Code Pipeline to fetch the latest GitHub code and schema update script
- Have CP trigger AWS CodeBuild to use the [MSBuild container image](https://aws.amazon.com/blogs/devops/building-windows-containers-with-aws-codepipeline-and-custom-actions/) from ECR to compile the source code
- Configure CB to then construct the .NET app
- Also have CB create an executable to run the schema update script
- CP to trigger ACD to deploy .NET app to EB
- CB invoke a PowerShell script to run the schema update executable

### [Trusted Advisor](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/)

- checks infrastructure across all regions and provides summary of the results

#### check for low cpu utilization

- check the low-utilized [EC2](https://aws.amazon.com/ec2/) instances are on
- create CW event that tracks the events created by TA use [Lambda](https://aws.amazon.com/lambda/) as a target
- the [Lambda](https://aws.amazon.com/lambda/) should trigger SSM Automation document with manual approval step
- Upon approval, the SSM document proceeds with instance termination

### [Jenkins](https://aws.amazon.com/blogs/devops/setting-up-a-ci-cd-pipeline-by-integrating-jenkins-with-aws-codebuild-and-aws-codedeploy/)

#### Jenkins as build provider in CI/CD

- CodePipeline plugin for Jenkins

### [AWS SAM](https://aws.amazon.com/serverless/sam/)

#### gradually shift customer traffic to the updated [Lambda](https://aws.amazon.com/lambda/) in increments of 10% with 10 minutes between each increment until you are satisfied that it's working as expected

- Define a DeploymentPreference of type ['Linear10PercentEvery10Minutes'](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/automating-updates-to-serverless-apps.html) in your AWS SAM template
- Configure a post traffic hook [Lambda](https://aws.amazon.com/lambda/) function to run a sanity test that is invoked by CodeDeploy after traffic shifting completes

### [EC2](https://aws.amazon.com/ec2/)

#### High Performance Computing (HPC) app on small number of [EC2](https://aws.amazon.com/ec2/) placed in single AZ

- Deploy the [EC2](https://aws.amazon.com/ec2/) servers in a Cluster Placement Group
- Cluster Placement Groups are recommended for application that benefit from low network latency, high network throughput, or both
- also when the majority of the network traffic is between the instances in the group

### [Server Migration Service](https://aws.amazon.com/server-migration-service/)

- migrate your servers to cloud?
- current servers are built and configured automatically using Chef
- Server Migration Service will bring your existing Chef managed machines into [EC2](https://aws.amazon.com/ec2/) and to manage them with Chef the same way you have been on your in-house system

### [Kinesis Data Streams](https://aws.amazon.com/kinesis/data-streams/)

#### Kinesis Data Streams - throughput lower then expected

- Check the GetShardIterator, CreateStream, and DescribeStream **Service Limits**
- Use a Small Producer with the [Kinesis Producer Library](https://docs.aws.amazon.com/streams/latest/dev/developing-producers-with-kpl.html), but using the PutRecords operation
- Develop code using the Z[Kinesis Producer Library](https://docs.aws.amazon.com/streams/latest/dev/developing-producers-with-kpl.html) to put data onto the streams

#### slower than expected reading from the shards, but you are also seeing records being skipped - WHAT COULD CAUSE A SLOW DOWN IN READING FROM A SHARD

- for slow reading - it could be due to the maxRecords value being set too low
- code logic which is calling processRecords being inefficient and causing high CPU usage or blocking
- USUALLY PROCESS RECORDS CALLS HAVING BE UN HANDLED EXCEPTIONS

#### procession incoming streaming data. [GetRecords.IteratorAgeMilliseconds](https://aws.amazon.com/premiumsupport/knowledge-center/kinesis-data-streams-iteratorage-metric/) metric increases. How TO REDUCE THE TIME LAG IN THE STREAM

- Increase parallelism by adding more shards per stream
- Add more [EC2](https://aws.amazon.com/ec2/) KCL consumers to allow each to process less shards per instance
- An increased GetRecords.IteratorAgeMilliseconds metric means that either the KCL consumer cannot keep up processing the data from the Kinesis stream or there aren't enough shards in the stream

### [AWS CloudSearch](https://aws.amazon.com/cloudsearch/)

#### search contents of documents in [S3](https://aws.amazon.com/s3/)

- Implement Amazon CloudSearch
- [Setup Access policies](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html)
- [Configure your index](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html)
- [Create a search domain](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html)

### [Amazon Inspector](https://aws.amazon.com/inspector/)

#### weekly scan of ports reachable from outside the VPC

- Configure Network Assessments
- Amazon Inspector is an automated security assessment service which will allow you to improve the security and compliance of your applications.
- **A network configuration analysis checks for any ports reachable from outside the VPC.**
- THE AGENT IS REQUIRED

#### latency of static files currently shared EFS volume across all your app servers its to slow

- Utilize Amazon CloudFront to optimize your static content
- Use [DynamoDB](https://aws.amazon.com/dynamodb/) Global Tables to create a multi-master, multi-region data store for your application's back-end.
- [DynamoDB](https://aws.amazon.com/dynamodb/) streams will propagate changes between the replicas so that users will have high performant and consistent app experience regardless of from where they access the site
- MULTI REGION REPLICATION AND MULTI-MASTER WRITES = GLOBAL TABLE in [DynamoDB](https://aws.amazon.com/dynamodb/)

#### ACKNOWLEDGEMENTS

[AWS DEV OPS Cheat Sheet - medium article smadikanti](https://smadikanti.medium.com/aws-devops-professional-cheat-sheet-2cf77f76ace0)

</br>

[Jake Armijo](https://www.jakearmijo.com/) **|** Full Stack Software Engineer
</br>

Connect with me on [LinkedIn](https://www.linkedin.com/in/jake-armijo/)

</br>

Schedule a meeting with me on [Calendly](https://calendly.com/armijojake/meeting)
