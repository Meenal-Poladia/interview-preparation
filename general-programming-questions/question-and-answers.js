
/* Question 1: What is low-level and high-level language
    1. High level language
    - High-level languages are designed to be more user-friendly and closer to human language.
    - Code written in high-level languages is generally easier to read and write, promoting faster development and
    maintenance.
    - Examples: Python, Java, JavaScript, Ruby, PHP, etc.

    2. Low level language
    - Low-level languages are closer to the hardware and provide a minimal level of abstraction. They expose details of
    the computer architecture and require a deeper understanding of hardware characteristics.
    - Code written in low-level languages can be highly efficient in terms of execution speed and memory usage because
    programmers have more control over hardware resources.
    - Low-level languages often involve more complex and technical code, which can be harder to read and understand.
    - Examples: Assembly language, machine language, and to some extent, C.
 */

/* Question 2: Ephemeral and Persistent Storage
    1. Ephemeral Storage:
    - Ephemeral storage is temporary and is typically associated with volatile memory or disk space.
    - Data stored in ephemeral storage is usually short-lived and may be cleared or reset when a system is rebooted or
    shut down.
    - Ephemeral storage is often used for temporary files, caches, or data that is only needed for the duration of a
    specific process or session.

    2. Persistent Storage:
    - Persistent storage retains data even when the system is shut down or restarted.
    - Data stored in persistent storage is durable and remains intact across system reboots or power cycles.
    - Persistent storage is used for long-term data storage, file systems, databases, and any data that needs to
    persist over time.
    - Examples include hard disk drives (HDDs), solid-state drives (SSDs), network-attached storage (NAS), and
    databases.

    Summary:
    Ephemeral Storage:
        - Temporary and volatile.
        - Typically used for short-term data, caches, or temporary files.
        - Cleared or reset on system reboot.
    Persistent Storage:

        - Durable and remains intact across system reboots.
        - Used for long-term data storage, file systems, and databases.
        - Examples include hard drives, SSDs, and cloud-based storage solutions.
 */

/* Question 3: Time Complexity
    When making an efficient app we need to make sure that it takes less memory and less time. When optimizing an app
    we need to think about space complexity and time complexity.
    Space Complexity means taking less space
    Time complexity is a measure of how the running time of an algorithm increases with the size of the input data.

    In Linear search we loop over all the elements in an array to check if the character exists and if it. In linear
    search if 10 elements increase it will increase 10 steps. This is represented as O(n). Here O represents time
    complexity and n is the number of elements.

    For Binary search the prerequisite is to have a sorted array. In binary search we in the first step reduce the
    array by almost half. We represent binary search as O(log2 n) which means that if there are 16 elements we use 4
    steps like 2*2*2*2 = 16. Here, the increase in steps is not as drastic as it is in Linear search.

    O(1) means constant time like if we need to find an elements from an array, the time will always be the same for
    1 or for 100th element.

    Best to worst time complexity:
    O(1)
    O(log n) -> we eliminate half of the elements in the array
    O(n) -> as the input size grows the time grows proportionally.
    O(n*log*n) -> mergesort and heapsort
    O(n2) -> For loop inside of a for loop
    O(2n) -> Recursion, Fibonnaci sequence
    O! -> Factorial, like 8*7*6*5*4*3*2*1

 */