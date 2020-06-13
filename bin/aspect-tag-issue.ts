#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AspectTagIssueStack } from '../lib/aspect-tag-issue-stack';

const app = new cdk.App();
new AspectTagIssueStack(app, 'AspectTagIssueStack');
