import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';

export class AspectTagIssueStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'AspectTagIssueQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    cdk.Tag.add(queue, "Test2", "Value2");

    const topic = new sns.Topic(this, 'AspectTagIssueTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
