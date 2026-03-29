# AI Agent GitHub Issues & Workflow Guide

This guide dictates how AI developer agents operating on this repository must manage and track work using GitHub Issues and Milestones. Discipline in tracking work ensures transparency, organization, and proper milestone alignment.

---

## 1. Core Rule: No Work Without an Issue
Before beginning any code changes, feature development, or bug fixing, the agent **MUST** ensure an open GitHub Issue exists and is assigned to the current objective. 
- If an issue does not exist, the agent must **create it** before writing code.
- If multiple tasks are bundled into one prompt, break them down into separate, logical issues.

## 2. Issue Creation Protocol
When creating a new Issue (e.g., using `mcp_github-mcp-server_issue_write` with method `create`), adhere to this format:

- **Title:** Clear, concise, and action-oriented. Examples: 
  - *Feature: Implement OAuth2 user authentication*
  - *Bug: Fix navbar overlap on mobile viewport*
- **Body/Description:** Always include the following sections:
  1. **Context:** Why is this being done? What problem does it solve?
  2. **Acceptance Criteria:** A clear, bulleted checklist of conditions that must be met to consider this issue complete.
  3. **Technical Notes:** (Optional) Proposed architecture, files that need heavy modification, or external dependencies.
- **Labels:** Apply relevant tags (`bug`, `enhancement`, `documentation`, `frontend`, `backend`, etc.).
- **Milestone:** Ensure the issue is assigned to the currently active milestone to track project goals.

## 3. Work Tracking & Progress Updates
As work progresses, the AI agent is responsible for keeping the issue's state accurate:
- **Task Breakdown:** If a task proves more complex than initially thought, update the issue body to add a checklist, or branch it into sub-issues.
- **Status Comments:** When completing a major sub-task or ending a session, drop a comment on the issue summarizing what was done and what remains.
- **Blockers:** If a task requires user input or a dependency is broken, document it in an issue comment clearly stating what is blocking progress.

## 4. Pull Requests & Code Reviews
- Standard AI logic dictates that code must ideally be opened as a Pull Request if branching is supported. 
- The PR description must link back to the issue (e.g., `Resolves #<Issue_Number>`).
- If working directly on the main branch (when requested by the user), ensure commit messages prominently feature the issue number.

## 5. Verification and Closure
When the functionality is complete:
- **Verify:** The agent must cross-check the implemented work against the issue's **Acceptance Criteria**.
- **Close the Issue:** Only close the issue when the work is fully compiled, tested (if applicable), and pushed. Use `mcp_github-mcp-server_issue_write` (method `update`, state `closed`) and leave a final comment explaining the resolution.

---
**Note to AI:** Upon starting a new chat or receiving this guide, ALWAYS check the current repository's open issues (`mcp_github-mcp-server_list_issues`) to orient yourself to the current tasks and milestones before proceeding.
