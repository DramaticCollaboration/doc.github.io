---
title: Git Flow
description: Complete Git Flow guide for team collaboration. Explains branch structure, commit message conventions, and release and hotfix management step by step.
head:
  - - meta
    - name: keywords
      content: git flow, git flow guide, git branching strategy, feature branch, develop branch, release branch, hotfix branch, git commit message, git collaboration, git workflow
  - - meta
    - property: og:title
      content: Git Flow
  - - meta
    - property: og:description
      content: Complete Git Flow guide for team collaboration. Explains branch structure, commit message conventions, and release and hotfix management step by step.
  - - meta
    - property: og:image
      content: https://doc.empasy.com/images/favicon.png
  - - meta
    - property: og:url
      content: https://doc.empasy.com/en/agile/gitFlow
sort: 4000
---

# Git Flow Guide

## 1. What Is Git Flow?

- **A Git branching strategy designed for team collaboration**
- Provides structured management for feature development, bug fixes, and releases
- Benefits:

  - Minimizes confusion with dedicated, role-specific branches
  - Ensures a stable and predictable release process
  - Well-suited for team-based development workflows

---

## 2. Branch Types

Git Flow uses five primary branch types:

1. **main (master)**

- Holds stable, production-ready code deployed to live environments
- Always maintained in a deployable state

2. **develop**

- Integration branch for upcoming releases
- Central branch where all features and bug fixes are merged

3. **feature/**

- Branches for developing new features
- Branched from `develop` -> merged back into `develop` once complete
- Naming examples:

  - `feature/login-api`
  - `feature/ui-redesign`

4. **release/**

- Branches for preparing a production release
- Branched from `develop` -> QA/testing and release bug fixes -> merged into both `main` and `develop`
- Naming example:

  - `release/1.2.0`

5. **hotfix/**

- Branches for urgent bug fixes in production
- Branched from `main` -> patched -> merged into both `main` and `develop`
- Naming example:

  - `hotfix/1.2.1`

---

## 3. Git Flow Branch Workflow

```
main -----------●------------------●------------------->
                ↑                  ↑
                │                  │
       release/1.2.0        hotfix/1.2.1
                ↑
develop ----●---●---●---●---●---●---●----------------->
             ↑   ↑
             │   │
feature/login   feature/payment
```

---

## 4. Git Flow Step-by-Step Commands

### (1) Developing a New Feature

```bash
git checkout develop
git checkout -b feature/feature-name
# After making code changes
git add .
git commit -m "feat: add feature description"
git checkout develop
git merge --no-ff feature/feature-name
git branch -d feature/feature-name
```

### (2) Preparing a Release

```bash
git checkout develop
git checkout -b release/1.2.0
# QA and release bug fixes
git commit -m "fix: resolve release QA bug"
git checkout main
git merge --no-ff release/1.2.0
git tag -a 1.2.0 -m "Release 1.2.0"
git checkout develop
git merge --no-ff release/1.2.0
git branch -d release/1.2.0
```

### (3) Urgent Production Hotfix

```bash
git checkout main
git checkout -b hotfix/1.2.1
# Fix the bug
git commit -m "fix: resolve urgent production bug"
git checkout main
git merge --no-ff hotfix/1.2.1
git tag -a 1.2.1 -m "Hotfix 1.2.1"
git checkout develop
git merge --no-ff hotfix/1.2.1
git branch -d hotfix/1.2.1
```

---

## 5. Commit Message Convention (Recommended: Angular Style)

- `feat`: Add a new feature
- `fix`: Fix a bug
- `docs`: Documentation changes
- `style`: Code style changes (semicolons, formatting, etc.)
- `refactor`: Code refactoring (no behavioral change)
- `test`: Adding or updating tests
- `chore`: Build or tooling configuration changes

Examples:

```
feat(auth): implement login API
fix(ui): resolve button layout breakage on mobile screens
```

---

## 6. Git Flow Collaboration Checklist

Start every new feature on a `feature/` branch
Never commit directly to `develop`; always integrate via merge
Always manage deployments through a `release/` branch
Handle urgent production fixes immediately via a `hotfix/` branch
Use the `--no-ff` flag when merging to preserve branch history
Follow the team's commit message convention
