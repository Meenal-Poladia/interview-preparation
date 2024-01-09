
/* Question 1: What is DBMS
    DBMS provides us an interface or tool for performing different operations such as the creation of a database,
    inserting data into it, deleting data from it, updating the data, etc. DBMS is a software in which data is stored
    in a more secure way as compared to the file-based system.

    A DBMS system helps a user to overcome problems like data inconsistency, data redundancy, etc. in a database and
    makes it more convenient and organized to use it.

 */

/* Question 2: Difference between DBMS and File System
    A file-based system and a database system are two different approaches to managing and organizing data.

    1. Data Structure:
        - In a file-based system, data is stored in files or folders. Each file is typically specific to a particular
        application and contains data relevant to that application.
        - In a database system, data is organized in a structured manner using tables. The relational model is a widely
        used approach, where data is stored in rows and columns.
    2. Data Retrieval and Manipulation:
        - Retrieving and manipulating data in a file-based system often involves custom programming for each
        application.
        - Database systems use a standardized query language such as SQL (Structured Query Language) for data retrieval
        and manipulation.
    3. Scalability and Maintenance:
        - Maintenance tasks, such as adding new features or modifying existing ones, may require significant effort and
        can be error-prone.
        - Maintenance tasks are more straightforward in a database system, as changes can be made to the database
        schema without affecting the entire application.

 */

/* Question 3: Differentiate between DBMS and RDBMS
DBMS                                                        RDMS
- DBMS stores data as file.                                 - RDBMS stores data in tabular form.
- Data elements need to access individually.                - Multiple data elements can be accessed at the same time.
- No relationship between data.                             - Data is stored in the form of tables which are related to
                                                            each other.
- Normalization is not present.                             - Normalization is present.
- Data redundancy is common in this model.	                - Keys and indexes do not allow Data redundancy.
- It is used for small organization and deal with small     - It is used to handle large amount of data.
data.
- Data fetching is slower for the large amount of data.     - Data fetching is fast because of relational approach.
- It stores data in either a navigational or hierarchical   - It uses a tabular structure where the headers are the
form.                                                         column names, and the rows contain corresponding values.


 */

/* Question 4: What is Database
    A Database is a logical, consistent and organized collection of data that it can easily be accessed, managed and
    updated.
    Database mostly consists of the objects (tables), and tables include of the records and fields. Fields are the
    basic units of data storage, which contain the information about a particular aspect or attribute of the entity
    described by the database. DBMS is used for extraction of data from the database in the form of the queries.

 */

/* Question 5: What is Database System
    The collection of database and DBMS software together is known as a database system. Through the database system,
    we can perform many activities such as-
    The data can be stored in the database with ease, and there are no issues of data redundancy and data inconsistency.

 */

/* Question 6: Different types of DBMS or Data Model
    The different types of DBMS are as follows:

    - Relational DBMS (RDBMS): This type of DBMS, uses a structure which allows the users to access data in relation to
    another piece of data in a database. In this type of DBMS, data is stored in the form of tables.
    - Hierarchical DBMS:  As the name suggests, this type of DBMS has a structure similar to that of a tree, wherein
    the nodes represent records and the branches of the tree represent fields.
    - Network DBMS: This type of DBMS supports many-to-many relations wherein multiple member records can be linked.
    - Object-oriented DBMS: Uses small individual software called object to store pieces of data and the instructions
    for the actions to be done with the data.

 */

/* Question 7: Advantages of DBMS
    The advantages of DBMS are as follows:
    - Sharing of Data: Multiple users can use data from the same database simultaneously.
    - Integrity constraints: These constraints allow the data to be stored in a database in a refined manner.
    - Redundancy control: DBMS supports a mechanism to control the redundancy of data inside the database by integrating
    all the data into a single database and as data is stored in only one place, the duplicity of data does not happen.
    - Data Independence: It simply means that you can change the structure of the data without affecting the structure
    of any of the application programs.
    - Provide backup and recovery facility: Provides a feature of ‘backup and recovery’ to automatically create the
    data backup and restore the data as and when required.

 */

/* Question 8: Differences between DDL, DML, TCL and DCL in SQL
    Following are some details :
    - DDL stands for Data Definition Language. SQL queries like CREATE, ALTER, DROP, TRUNCATE and RENAME come under
    this. All these commands are used for updating the data that's why they are known as Data Definition Language.

    - DML stands for Data Manipulation Language. SQL queries like SELECT, INSERT, DELETE and UPDATE come under this.
    These commands are used for the manipulation of already updated data that's why they are the part of Data
    Manipulation Language.

    - DCL stands for Data Control Language. SQL queries like GRANT and REVOKE come under this. These commands are used
    for giving and removing the user access on the database. So, they are the part of Data Control Language.

    - Transaction Control Language (TCL) e.g., COMMIT, ROLLBACK, and SAVEPOINT. These are the commands used for

    managing transactions in the database. TCL is used for managing the changes made by DML.

 */

/* Question 9: Explain ACID properties in the context of a DBMS
    ACID stands for Atomicity, Consistency, Isolation, and Durability—properties that ensure the reliability of
    database transactions.

 */

/* Question 10: Disadvantages of file processing systems
    - Inconsistent
    - Not secure
    - Data redundancy
    - Difficult in accessing data
    - Data isolation
    - Data integrity
    - Concurrent access is not possible
    - Limited data sharing
    - Atomicity problem
 */

/* Question 11: What is a checkpoint in DBMS? When does checkpoint occur in DBMS?
    The Checkpoint is a type of mechanism where all the previous logs are removed from the system and permanently
    stored in the storage disk.
    A checkpoint is like a snapshot of the DBMS state. Using checkpoints, the DBMS can reduce the amount of work to be
    done during a restart in the event of subsequent crashes. Checkpoints are used for the recovery of the database
    after the system crash. Checkpoints are used in the log-based recovery system. When due to a system crash we need
    to restart the system then at that point we use checkpoints. So that, we don't have to perform the transactions
    from the very starting.

 */

