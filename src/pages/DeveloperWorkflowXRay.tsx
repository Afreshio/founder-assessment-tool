import React from 'react';
import { LandingNav } from '../components/LandingNav';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';

const DeveloperWorkflowXRay: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-50 via-white to-charcoal-50/30">
      <LandingNav />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Developer Workflow X-Ray
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Make the invisible visible. Map your end-to-end developer workflow, expose friction, and translate it into clear DevEx priorities for the CEO, CTO, and engineering leaders.
            </p>
          </div>

          {/* Section 1: Why this matters */}
          <Section id="why-this-matters" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              If you cannot see the workflow, you cannot fix the friction
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Most developer pain hides inside the workflow, not in individual people. This page guides your team through a structured inventory of tools, stages, and friction points so you can see where work really slows down. Once you know where the bottlenecks are and which Developer Experience (DevEx) dimensions they hit, you can make focused, high leverage changes rather than vague "productivity" initiatives.
              </p>
            </div>
          </Section>

          {/* Section 2: Step 1 – Inventory the workflow and tools */}
          <Section id="step-1" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Step 1: Map the stages and tools
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-4">
                Start by mapping the real path from idea to production in your organization. Use stages that match how your teams actually work. A typical backbone looks like:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Planning</li>
                <li>Coding</li>
                <li>Reviewing</li>
                <li>Building</li>
                <li>Testing</li>
                <li>Deployment</li>
                <li>Maintenance</li>
              </ul>
              <p className="mb-4">
                For each stage, list:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>The primary tools and technologies</li>
                <li>Any notable quirks or issues</li>
              </ul>
            </div>

            <Card className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tools & Technologies
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Notes on current reality
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Planning
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Google Docs, Jira, Confluence
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Planning not uniform across org, no dates or versioning
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Coding
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      VS Code, GitHub, Copilot or other AI assistants
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Confusion on branching, mixed AI adoption across teams
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Reviewing
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      GitHub PR, linters, security scanners
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Automated tools not enforced, slow or inconsistent reviews
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Building
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Jenkins, CircleCI, internal build tools
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Many teams rolled their own CI, build times vary widely
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Testing
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Jest, Cypress, internal test frameworks
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Flaky tests, false failures are "normal"
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Deployment
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Docker, Kubernetes, internal release tools
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Manual discussions to approve deploy, inconsistent processes
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Maintenance
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Datadog, PagerDuty, incident tracker
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Unclear what is monitored and what is not
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
            <p className="mt-4 text-sm text-gray-600">
              You can hard code a simple CMS block with these columns and let teams export to CSV or Notion. The content mirrors the first worksheet in your Frictionless Workbook.
            </p>
          </Section>

          {/* Section 3: Step 2 – Capture friction points */}
          <Section id="step-2" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Step 2: Log friction where it actually shows up
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-4">
                Next, capture where developers feel frustration, delay, or confusion inside each stage. You are trying to build a heat map of pain, not a perfect KPI dashboard.
              </p>
              <p className="mb-4">
                Use five simple fields for each friction point:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Stage</li>
                <li>Example of friction</li>
                <li>How often it happens (daily, weekly, monthly)</li>
                <li>Pain level (1 to 5)</li>
                <li>Who it affects</li>
              </ul>
            </div>

            <Card className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Friction point example
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      How often
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pain (1–5)
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Who this affects
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Planning
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Requirements change mid sprint
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Weekly
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      3
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Developers in product teams
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Reviewing
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Long wait times for code reviews
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Daily
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      2
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Most developers
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Coding
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Security and compliance overhead and AI tools confusion
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Daily
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      5 (sec), 3 (AI)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      All devs, newer AI tool adopters
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Building
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Slow builds that take more than 20 minutes
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Daily
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      4
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Most developers, except team X
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Testing
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Flaky tests causing false failures
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Daily
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      5
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      All developers
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Deployment
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Manual approval steps and ad hoc discussions
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Weekly
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      5
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Developers in specific orgs
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Maintenance
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Limited observability for incidents
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Daily
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      4
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      SREs and some developers
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
            <p className="mt-4 text-sm text-gray-600">
              On the page, you can:
            </p>
            <ul className="mt-2 list-disc pl-6 text-sm text-gray-600">
              <li>Provide this as a downloadable worksheet and</li>
              <li>Encourage teams to do a 60 minute session with a staff engineer and one senior IC from each major area.</li>
            </ul>
          </Section>

          {/* Section 4: Step 3 – Map friction to DevEx dimensions */}
          <Section id="step-3" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Step 3: Connect pain to DevEx dimensions
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-4">
                For each friction point, identify which DevEx dimensions it touches. Start with three core dimensions:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>
                  <strong>Flow state</strong> — Is this breaking concentration or forcing frequent context switches?
                </li>
                <li>
                  <strong>Feedback loops</strong> — Is this slowing down how fast developers see the result of their work?
                </li>
                <li>
                  <strong>Cognitive load</strong> — Is this making the system harder to understand, remember, or navigate?
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Examples:</h3>
              <div className="space-y-4">
                <Card>
                  <h4 className="font-semibold text-gray-900 mb-2">Flow state</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Planning: constant interruptions and mid sprint requirement changes</li>
                    <li>Reviewing: urgent, ad hoc review requests that break deep work</li>
                  </ul>
                </Card>
                <Card>
                  <h4 className="font-semibold text-gray-900 mb-2">Feedback loops</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Testing: slow or flaky test runs</li>
                    <li>Building: 20 minute builds that force context switches</li>
                  </ul>
                </Card>
                <Card>
                  <h4 className="font-semibold text-gray-900 mb-2">Cognitive load</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Coding: unclear documentation and complex codebase</li>
                    <li>Deployment: many manual steps that rely on tribal knowledge</li>
                  </ul>
                </Card>
              </div>
            </div>

            <Card className="overflow-x-auto">
              <p className="mb-4 text-sm text-gray-600">
                On the page, offer a simple matrix or tags:
              </p>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Friction ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Flow state
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Feedback loops
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cognitive load
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      F-01
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      ✅
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      ✅
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      F-02
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      ✅
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
            <p className="mt-4 text-sm text-gray-600">
              You can keep it lightweight. The goal is for leadership to see patterns, not to create another bureaucratic checklist.
            </p>
          </Section>

          {/* Section 5: Step 4 – Visualize the workflow */}
          <Section id="step-4" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Step 4: Visualize the workflow, tools, and friction
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-4">
                Once the data is in place, visualize it so non engineers can see where the system is working against developers.
              </p>
              <p className="mb-4">
                Ideas for the page or a linked visualization:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-4">
                <li>
                  <strong>Horizontal workflow lane</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Columns: Planning, Coding, Reviewing, Building, Testing, Deployment, Maintenance</li>
                    <li>Inside each column:
                      <ul className="list-disc pl-6">
                        <li>Top: key tools</li>
                        <li>Middle: friction points (colored by pain level)</li>
                        <li>Bottom: DevEx icons for Flow, Feedback, Cognitive Load</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>User story map style view</strong>
                  <p className="mt-2">The Frictionless Workbook suggests a story map style visualization. Horizontally, show the main activities in order. Vertically, stack friction, tooling, and which teams are affected.</p>
                </li>
                <li>
                  <strong>Highlight hot spots</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Use color or badges for high pain (4–5) and daily frequency</li>
                    <li>Show a count of friction points per stage so execs see, for example, that "Testing" and "Deployment" are currently the worst experiences</li>
                  </ul>
                </li>
              </ol>
              <p className="mb-4 font-semibold text-gray-900">
                You can keep the visual opinionated:
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                "If you are going to fix only 3 things in the next quarter, start with the red cells in Testing and Deployment."
              </blockquote>
            </div>
          </Section>

          {/* Section 6: Call to action */}
          <Section id="call-to-action" className="mb-16">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Turn findings into a DevEx roadmap
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  End the page with a clear call to action for the CEO, CTO, and VP Engineering:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Align on the top 3 workflow bottlenecks to fix</li>
                  <li>Commit to one experiment per bottleneck in the next quarter</li>
                  <li>Assign an owner and a measurable outcome for each experiment</li>
                  <li>Schedule a review to revisit the workflow map and see if the friction has actually gone down</li>
                </ul>
              </div>
            </Card>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default DeveloperWorkflowXRay;

