
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

/* Question 16: What is Constraint
    The constraint is used to specify the rule and regulations that allows or restricts what values/data will be stored
    in the table. It ensures data accuracy and integrity inside the table. It enforces us to store valid data and
    prevents us from storing irrelevant data.

    Some of the most commonly used constraints are NOT NULL, PRIMARY KEY, FOREIGN KEY, AUTO_INCREMENT, UNIQUE KEY, etc.

    SQL categories the constraints into two levels:
        1. Column Level Constraints: These constraints are only applied to a single column and limit the type of data
        that can be stored in that column.
        2. Table Level Constraints: These constraints are applied to the entire table and limit the type of data that
        can be entered.

 */

/* Question 17: The difference between DELETE and TRUNCATE statements in SQL
    Both are DML command

    1. Delete
    - The delete statement removes single or multiple rows from an existing table depending on the specified condition.
    - We can use the WHERE clause in the DELETE command.
    - DELETE is slower because it maintained the log.
    - You can roll back data after using the DELETE statement.

    2. Truncate
    - The truncate command deletes the whole contents of an existing table without the table itself. It preserves the
    table structure or schema.
    - We cannot use the WHERE clause with TRUNCATE.
    - TRUNCATE statement is faster than DELETE statement as it deletes entire data at a time without maintaining
    transaction logs.
    - It is not possible to roll back after using the TRUNCATE statement.

 */

/* Question 18: Is a blank space or zero the same as a NULL value
    A NULL value is a value, which is 'unavailable, unassigned, unknown or not applicable.' It would be used in the
    absence of any value. We can perform arithmetic operations on it. On the other hand, zero is a number, and a blank
    space is treated as a character.

 */

/* Question 19: What are functions and their usage in SQL
    SQL functions are simple code snippets that are frequently used and re-used in database systems for data processing
    and manipulation. Functions are the measured values.

    SQL functions are used for the following purposes:
        - To perform calculations on data
        - To modify individual data items
        - To manipulate the output
        - To format dates and numbers
        - To convert data types

 */

/* Question 20: The difference between the WHERE and HAVING clauses
    1. WHERE
    - WHERE clause is used to filter records before any groupings are established.
    - It does not allow to work with aggregate functions.
    - This clause can be used with the SELECT, UPDATE, and DELETE statements.

    2. HAVING
    - HAVING clause is used to filter values from a group.
    - It can work with aggregate functions.
    - This clause can only be used with the SELECT statement.

 */

/* Question 21: What is the default ordering of data using the ORDER BY clause? How could it be changed
    The ORDER BY clause is used to sort the table data either in ascending or descending order. By default, it will
    sort the table in ascending order. If we want to change its default behavior, we need to use the DESC keyword after
    the column name in the ORDER BY clause.

 */

/* Question 22: How do we use the DISTINCT statement? What is its use
    The DISTINCT keyword is used to ensure that the fetched value always has unique values. It does not allow to have
    duplicate values. The DISTINCT keyword is used with the SELECT statement and retrieves different values from the
    table's column.

    We can use it with the help of the following syntax:
    SELECT DISTINCT column_lists FROM table_name WHERE [condition];
 */

/* Question 23: What is meant by case manipulation functions
    Case manipulation functions are part of the character functions. It converts the data from the state in which it is
    already stored in the table to upper, lower, or mixed case. The conversion performed by this function can be used
    to format the output. We can use it in almost every part of the SQL statement. Case manipulation functions are
    mostly used when you need to search for data, and you don't have any idea that the data you are looking for is in
    lower case or upper case.

    There are three case manipulation functions in SQL, namely:

    - LOWER: This function returns the string in lowercase. It takes a string as an argument and returns it by
    converting it into lower case.
    Syntax:  LOWER(‘string’)

    - UPPER: This function returns the string in uppercase. It takes a string as an argument and returns it by
    converting it into uppercase.
    Syntax:  UPPER(‘string’)

    - INITCAP: This function returns the string with the first letter in uppercase and the rest of the letters in
    lowercase.
    Syntax: INITCAP(‘string’)

 */

/* Question 24: What is Denormalization
    Denormalization is a database optimization technique in which we add redundant data to one or more tables.

 */

/* Question 25: What is CLAUSE in SQL
    A clause in SQL is a part of a query that lets you filter or customize how you want your data to be queried to you.

 */

/* Question 26: Union and Union All
    1. Union
    - Combines the result of two or more SELECT statements consisting of distinct values.
    - Has low performance than UNION ALL, as duplicate rows need to be removed.

    2. Union All
    - Combines the result set of two or more SELECT statements consisting of duplicate values.
    - Has better performance than UNION, as duplicate rows need not have to be removed.

 */

/* Question 27: How is the pattern matching done in the SQL?
    With the help of the LIKE operator, pattern matching is possible in the SQL.’%’ is used with the LIKE operator
    when it matches with the 0 or more characters, and ‘_’ is used to match the one particular character.

 */

/* Question 28: What do you understand by aggregation and atomicity
    1. Aggregation:
    This is a feature of the E-R  model which allows a relationship set to participate in another relationship set.

    2. Atomicity
    This property states that a database modification must either follow all the rules or nothing at all. So, if one
    part of the transaction fails, then the entire transaction fails.

 */

/* Question 29: What are the ACID properties in DBMS?
    ACID stands for Atomicity, Consistency, Isolation, Durability. It is used to ensure that the data transactions are
    processed reliably in a database system.

    - Atomicity: Atomicity refers to those transactions which are completely successful or failed. Here each
    transaction refers to a single logical operation of a data. So, even if one part of any transaction fails, the
    entire transaction fails and the database state is left unchanged.
    - Consistency: Consistency ensures that the data must meet all the validation rules. In simple words, you can say
    that your transaction never leaves the database without completing its state.
    - Isolation: The main goal of isolation is concurrency control.
    - Durability: Durability means that if a transaction has been committed, it will occur whatever may be the scenario.

 */

/* Question 30: Explain Database partitioning and its importance.
    Data partitioning is the process of dividing a logical database into independent units for the betterment of
    availability, performance, and manageability.

    The importance of database partitioning is as follows:
    - Enables you to access large parts of a specific partition
    - Cheap and slower storage can be used to store data
    - Improves query performance
 */