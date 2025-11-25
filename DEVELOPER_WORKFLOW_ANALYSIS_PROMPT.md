# Developer Workflow Analysis Prompt

You are an experienced staff engineer and Developer Experience (DevEx) architect.

I am going to paste two sets of data from our developer workflow:

1. A table of workflow stages with tools and notes
2. A table of friction points with fields: stage, friction example, frequency, pain level (1 to 5), and who is affected

Your job is to:

## 1. Normalize the data

- Clean up stage names so they are consistent (for example Planning, Coding, Reviewing, Building, Testing, Deployment, Maintenance).
- Group similar friction points together into themes (for example "slow feedback from tests", "manual deployment approvals").

## 2. Map friction points to DevEx dimensions

For each friction point or theme, mark which DevEx dimensions it impacts:

- **Flow state**: anything that breaks concentration or causes context switching
- **Feedback loops**: anything that slows how fast developers can see the result of their work
- **Cognitive load**: anything that makes the system harder to understand or remember

It is fine if a single friction point touches multiple dimensions.

## 3. Prioritize

- Combine frequency and pain level into a simple priority score.
- Highlight the top 5 to 10 friction themes that are highest leverage to address first.
- Explicitly call out where friction is concentrated by stage (for example, "Most high-pain items cluster in Testing and Deployment").

## 4. Recommend interventions

For each top friction theme, recommend 2 or 3 concrete interventions.

Keep interventions pragmatic: changes to process, automation, guardrails, or tooling.

For each intervention, specify:

- Expected impact on Flow state / Feedback loops / Cognitive load
- Who should own it (for example, Platform team, Staff engineer in X team, VP Eng).

## 5. Produce a visual workflow map in Markdown

Generate a concise workflow visualization using Mermaid that we can paste into our docs.

The diagram should:

- Show the main workflow stages from left to right.
- Attach the number of high priority friction themes to each stage.
- Use node labels to show stage name and a short description of the main pain (for example "Testing: flaky tests, slow feedback, high pain").
- Use the flowchart LR style.

## Important constraints:

- Make your output readable by executives. Summarize in plain language before showing any tables or Mermaid.
- Start with a one paragraph narrative that explains where the worst friction is and what it is costing us in terms of speed, quality, and morale.
- Then include:

  1. A summary table of the top friction themes with DevEx dimensions
  2. A list of recommended interventions
  3. The Mermaid workflow diagram in a fenced code block

