
/* Question 1: What is SQL
    SQL is a programming language which is used to communicate with the database. SQL is used to define the database
    structure and it is used to manipulate the data within.

    SQL stands for Structured Query Language whose main purpose is to interact with the relational databases in the
    form of inserting, deleting and updating/modifying the data in the database.

 */

/* Question 2: Relationship in database
    In web everything is related to each other. While creating database we can create relationship between tables so
    that they are related to each other in some way. Relationship talk about entities.
    A Relationship in DBMS depicts an association between the tables.

    There can be 3 types of relationships:
        1. One to One
        2. One to Many
        3. Many to Many

 */

/* Question 3: Types of Relationships
    1. One-to-one:
    One entity has connection with one another entity. Used when a single row in Table A is related to a single row in
    Table B.
    For example: One person can have just one SIN number at a time.

    2.One-to-many:
    Used when a single row in Table A is related to many rows in table B.
    For example - On youtube reviews, one individual can write multiple comments but the comments belongs to only one
    person at a time.
    Another example is one king having many wives but those wives are not allowed to marry any other person.

    3. Many-to-many
    Used when many rows in table A can be related to many rows in table B.

    4. Self-Referencing relationship:
    Self -Referencing Relationship – Used when a record in table A is related to the same table itself.

 */

/* Question 4: Parent and Child Table
    Keys connect different tables and different tables have keys which are unique to the table. What is primary key
    in one table might be a foreign key in another table.

    Primary key is with the parent and foreign key is with the child. The child inherits the values from the parent.

    In many to many relationship we have problem with the parent child relationship so we cannot store it in database.

 */

/* Question 5: Introduction to Keys
    Keys keeps everything unique. Something unique in each row which differentiates it from another is called as a key.
    For example - email id of each user will be different from one another so there is unique value in each row.

    Two similar keys should not exist in the database. Keys can be a combination of two columns.

    Key should never be changed. If the key of one table changes then we need to update the key in other connecting
    tables as well.

    Keys can never be null.

    3 important things about keys:
        1. Keys should always be unique
        2. Keys should never be changing
        3. Keys should never be null

 */

/* Question 6: Types of Keys
    1. Primary Key:
    A primary key is an attribute or a set of attributes that uniquely identify each record in the table. A table can
    have duplicate columns, but it cannot have more than one primary key. Primary Key cannot be empty or null. If the
    primary key is changed then is should be changed across the database.

    2. Super Key:
    Superkey is any number of columns that forces the row to be unique. So, a candidate key, primary key, and a unique
    key is a superkey, but vice-versa isn’t true. Superkey can have many cnadidate keys and other redundant keys as
    well.
    For knowing if the column is a superkey we ask the question:
        1. Can every row be unique?
        2. How many columns are needed?
        3. How many CK do we have?

    3. Candidate Key:
    Candidate key is the least number of columns needed to force every row to be unique. Candidate keys are candidates
    for making a primary key.

    4. Unique Key:
    The unique key is similar to the primary key, but allows NULL values in the column.

    5. Foreign Key:
    Foreign key is a reference to a primary key. We can have multiple foreign keys in a table.
    Multiple foreign keys have connection to different table. Each column can have one reference.

    6. Alternate Key:
    Alternate keys are all the candidate keys that were not selected as primary keys. Alternate keys are not must but
    it is good to have them as they can help in searches, or we can create an index.

    7. Composite Key:
    A composite key is a combination of two or more columns that identify each tuple uniquely.

    8. Natural key and Surrogate key:
    Surrogate and natural keys are categories of primary keys.

    Natural keys are something we want to store naturally in the table. To add a natural key we do not have to make up
    something or add an extra  for example id.

    Surrogate keys are made up keys. They are added in our column. Surrogate keys are kept very private and no one
    knows them except for the people working with them.

 */

/* Question 7: What are tables and fields in the database
    A table is a set of organized data in the form of rows and columns. It enables users to store and display records
    in the structure format. It is similar to worksheets in the spreadsheet application. Columns can categorize as
    vertical, and Rows are horizontal.
    A table contains a fixed number of columns but can have any number of rows known as the record.

 */

