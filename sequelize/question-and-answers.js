
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