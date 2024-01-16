
/* Question 1: What is a linter
    Linters highlights syntactical and stylistic problems in your source code, which often times helps you identify and
    correct subtle programming errors or unconventional coding practices that can lead to errors.

 */

/* Question 2: What is ESLint, and why is it used
     ESLint is a static code analysis tool for identifying and fixing problems in JavaScript code. It is used to
     enforce coding style consistency, catch common programming errors, and maintain a high code quality standard in a
     codebase.

 */

/* Question 3: Explain the concept of ESLint rules
    ESLint rules define the coding style and guidelines that ESLint enforces. Rules can be configured in the .eslintrc
    file and can cover areas such as indentation, variable naming, syntax preferences, and more.

 */

/* Question 4: What is the purpose of the .eslintignore file
    The .eslintignore file is used to specify files and directories that ESLint should ignore during linting. It
    allows you to exclude certain files or patterns from being analyzed.

 */

/* Question 5: How do you fix ESLint errors automatically
    ESLint can automatically fix certain types of errors using the --fix option.

    For example:
    eslint --fix file.js

 */

/* Question 6: What is the purpose of the --fix-dry-run option in ESLint
    The --fix-dry-run option in ESLint allows you to preview the changes that would be made by the --fix option without
    actually modifying the files. It's useful for reviewing potential changes before applying them.

 */

/* Question 7: What is the purpose of ESLint plugins
    ESLint plugins provide additional rules and functionalities beyond the default ESLint configuration. Plugins are
    usually specific to certain libraries or frameworks, allowing developers to enforce best practices for those
    technologies.

 */

/* Question 8: Explain the difference between ESLint's "extends" and "plugins" configurations
    The "extends" configuration in ESLint is used to inherit rules from a predefined configuration
    (e.g., "eslint:recommended"), while "plugins" are used to extend ESLint by providing additional rules and
    configurations for specific technologies or frameworks.

 */

/* Question 9: How do you disable ESLint rules for a specific line or block of code?
    ESLint rules can be disabled for a specific line or block of code by using comments.

    For example:
    //eslint-disable no-alert
    alert('This will not trigger a no-alert error');
    //eslint-enable no-alert

 */