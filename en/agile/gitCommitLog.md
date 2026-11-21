---
title: Commit Messages
description: "Complete guide to writing effective Git commit messages. Covers Conventional Commits types such as feat, fix, and refactor, subject and body guidelines, and practical examples."
head:
  - - meta
    - name: keywords
      content: git commit, git commit message, git commit rules, git commit convention, commit message guide, commit convention, git collaboration, git branching strategy, feat, fix, refactor
  - - meta
    - property: og:title
      content: Commit Messages
  - - meta
    - property: og:description
      content: git commit, git commit message, git commit rules, git commit convention, commit message guide, commit convention, git collaboration, git branching strategy, feat, fix, refactor
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/agile/gitCommitLog
sort: 5000
---

## Writing Git Commit Messages

## Summary (TL;DR)

- **Format**: `<type>(scope): <subject>`
- **Subject**: Imperative mood, **50 characters or fewer**, no trailing period
- **Body**: _What_ changed + **why** (when needed, wrap at ~72 characters)
- **Footer**: Issue references `Closes #123`; major breaking changes use `BREAKING CHANGE:`
- **Types (Conventional Commits)**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`
- **Principle**: One commit = one purpose — "The code shows what changed; the body explains why."

---

## Detailed Guide

## 1) Message Structure

```
<type>(optional:scope): <subject>

Body (optional) — explain what and why, wrapped at 72 characters
Use bullet points if helpful

Footer (optional) — issue links, breaking changes, co-authors, etc.
```

### Example

```
feat(auth): add Google social login

Support OAuth 2.0-based login and signup with Google accounts.
Provides an alternative onboarding path to improve low email signup conversion rates.

Closes #52
```

---

## 2) Subject Line Rules

- Start with an **imperative verb**: "Add", "Fix", "Refactor" so the **action** is clear.
- Keep it **within 50 characters**, with **no trailing period ( . )** and **no unnecessary filler words**.
- Keep the **Scope** narrow and explicit: `auth`, `api`, `signup`, `ci`, `deps`, etc.

**Good Examples**

- `fix(api): add duplicate email check on signup`
- `refactor(search): improve response time with new index strategy`
- `docs: add Docker usage instructions to installation guide`

**Bad Examples**

- `update stuff`
- `fix`
- `final commit`, `temp`, `WIP`

---

## 3) Body — _What + Why_

- Summarize **what** changed along with **why** it was needed (context, intent, alternatives considered).
- Avoid over-explaining "how" in detail, but document **key decisions and trade-offs**.
- For bug fixes, follow **Reproduction steps -> Root cause -> Resolution**.
- Wrap lines at **~72 characters** for readability in terminals and CLI tools.

**Body Example (Bug Fix)**

```
Prevent stale responses from overwriting newer state during concurrent
async validation by applying debouncing and request cancellation.

Reproduction: Rapid typing on a slow network causes UI state mismatch.
Root cause: Previous in-flight requests were not being canceled.
Resolution: Cancel prior requests with AbortController and apply a 300ms debounce.
```

---

## 4) Footer

- **Issue tracking**: `Closes #123` / `Fixes JIRA-456`
- **Breaking changes**: Start with `BREAKING CHANGE:` and clearly state **what breaks** and **how to migrate**
- **Co-authors**: `Co-authored-by: Name <email>`
- **References**: `Refs #789`, `See also: ...`

**Breaking Change Example**

```
BREAKING CHANGE: Add unique index(email) to the users table.
Existing duplicate records must be cleaned up using the migration script.
```

---

## 5) Conventional Commits Type Quick Reference

- `feat`: A **new feature** visible to users
- `fix`: A **bug fix**
- `docs`: Documentation or guide updates
- `style`: Formatting, whitespace, semicolons, etc. (**no logic change**)
- `refactor`: Code refactoring (same external behavior)
- `test`: Adding or updating tests
- `chore`: Build tooling, package maintenance, or miscellaneous tasks (minimal code impact)
- `build`: Build system or dependency changes
- `ci`: CI configuration or pipeline scripts

> Narrowing down to **only essential types** across the team improves consistency (e.g., `feat|fix|refactor|docs|test|chore`).

---

## 6) Contextual Examples

**Adding a Feature**

```
feat(search): add recommended keywords API

Expose server-side recommended keywords to improve search conversion.
Enabled only for A/B test group B and scheduled for evaluation after two weeks.

Closes #410
```

**Bug Fix**

```
fix(cart): prevent duplicate discount code application

A missing condition in discount priority calculation caused codes to be
applied twice in specific checkout scenarios.

Fixes #612
```

**Refactoring**

```
refactor(core): reduce module coupling via dependency injection

Replaced global singleton access with a DI container.
Introduced interfaces to improve testability and extensibility.
```

**Documentation**

```
docs(readme): clarify local development setup steps

Added Node version requirements and documentation for the .env sample file.
```

**Configuration / Dependencies**

```
chore(deps): upgrade lodash to 4.17.21 for security fix

Includes patch for GHSA-... vulnerability.
Refs #702
```

---

## 7) Team Operating Tips

- Agree on a **consistent language** (e.g., English) and **tense** (imperative mood).
- **One commit = one purpose** (easier code review and clean reverts). Keep changes small and commit often.
- Match **PR title = primary commit subject** to improve changelog quality.
- **Issue–Branch–Commit linking convention**: `feature/JIRA-123-auth-social-login` -> commit `feat(auth): ... (Closes JIRA-123)`

---

## 8) Anti-Patterns to Avoid

- Excessive `WIP` commits or **meaningless subjects** like "update" or "fix"
- **Mixing unrelated changes** in a single commit (formatting + refactoring + feature)
- Pasting **raw code dumps or long logs** into commit messages
- **Omitting the body** and losing context (especially for bug fixes)

---

## 9) Automation (Optional)

- **Commit Template** (local): `git config --global commit.template ~/.gitmessage.txt`

```txt
# <type>(scope): <subject>
#
# Body: what + why (wrap ~72)
#
# Footer: Closes #, BREAKING CHANGE:, Co-authored-by:
```

- Enforce rules with **commitlint + husky** (e.g., Node repositories)
  Example `package.json`:

```json
{
  "devDependencies": {
    "@commitlint/cli": "^19",
    "@commitlint/config-conventional": "^19",
    "husky": "^9"
  },
  "commitlint": { "extends": ["@commitlint/config-conventional"] },
  "scripts": {
    "prepare": "husky install"
  }
}
```

Setup:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```