/* Question 8: Normalization in a Database
    Normalization is used to minimize redundancy and dependency by organizing fields and table of a database.
    There are some rules of database normalization, which is commonly known as Normal From, and they are:

    - First normal form(1NF)
    - Second normal form(2NF)
    - Third normal form(3NF)
    - Boyce-Codd normal form(BCNF)
    Using these steps, the redundancy, anomalies, inconsistency of the data in the database can be removed.

 */

/* Question 9: What is a view
    Creating a view is like creating a complex query for which we do not want to write the logic again and again. In
    such a scenario we create a view and store the query in order to run it everytime we want to see the results. It
    helps to reduce time in creating the query again and again and just running the view show the results.

    Its similar to writing a reusable function.

 */

/* Question 10: Which are joins in SQL? Name the most commonly used SQL joins
    A Join is one of the SQL statements which is used to join the data or the rows from 2 or more tables on the basis
    of a common field/column among them.

    There are 4 types of SQL Joins:
     - Inner Join: This type of join is used to fetch the data among the tables which are common in both tables.
     - Left Join: This returns all the rows from the table which is on the left side of the join but only the matching
     rows from the table which is on the right side of the join.
     - Right Join: This returns all the rows from the table which is on the right side of the join but only the
     matching rows from the table which is on the left side of the join.
     - Full Join: This returns the rows from all the tables on which the join condition has been put and the rows
     which do not match hold null values.

 */

/* Question 11: What is Self Join
    If we have a table which has an employee.id, employee.age, employee.name and manager.id in one table. We want to
    now get the manager name for the employee.id, in such a scenario the manager.id will also be an employee.id so
    we can join the table by itself and get the employee name.

    Here we get the information by joining it to itself than any other table.

    A SELF JOIN is required when we want to combine data with other data in the same table itself. It is often very
    useful to convert a hierarchical structure to a flat structure.

 */

/* Question 12: What is normalization? Commonly used normal forms
    Normalization is used to minimize redundancy and dependency by organizing fields and table of a database.
    Normalization breaks the table into small partitions and then links them using different relationships to avoid the
    chances of redundancy.

    There are some rules of database normalization, which is commonly known as Normal From, and they are:
        - First normal form(1NF)
        - Second normal form(2NF)
        - Third normal form(3NF)
        - Boyce-Codd normal form(BCNF)
    Using these steps, the redundancy, anomalies, inconsistency of the data in the database can be removed.

 */

/* Question 13: Indexing
    Indexing is a method that helps to get the requested data very fast.

    1. Clustered Index:
    - It is like a book with an index. The index helps us to reach the data quickly rather than looking for the concept on
    each page. The index is a pointer to the actual data but does not have the data itself.
    - There will be just one result as the index points to only one instance.
    -Its faster to search for data using clustered indexes.

    2. Non-Clustered Index:
    - Organises the data. Like a phone book will have the names and the number written in an organised way.
    - There can be one or more results in a non-clustered index.

 */

/* Question 14: Trigger in SQL
    It is a special type of stored procedure that is invoked automatically in response to an event. It allows us to
    execute a batch of code when an insert, update or delete command is run against a specific table because the
    trigger is the set of activated actions whenever DML commands are given to the system.

    SQL triggers have two main components one is action, and another is an event. When certain actions are taken, an
    event occurs as a result of those actions.

 */

/* Question 15: The difference between IN and BETWEEN operators
    1. Between Operator
    - This operator is used to selects the range of data between two values. The values can be numbers, text, and
    dates as well.
    - It returns records whose column value lies in between the defined range.
    - The following syntax illustrates this operator:
        SELECT * FROM table_name
        WHERE column_name BETWEEN 'value1' AND 'value2';

    2. IN Operator
    - It is a logical operator to determine whether or not a specific value exists within a set of values.
    - It compares the specified column's value and returns the records when the match exists in the set of values.
    - The following syntax illustrates this operator:
        SELECT * FROM table_name
        WHERE column_name IN ('value1','value 2');

 */