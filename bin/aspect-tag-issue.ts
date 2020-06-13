#!/usr/bin/env node
import * as cdk from "@aws-cdk/core"
import { AspectTagIssueStack } from "../lib/aspect-tag-issue-stack"

const app = new cdk.App()
new AspectTagIssueStack(app, "AspectTagIssueStack")

app.node.applyAspect({
  visit(construct: cdk.IConstruct) {
    if (cdk.Construct.isConstruct(construct)) {
      const stack = construct.node.scopes.find((it): it is cdk.Stack =>
        cdk.Stack.isStack(it),
      )
      if (stack != null) {
        cdk.Tag.add(construct, "Test", "Value")
      }
    }
  },
})
