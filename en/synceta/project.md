---
title: "Project and Permission (RBAC) Management"
description: "SyncETA project management guide for isolating test assets, inviting team members, and assigning role-based permissions."
head:
  - - meta
    - name: keywords
      content: SyncETA, Project Management, Role-Based Access Control, RBAC, Member Invitation, Test Asset Management
  - - meta
    - property: og:title
      content: "Project and Permission (RBAC) Management | SyncETA"
  - - meta
    - property: og:description
      content: "Guide to creating projects, inviting team members, and configuring role-based access control (RBAC) in SyncETA."
sort: 200
---

# Project and Permission (RBAC) Management

In SyncETA, a **'Project'** is the top-level operational unit that independently isolates scenarios, datasets, execution histories, and dashboard reports. You can invite team members at the project level and assign granular permissions by role.

---

## 1. Creating a Project

A new project can be created through any of the following three paths.

### Path 1: Initial State with No Assigned Projects
Upon first login, click the **'New Project'** button in the center of the screen.

![No projects assigned](../../ko/synceta/image/project/project_none.png)

### Path 2: Creating from the Project List Screen
Click the **'New Project'** button at the top left of the project list.

![Create from project list](../../ko/synceta/image/project/project_list.png)

### Path 3: Creating from the Work Dashboard Toolbar
Click the **'New Project'** button in the project selection dropdown at the top of the left sidebar.

![Create from project dashboard](../../ko/synceta/image/project/create_project_in_dashboard.png)

### Entering Project Details
Enter the project name, thumbnail image, project description, and target base URL, then complete creation.

![Project creation form](../../ko/synceta/image/project/create_project.png)

---

## 2. Project List and Switching

Click the **'Close Project'** or switch icon in the top right to view the list of projects you belong to and navigate to the desired project.

![Navigate to project list](../../ko/synceta/image/project/goto_project_list.png)
![Project list](../../ko/synceta/image/project/project_list_org.png)

---

## 3. Role-Based Access Control (RBAC)

For project security and operational stability, you can control action permissions by role.

### Step 1: Creating a Role
Navigate to Project Settings -> **'Role Management'** and add a new role.

![Navigate to role creation](../../ko/synceta/image/project/new_role.png)

### Step 2: Mapping Permissions
Select and save the permissions that the role is allowed to perform (scenario creation/editing, execution permission, dataset editing, CI/CD API key issuance, etc.).

![Role configuration](../../ko/synceta/image/project/role_setting.png)

---

## 4. Inviting Members and Assigning Roles

1. **Open Member Invitation Screen**: Navigate to Project Settings -> **'Member Management'** and click the **'Invite Member'** button.
   ![Open member invitation screen](../../ko/synceta/image/project/new_member.png)
2. **Select Invitees**: Search for and select registered users by email address.
   ![Invite member](../../ko/synceta/image/project/vite_member.png)
3. **Assign Role**: Assign a project-level role to the invited user. (The same user can be assigned different roles across different projects.)
   ![Assign role to member](../../ko/synceta/image/project/set_role_to_member.png)
