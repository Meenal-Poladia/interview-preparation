
/* Question 1: What is Sequelize
    Sequelize is a popular Object-Relational Mapping (ORM) library for Node.js, which provides an abstraction over
    relational databases like MySQL, PostgreSQL, SQLite, and MSSQL.
    Sequelize.js provides easy-to-use high-level abstractions over these databases while allowing developers to execute
    complex tasks with ease.

 */

/* Question 2: Role of Models in Sequelize
    Sequelize plays a crucial role in managing data models and relationships.
    It offers features such as model definition, associations between models, synchronization, migrations, and
    transactions. Model definitions map directly to tables in the database while associations define relationships
    between models.
    Synchronization allows automatic update of database schema when models change. Migrations provide control over
    changes to the database schema. Transactions ensure atomicity of operations.

    Here's an example for a simple User model:
    const User = sequelize.define('User', {
      username: Sequelize.STRING,
      email: Sequelize.STRING,
    });

 */

/* Question 3: What are associations in Sequelize? Explain different types of associations
    Associations in Sequelize are relationships between different data models. They allow us to define how our tables
    relate and interact with each other, enabling complex queries.
    There are four types of associations: One-to-One, One-to-Many, Many-to-One, and Many-to-Many.

    - In a One-to-One association, one record from a model is associated with one record from another model. For
    example, a User has one Profile.

    - A One-to-Many relationship allows a single record in one model to be related to multiple records in another
    model. An example would be a User having many Posts.

    - The inverse of this is the Many-to-One relationship where multiple records in one model associate with a single
    record in another model. This could be seen as many Orders belonging to one Customer.

    - Lastly, a Many-to-Many relationship exists when multiple records in one model are associated with multiple
    records in another model.
    A classic example is Users and Roles, where a user can have many roles and a role can belong to many users.

 */

/* Question 4: How would you handle one-to-one, one-to-many, and many-to-many relationships in Sequelize
    In Sequelize, relationships are handled using associations.

    - For one-to-one relationships, the "hasOne" and "belongsTo" methods are used.
    For instance, if a User has one Profile, we would use User.hasOne(Profile). The inverse relationship is defined by
    Profile.belongsTo(User).

    - One-to-many relationships are managed with "hasMany" and "belongsTo". If a User has many Tasks, it’s expressed as
    User.hasMany(Task), while the reverse is Task.belongsTo(User).

    - Many-to-many relationships require a through table. This is achieved using "belongsToMany". If a User belongs to
    multiple Projects and vice versa, we’d write User.belongsToMany(Project, {through: 'UserProject'}) and
    Project.belongsToMany(User, {through: 'UserProject'}).

 */

/* Question 5: How do you perform CRUD operations using Sequelize
     Sequelize provides methods like create, findAll, findOne, update, and destroy to perform CRUD operations on models.
     For example:
     // Create
     User.create({ username: 'john_doe', email: 'john@example.com' });

     // Read
     User.findAll({ where: { username: 'john_doe' } });

     // Update
     User.update({ email: 'new_email@example.com' }, { where: { username: 'john_doe' } });

     // Delete
     User.destroy({ where: { username: 'john_doe' } });

 */

/* Question 6: What is Sequelize migration
    Sequelize migrations are a way to version-control database schema changes. Migrations are JavaScript files that
    describe changes to be made to the database, such as creating or modifying tables. The sequelize-cli provides
    commands to generate and run migrations.

    How to do Migration:
    Sequelize, a Node.js ORM, can be used for data migration by leveraging its migrations feature. To start, install
    Sequelize CLI and initialize it to create necessary folders. Create a new migration file using the
    “migration:generate” command with a name describing the change. In this file, define ‘up’ and ‘down’ methods
    detailing what happens during migration and rollback respectively. The ‘up’ method might include creating tables or
    adding columns, while ‘down’ reverses these actions. Execute the migration using the “db:migrate” command. If
    errors occur, use “db:migrate:undo” to revert changes. Remember to keep migrations atomic, each representing a
    single change in your database schema.

 */

/* Question 7: What are hooks in Sequelize, and how are they used
    Hooks, also known as lifecycle events, are functions that Sequelize calls before or after certain operations. They
    allow developers to control the behavior of models during different stages of their lifecycle.

    For instance, a ‘beforeCreate’ hook can be used to hash a user’s password before it is stored in the database.

 */

/* Question 8: How do you enable logging in Sequelize
    Sequelize allows you to enable logging to see the SQL queries it generates. You can enable logging globally for
    all queries or for specific instances.

    For example:
    const sequelize = new Sequelize('database', 'username', 'password', {
      logging: console.log, // To log all queries
    });
 */

/* Question 9: Sequelize transaction
    Sequelize transactions allow you to perform multiple database operations as a single unit. Transactions ensure that
    either all the operations are committed, or none of them are. Transactions can be used to maintain data consistency
    and integrity.

 */

/* Question 10: What are the key differences between raw queries and Sequelize methods in querying a database
    Raw queries and Sequelize methods differ in syntax, abstraction level, and security. Raw queries involve writing
    SQL code directly, providing more control but requiring extensive knowledge of SQL. They are less abstracted,
    making them potentially faster for complex operations. However, they expose the database to injection attacks if
    not properly sanitized.

    Sequelize methods, on the other hand, use JavaScript functions that generate SQL commands. This provides a higher
    level of abstraction, simplifying interaction with the database by hiding SQL complexity. It also automatically
    sanitizes inputs, reducing the risk of injection attacks. However, this abstraction can lead to slower performance
    for complex queries due to extra processing overhead.

 */

