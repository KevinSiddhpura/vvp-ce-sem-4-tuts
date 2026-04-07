# clg-4th

**V.V.P Engineering College | Computer Engineering | 4th Semester**

Lab practicals for **Analysis and Design of Algorithms (ADA)**, **Object-Oriented Programming (OOP) with Java**, and **Operating Systems (OS) Shell Scripting**.

---

## Analysis and Design of Algorithms (C)

### L-1 — Basic Sorting Algorithms

| File | Description |
|------|-------------|
| [bubbleSort.c](ADA/L-1/bubbleSort.c) | Sorts an array using bubble sort by repeatedly swapping adjacent elements if they are in wrong order. |
| [insertionSort.c](ADA/L-1/insertionSort.c) | Sorts an array using insertion sort by building a sorted portion one element at a time. |
| [selectionSort.c](ADA/L-1/selectionSort.c) | Sorts an array using selection sort by repeatedly finding the minimum element and placing it at the beginning. |

### L-2 — Searching Algorithms

| File | Description |
|------|-------------|
| [binarySearch.c](ADA/L-2/binarySearch.c) | Performs binary search on a sorted array by repeatedly dividing the search interval in half. |
| [linearSearch.c](ADA/L-2/linearSearch.c) | Performs linear search by sequentially checking each element until the target is found. |

### L-3 — Advanced Sorting Algorithms

| File | Description |
|------|-------------|
| [mergeSort.c](ADA/L-3/mergeSort.c) | Sorts an array using merge sort with divide-and-conquer approach by recursively splitting and merging. |
| [quickSort.c](ADA/L-3/quickSort.c) | Sorts an array using quick sort by partitioning around a pivot and recursively sorting subarrays. |

### L-4 — Greedy Method and Knapsack

| File | Description |
|------|-------------|
| [activitySelection.c](ADA/L-4/activitySelection.c) | Solves the activity selection problem using greedy strategy with parallel arrays sorted by finish time. |
| [activitySelection-struct.c](ADA/L-4/activitySelection-struct.c) | Solves the activity selection problem using a `struct Activity` array and greedy selection by earliest finish. |
| [job.c](ADA/L-4/job.c) | Implements job sequencing with deadlines to maximize profit using greedy sorting by profit and slot assignment. |
| [job-struct.c](ADA/L-4/job-struct.c) | Implements job sequencing with deadlines using `struct Job`, greedy profit ordering, and time-slot allocation. |
| [kruskal-list.c](ADA/L-4/kruskal-list.c) | Builds an MST using Kruskal's algorithm from an edge-list representation with `struct Edge` and cycle checks. |
| [kruskal-matrix.c](ADA/L-4/kruskal-matrix.c) | Converts an adjacency matrix to an edge list, then applies Kruskal's algorithm to print MST edges and total cost. |
| [makeChange.c](ADA/L-4/makeChange.c) | Finds minimum coins for a given amount using greedy denomination selection (10, 5, 2, 1). |
| [prims.c](ADA/L-4/prims.c) | Builds an MST using Prim's algorithm with key/visited arrays and prints selected edges with total cost. |
| [zeroOne.c](ADA/L-4/zeroOne.c) | Solves 0/1 knapsack with dynamic programming using separate item, weight, and profit arrays. |
| [zeroOne-struct.c](ADA/L-4/zeroOne-struct.c) | Solves 0/1 knapsack with dynamic programming using an array of `struct Item`. |

### L-8 — Dynamic Programming - Matrix Chain Multiplication

| File | Description |
|------|-------------|
| [matrixChain.c](ADA/L-8/matrixChain.c) | Finds the minimum number of scalar multiplications needed to multiply a chain of matrices using dynamic programming. |

### L-9 — Dynamic Programming - Longest Common Subsequence

| File | Description |
|------|-------------|
| [lcs.c](ADA/L-9/lcs.c) | Computes the length of the longest common subsequence between two strings using dynamic programming. |

### Reference Material

| File | Description |
|------|-------------|
| [ADA.pdf](ADA/ADA.pdf) | Lab/reference document for the ADA course. |

---

## Object-Oriented Programming (Java)

### L-1 — Basic Programs

| File | Description |
|------|-------------|
| [CharacterCheck.java](OOP/L-1/CharacterCheck.java) | Reads a character and determines whether it is a vowel or a consonant. |
| [NumIncre.java](OOP/L-1/NumIncre.java) | Accepts a 5-digit number and increments each digit by 1 (9 wraps to 0). |
| [PrimeCheck.java](OOP/L-1/PrimeCheck.java) | Reads an integer and checks whether it is a prime number using trial division. |
| [TriangleArea.java](OOP/L-1/TriangleArea.java) | Takes three side lengths, validates the triangle, and computes area using Heron's formula. |

### L-2 — String Validation

