
/* Question 1: What is Git
    Git is a distributed version control system that helps track changes in source code during software development. It
    allows multiple developers to collaborate on a project, manage versions, and track changes efficiently.

 */

/* Question 2: What is a version control system (VCS)
    A VCS keeps track of the contributions of the developers working as a team on the projects. They maintain the
    history of code changes done and with project evolution, it gives an upper hand to the developers to introduce
    new code, fixes bugs, and run tests with confidence that their previously working copy could be restored at any
    moment in case things go wrong.

 */

/* Question 3: Explain the difference between Git and GitHub
    Git is the version control system, while GitHub is a web-based platform that provides hosting for Git repositories.
    GitHub adds a social and collaborative layer on top of Git, making it easier for multiple developers to work
    together on a project.

 */

/* Question 4: What is a Git repository
    A Git repository is a folder that contains all the files and version history of a project. It includes a hidden
    folder named ".git" that stores metadata, branches, and the complete history of the project.

 */

/* Question 5: How do you create a new branch in Git
     To create a new branch, you can use the following command:
     -> git checkout -b new-branch-name

 */

/* Question 6: Explain the difference between 'git pull' and 'git fetch.'
    git pull fetches changes from the remote repository and automatically merges them into the current branch.

    On the other hand, git fetch fetches changes but doesn't automatically merge them, allowing you to review changes
    before merging.

 */

/* Question 7: What is a Git merge conflict, and how do you resolve it
    A merge conflict occurs when Git cannot automatically merge changes from different branches. To resolve it, you
    need to manually edit the conflicting files, choose which changes to keep, and then commit the resolved files.

 */

/* Question 8: How do you revert a commit in Git
    To revert the last commit, you can use: git revert HEAD

    If you want to revert a specific commit, you can use: git revert <commit-hash>

 */

/* Question 9: Explain the purpose of Git's 'stash' command
    The git stash command is used to save changes that are not ready to be committed but need to be set aside
    temporarily. It allows you to switch to another branch or perform other operations without committing the current
    changes.

 */

/* Question 10: What is the Gitflow workflow
    Gitflow is a branching model that defines specific branches and their purposes. It typically includes branches
    like master for production releases, develop for ongoing development, and feature branches for new features. It
    helps organize the development process in larger projects.

 */

/* Question 11: Explain the purpose of the '.gitignore' file
     The .gitignore file is used to specify files and directories that should be ignored by Git. It helps prevent
     unnecessary or sensitive files from being included in the version control system.

 */

/* Question 12: What does git clone do
    The command creates a copy (or clone) of an existing git repository. Generally, it is used to get a copy of the
    remote repository to the local repository.

 */

/* Question 13: What does the command git config do
    The git config command is a convenient way to set configuration options for defining the behavior of the repository,
    user information and preferences, git installation-based configurations, and many such things.

    For example:
    To set up your name and email address before using git commands, we can run the below commands:

    git config --global
    user.name
    “<<your_name>>”

 */

/* Question 14: Can you explain head in terms of git
    A head is nothing but a reference to the last commit object of a branch.

 */

/* Question 15: What does git status command do
    git status command is used for showing the difference between the working directory and the index which is helpful
    for understanding git in-depth and also keep track of the tracked and non-tracked changes.

 */

/* Question 16: Define “Index”.
    Before making commits to the changes done, the developer is given provision to format and review the files and make
    innovations to them. All these are done in the common area which is known as ‘Index’ or ‘Staging Area’.

 */

/* Question 17: What does git add command do
    This command adds files and changes to the index of the existing directory.

 */

/* Question 18: Why is it considered to be easy to work on Git
    1. Branching Capabilities
    2. Distributed manner of development
    3. Pull requests feature
    4. Effective release cycle

 */

/* Question 19: What is the difference between git stash apply vs git stash pop command
    git stash apply: This will apply the changes from the most recent stash to your working directory, but the stash
    will still exist in the stash list.

    git stash pop: This will apply the changes from the most recent stash and remove it from the stash list.

 */

/* Question 20: What is the functionality of “git cherry-pick” command
    This command is used to introduce certain commits from one branch onto another branch within the repository. The
    most common use case is when we want to forward- or back-port commits from the maintenance branch to the development
    branch.

 */

/* Question 21: Difference between git merge and git rebase
    1. Git merge:
    The git merge command is used to integrate changes from one branch into another. It creates a new commit that
    combines the changes from the specified branch into the current branch.
    git merge is suitable for merging feature branches into a stable branch (e.g., merging a feature branch into master.

    2. Git rebase:
    The git rebase command is used to move or combine a sequence of commits to a new base commit. It is often used to
    maintain a linear and cleaner project history by incorporating changes from one branch onto another.
    git rebase is useful for integrating changes from a feature branch into a more stable branch while maintaining a
    linear history.

 */