/* Question 11: What is the purpose of Sequelize.sync() and how does it work
    It synchronizes the defined model with the database by creating tables if they do not exist and updating them if
    they have changed.

    The sync() function works by comparing the current state of the models with the corresponding tables in the
    database. If discrepancies are found, it modifies the database to match the models. This includes creating new
    tables or altering existing ones based on changes made in the models.

    There are options that can be passed to the sync() method to control its behavior. For instance, passing
    {force: true} will drop tables before recreating them, effectively resetting the database. However, this should be
    used cautiously as it leads to data loss.

 */

/* Question 12: How do you validate data in Sequelize
    In Sequelize, data validation is achieved through the ‘validate’ property in model definition. This property
    contains various built-in validators like ‘is’, ‘len’, ‘isEmail’, etc., and also allows custom validators.

    Here’s an example of a User model with email and password fields:
    const User = sequelize.define('user', {
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          len: [7,42]
        }
      }
    });

 */

/* Question 13: How do you handle data pagination in Sequelize
    In Sequelize, data pagination is handled using the ‘limit’ and ‘offset’ properties in the query object. The ‘limit’
    property specifies the maximum number of records to return, while the ‘offset’ property determines where to start
    from in the dataset. For example:

    Model.findAll({
      offset: 10,
      limit: 5
    });

    This code will skip the first 10 records and then fetch the next 5. This approach can be used for paginating
    through large datasets by incrementing the ‘offset’ value based on the page number and ‘limit’. However, it’s
    important to note that this method may not perform well with very large offsets due to database design.

 */

/* Question 14: What is the role of Sequelize CLI in a development environment
    Sequelize CLI is a command-line interface tool that aids in managing Sequelize-related tasks within a development
    environment. It automates repetitive tasks such as database migration, seeding, and configuration, thus enhancing
    productivity. The CLI allows developers to generate models, migrations, and seeders with ease, reducing the need
    for manual creation of these files. Additionally, it provides commands for executing migrations and seeds, which
    are essential for maintaining database consistency across different environments.

 */

/* Question 15: What are the advantages and disadvantages of using raw SQL queries versus Sequelize in a Node.js
   application
    Sequelize offers advantages like Object-Relational Mapping (ORM), which simplifies data manipulation using
    JavaScript objects. It supports multiple SQL dialects, transactions, and relations. Sequelize also provides
    migrations for database versioning.

    However, Sequelize has a learning curve and may overcomplicate simple queries. Performance can be slower than raw
    SQL due to abstraction overhead.

    Raw SQL gives full control over queries, potentially leading to better performance. It’s simpler for basic
    operations and doesn’t require learning an additional library.

    On the downside, raw SQL lacks Sequelize’s features like ORM, transaction support, and migrations. It requires
    manual writing of complex queries and is more prone to SQL injection attacks if not properly sanitized.

 */

/* Question 16: How would you handle errors in Sequelize
    In Sequelize, error handling is done using promises or async/await. When a database operation fails, Sequelize
    throws an error that can be caught and handled.

    For promise-based operations, use the .catch() method after your query. This will catch any errors thrown during the
    execution of the promise chain:
    Model.findAll()
      .then(data => {
        // handle data
      })
      .catch(err => {
        // handle error
      });

 */

/* Question 17: How would you use Sequelize to handle database schema updates
    Sequelize.js provides a feature called “migrations” to handle database schema updates. Migrations are like version
    control for your database, allowing you to update the database schema in a structured and organized manner.

    To use migrations, first install the Sequelize CLI and initialize it. This creates a ‘migrations’ folder where
    migration files will be stored. Each file represents a specific update to the database schema.

    Create a new migration using the command ‘sequelize migration:create’. This generates a new file with methods ‘up’
    and ‘down’. The ‘up’ method describes the changes to apply to the database, while the ‘down’ method reverts them.

    Next, define the changes inside these methods using Sequelize’s API. For example, to add a column, use ‘addColumn’
    function on queryInterface object, passing table name, column name, and its properties.

    Finally, run the migration using ‘sequelize db:migrate’. If something goes wrong, use ‘sequelize db:migrate:undo’ to
    revert the last migration. Remember to commit each migration file to your version control system to keep track of
    schema changes.

 */

/* Question 18: How do you handle cascading deletions in Sequelize
    In Sequelize, cascading deletions are handled through the ‘onDelete’ property in model associations. When defining
    an association between models, you can specify ‘onDelete: “CASCADE”‘ to enable this feature. This means that when a
    parent record is deleted, all associated child records will also be deleted automatically by Sequelize.
    For example, if we have two models, User and Task, and each user has many tasks, we could define the association
    like so:

    User.hasMany(Task, { onDelete: 'CASCADE' });
    This code tells Sequelize to delete all tasks associated with a user when that user is deleted. It’s important to
    note that this only works if foreign key constraints are enabled in your database.

 */

/* Question 19: How would you use Sequelize to ensure data consistency in a distributed database scenario
    Sequelize can ensure data consistency in a distributed database scenario through its transaction feature.
    Transactions are crucial for maintaining integrity, especially when performing multiple related operations.
    Sequelize supports transactions by wrapping your queries within sequelize.transaction method.

    Here’s an example:

    const { sequelize } = require('your-sequelize-setup-file');
    try {
      const result = await sequelize.transaction(async (t) => {
        const user = await User.create({
          firstName: 'John',
          lastName: 'Doe'
        }, { transaction: t });
        await user.setShooter({
          firstName: 'Jane',
          lastName: 'Doe'
        }, { transaction: t });
        return user;
      });
    } catch (error) {
      // If the execution reaches this line, an error occurred.
      // The transaction has been rolled back automatically!
    }

    In this code snippet, if any operation fails, all changes will be rolled back, ensuring data consistency across the
    distributed system.

 */