| File | Description |
|------|-------------|
| [AnagramCheck.java](OOP/L-2/AnagramCheck.java) | Strips spaces, sorts characters of two strings, and checks if they are anagrams. |
| [EmailChecker.java](OOP/L-2/EmailChecker.java) | Validates an email address against a regex pattern and reports valid or invalid. |
| [GtuEnrollCheck.java](OOP/L-2/GtuEnrollCheck.java) | Verifies a GTU enrollment number is exactly 12 characters long. |

### L-3 — Classes and Objects

| File | Description |
|------|-------------|
| [EmployeeManager.java](OOP/L-3/EmployeeManager.java) | Defines an `Employee` class with name and salary; reads and displays employee data. |
| [StudentManager.java](OOP/L-3/StudentManager.java) | Collects marks for 5 students, computes percentages, and sorts them in descending order using bubble sort. |
| [TimeManager.java](OOP/L-3/TimeManager.java) | Defines a `Time` class; reads two time values and adds them with proper minute-to-hour carry. |

### L-4 — Inheritance and Polymorphism

| File | Description |
|------|-------------|
| [EmployeeManager.java](OOP/L-4/EmployeeManager.java) | Demonstrates single inheritance — `Manager` extends `Employee` and overrides `displayDetails()`. |
| [PaymentManager.java](OOP/L-4/PaymentManager.java) | Demonstrates runtime polymorphism with `CreditCardPayment` and `UPIPayment` subclasses of `Payment`. |
| [UniversityManager.java](OOP/L-4/UniversityManager.java) | Illustrates static and instance initializer blocks using a `University` class with a shared student counter. |
| [VolumeCalc.java](OOP/L-4/VolumeCalc.java) | Demonstrates method overloading with three `calculateVolume()` variants for sphere, cube, and cuboid. |

### L-5 — Interfaces and Abstract Classes

| File | Description |
|------|-------------|
| [InterestCalc.java](OOP/L-5/InterestCalc.java) | Defines an `Interest` interface implemented by `SimpleInterest` and `CompoundInterest` classes. |
| [Shapes.java](OOP/L-5/Shapes.java) | Abstract `Shape` class with `Triangle`, `Rectangle`, and `Circle` subclasses that compute area. |

### Reference Material

| File | Description |
|------|-------------|
| [OOP.pdf](OOP/OOP.pdf) | Lab/reference document provided in the OOP folder. |

### Tut — Practice Programs

| File | Description |
|------|-------------|
| [B.java](OOP/Tut/B.java) | Demonstrates single inheritance where class `B` extends class `A` and calls both inherited and own methods. |
| [Student.java](OOP/Tut/Student.java) | Demonstrates constructor overloading using default and parameterized constructors. |

---

## Operating Systems (Shell Scripting)

### L-2 — Basic Arithmetic

| File | Description |
|------|-------------|
| [2.sh](OS/L-2/2.sh) | Computes the sum of all natural numbers up to N and N! (factorial) using a single `for` loop. |
| [3.sh](OS/L-2/3.sh) | Reads a number and checks primality by testing divisibility from 2 up to N. |

### L-3 — String and Digit Operations

| File | Description |
|------|-------------|
| [1.sh](OS/L-3/1.sh) | Reverses a string using `rev` and checks whether it is a palindrome. |
| [2.sh](OS/L-3/2.sh) | Calculates the sum of digits of a number by repeatedly extracting the last digit via modulo. |
| [3.sh](OS/L-3/3.sh) | Accepts numbers as command-line arguments and sorts them in descending order using bubble sort. |

### L-4 — Process Creation (C)

| File | Description |
|------|-------------|
| [1.c](OS/L-4/1.c) | Creates multiple child processes using `fork()` and prints child and parent process IDs. |
| [2.c](OS/L-4/2.c) | Creates child processes using `fork()`, prints process IDs, and performs child-specific work (square calculation). |

### L-7 — Command-Line Argument Processing

| File | Description |
|------|-------------|
| [1.sh](OS/L-7/1.sh) | Accepts multiple numbers as arguments and computes their minimum, maximum, and average. |

### L-8 — File and Directory Listing

| File | Description |
|------|-------------|
| [2.sh](OS/L-8/2.sh) | Lists files in the current directory sorted by size in descending order. |
| [3.sh](OS/L-8/3.sh) | Lists files sorted by size and counts the total number of regular files in the directory. |

### L-9 — Directory Handling (C)

| File | Description |
|------|-------------|
| [1.c](OS/L-9/1.c) | Opens the current directory using `opendir()` and prints all non-hidden entries using `readdir()`. |

### L-10 — File Manipulation

| File | Description |
|------|-------------|
| [1.sh](OS/L-10/1.sh) | Swaps the case (lower↔upper) of every letter in a file's content using `tr`. |
| [2.sh](OS/L-10/2.sh) | Finds all `.txt` files in the current directory and renames them to use the `.doc` extension. |
| [3.sh](OS/L-10/3.sh) | Creates `f1.txt` and `f2.txt` if missing, compares their content, and optionally deletes both files. |

### Reference Material

| File | Description |
|------|-------------|
| [OS.pdf](OS/OS.pdf) | Lab/reference document for the OS course. |
