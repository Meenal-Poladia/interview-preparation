
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

/* Question 15:  Relational Database
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



/* Notes:
    - Data Redundancy: Data redundancy is when multiple copies of the same information are stored in more than one place
    at a time.

    - Normalisation: Normalization is the process of organizing data in a database. It includes creating tables and
    establishing relationships between those tables according to rules designed both to protect the data and to make
    the database more flexible by eliminating redundancy and inconsistent dependency.

 */