/* Question 12: What is the purpose of normalization in DBMS?
    Database normalization is the process of organizing the attributes of the database to reduce or eliminate data
    redundancy (having the same data but at different places).

    Purpose of normalization:
    - It is used to remove duplicate data and database anomalies from the relational table.
    - Normalization helps to reduce redundancy and complexity by examining new data types used in the table.
    - It is helpful to divide the large database table into smaller tables and link them using relationships.
    - It avoids duplicate data or no repeating groups into a table.
    - It reduces the chances for anomalies to occur in a database.

 */

/* Question 13: What is the difference between a database schema and a database state
    The collection of information stored in a database at a particular moment in time is called database state while
    the overall design of the database is called the database schema.

 */

/* Question 14: What do you mean by durability in DBMS
    Once the DBMS informs the user that a transaction has completed successfully, its effect should persist even if the
    system crashes before all its changes are reflected on disk. This property is called durability. Durability ensures
    that once the transaction is committed into the database, it will be stored in the non-volatile memory and after
    that system failure cannot affect that data anymore.

 */

/* Question 15: Relational Database
    In relational database we combine two different attributes. In relational database we store data in a table.

    Entity is anything about which we store data and attribute is the thing that we store. For eg: Entity can be a
    person and attribute can be its name or age.

 */

/* Question 16: Entity and Attribute
    Entity is anything about which we store data and attribute is the thing that we store. For eg: Entity can be a
    person and attribute can be its name or age.

    Entity type is the category of the entities that we are storing like Person or Caleb. Attribute type is the property
    which we are storing of the person.

    Attributes are columns and entities are individual rows. All the attributes and entities together make a table
    which has a name or is called as entity.

 */

/* Question 17: E-R model
    E-R model is a short name for the Entity-Relationship model. This model is based on the real world. It contains
    necessary objects (known as entities) and the relationship among these objects.

 */

/* Question 18: Data Integrity
   Data Integrity is about having the correct data in your database. When we are storing data we do not want to store
   incorrect data, repeating values or broken relationships between tables.

   The term relational comes from the mathematical concept of connection of sets and not relationship.

    3 main types of data integrity are:
    1. Entity integrity
    Entity is anything about which we store data. Data integrity among entities means having unique id for each user
    so that we can differentiate between 2 entities.

    2. Referential integrity
    This refers to having some connection with another tables which helps to get more details about the current tables
    content. For example - the comment table is a table which also has the userId which helps to know the details
    about the user who posted the comment.

    3. Domain integrity
    Domain means the acceptable value in the field in which we are storing the data. For example - for user name we
    allow the user to store the value just in string with some constraints on the number of characters. All domain
    integrity allows to store data in a data type. We can classify data as numbers, text or dates.
    Foreign keys allows us to connect tables. The child cant exist without the parent. Foreign key constraints help to
    see that if the user gets removed then remove all the tables associated with the parents foreign key.

 */

/* Question 19: SQL
    SQL stands for Structured Query Language whose main purpose is to interact with the relational databases in the
    form of inserting, deleting and updating/modifying the data in the database.

 */

/* Question 20: Database Design
    When we are designing database it is important to have data integrity which means all tables have the correct and
    the latest data and there is no scope of disconnected data. If there is a disconnect then if one table updates then
    the other table will not update and so the data in the other table will be not be up to date.

    There are 2-3 ways in which database design can be broken down. These are also called as schemas:
        1. Conceptual
        2. Logical
        3. Physical

    From phase 1-3 the schemas goes from being general to specific.

    Database design is a method to separate information over multiple tables rather than having one huge table where we
    store all the information.

 */


/* Notes:
    - Data Redundancy: Data redundancy is when multiple copies of the same information are stored in more than one place
    at a time.

    - Normalisation: Normalization is the process of organizing data in a database. It includes creating tables and
    establishing relationships between those tables according to rules designed both to protect the data and to make
    the database more flexible by eliminating redundancy and inconsistent dependency.

    - Data is anything which we store in the database.

    - Database is the place where we store our data.

    - Relational database is the way in which we store data in tables.

    - DBMS is how we manage our database in the code.

    - RDBMS is a way in which we control our database using relational database.

    - Null is when someone does not enter a value within a column. Null means there is no data into the field.

    - Anomalies are errors within our data integrity. For example We wanted to update one column but by mistake we
    updated 10 columns.

    - Integrity, we implement integrity to protect against anomaly. we have 3 ways to keep integrity:
        1. Entity integrity -  having just one entity with a unique name
        2. Referential integrity - building connections across tables
        3. Domain integrity - a column within a table has all of the expected values.

    - Entity is something about which we are storing information.

    - Attributes are the things we store about the entity.

    - Relation is a connection between two sets of data.

    - Tuple/ Row are all the attributes about the entity.

    - Table is a physical representation of a relation. Within a table we have rows and columns.

    - File is another name for a table.

    - Record is another name for a row.

    - Field is another name for a column.

    - Value is the information we put into a specific column.

    - Database design is the process of designing your table to remove anomalies and have data integrity.

    - Schema is the structure of our database.

    - Normalisation are the bunch of steps we will use to get the database design.

    - Naming Convention is just a consistency used to make things consistent. We name our database, schema, rows, columns
    and values in a certain way.

    - Key is something to make everything unique within a table. This is how we connect tables. For example we connect
    2 tables using ids.

    - Relation. table and file are all talking about the structure of the table.

    - Tuple, rows, entry and record are all talking about rows within a table.

    - Columns, attributes and field are all talking about the column within a table.

 */