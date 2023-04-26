---
id: 'application-load-balanced-fargate-service-aws-cdk-ecs-pattern'
title: 'Application LoadBalanced Fargate Service Pattern for ECS using the AWS CDK'
date: '2023-4-24'
category: "Guidance, Advice, Technical, AWS CDK, Python, Fargate, CDK"
template: "blog-post"
tags: 'AWS, Scalable, Python, Web Development, CDK, ALB, Fargate, ECS, ECS Patterns'
---

# CDK Patterns for ECS

## AWS CDK's ApplicationLoadBalancedFargateService

AWS CDK (Cloud Development Kit) is a framework for defining cloud infrastructure in code. It allows developers to use familiar programming languages, such as TypeScript or Python, to define infrastructure as code. One of the constructs provided by AWS CDK is the **`ApplicationLoadBalancedFargateService`**, which simplifies the deployment of a Fargate service behind an Application Load Balancer.

## System Design

Before we dive into how to use the **`ApplicationLoadBalancedFargateService`** ecs pattern, let's first discuss the system design that it enables.

At a high level, the **`ApplicationLoadBalancedFargateService`** allows you to create an Amazon ECS (Elastic Container Service) Fargate service that runs a set of containers and is fronted by an Application Load Balancer. The Application Load Balancer distributes incoming traffic across the containers running in the Fargate service, based on rules that you define.

The Fargate service is part of a larger architecture that might include other AWS services, such as Amazon RDS (Relational Database Service) for database storage or Amazon S3 for object storage. The Application Load Balancer provides a central entry point for incoming traffic and routes that traffic to the appropriate services running in the Fargate service.

## ECS Fargate

Let's take a quick look at ECS Fargate. ECS Fargate is a serverless compute engine for containers that allows you to run Docker containers without having to manage the underlying infrastructure. With Fargate, you only need to worry about the container itself and not the instances that it runs on. This makes it easier to manage, scale, and deploy containerized applications.

Now, let's see how to use the **`ApplicationLoadBalancedFargateService`** construct to deploy an ECS Fargate service behind an Application Load Balancer.

Using the **`ApplicationLoadBalancedFargateService`**

To use the **`ApplicationLoadBalancedFargateService`** construct, you will need to have an AWS account and have the AWS CLI and AWS CDK installed. You will also need to have a Docker image for your application, which can be stored in a container registry like Amazon ECR (Elastic Container Registry).

## Here's an example of how to use the **`ApplicationLoadBalancedFargateService`** in Python

1. Installation:
    Before you begin, make sure that you have the following installed on your machine:
    - Python 3.7 or later
    - npm
    - AWS CLI

2. Install the AWS CDK by running the following command:

  ```shell
    npm install -g aws-cdk
  ```

3. Creating a new CDK app:

  Create a new directory for your CDK app and navigate into it. Then, run the following command to create a new Python CDK app:

  ```shell
    cdk init --language python
  ```

This will create a new CDK app with the necessary boilerplate files.

4. Defining the stack:

Next, we need to define the stack that will create our ECS service. Open the app.py file and define the following stack:

```python
  from aws_cdk import core
  from aws_cdk import aws_ec2 as ec2
  from aws_cdk import aws_ecs as ecs
  from aws_cdk import aws_ecs_patterns as ecs_patterns

  class MyStack(core.Stack):
      def __init__(self, scope: core.Construct, id: str, **kwargs) -> None:
          super().__init__(scope, id, **kwargs)

          vpc = ec2.Vpc(self, "MyVpc", max_azs=2)

          cluster = ecs.Cluster(self, "MyCluster", vpc=vpc)

          task_definition = ecs.FargateTaskDefinition(self, "MyTaskDefinition")
          container = task_definition.add_container(
              "MyContainer",
              image=ecs.ContainerImage.from_registry("nginx")
          )

          service = ecs_patterns.ApplicationLoadBalancedFargateService(
              self,
              "MyService",
              cluster=cluster,
              task_definition=task_definition,
              desired_count=2,
              listener_port=80,
              public_load_balancer=True
          )

```

In this example, we create a new VPC with two availability zones, an ECS cluster, a task definition with a single container running the nginx image, and an Application Load Balancer with an ECS Fargate service running two instances of our task.

5. Deploying the stack:
  To deploy our stack, we need to build and synthesize our CDK app, and then deploy the resulting CloudFormation template using the AWS CLI.
  First, build and synthesize the app by running the following commands:

  ```shell
    cdk synth
  ```

6. Now that we have defined our infrastructure, we can deploy it to AWS by running the following command:

  ```shell
    cdk deploy
  ```

This will package and deploy our application to AWS. Once the deployment is complete, we can verify that our application is up and running by navigating to the URL of the load balancer.

## Conclusion

In this article, we have seen how to use the AWS CDK to define and deploy an Application Load Balanced Fargate service using Python. We have also discussed the basic architecture of the Fargate service and how it fits into a typical ECS pattern. The AWS CDK is a powerful tool for defining and deploying AWS infrastructure and allows us to use the same programming language and tools that we use to build our applications.

[The Documentation](https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-ecs-patterns.ApplicationLoadBalancedFargateService.html)
