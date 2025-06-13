# Java Dev Kit <Badge type="info">2.3.0</Badge>

Java Dev Kit is an open-source enterprise-grade Java development toolkit suite, designed to
streamline and enhance your software development workflow. It provides a collection of modular tools
and utilities tailored for various aspects of Java application development.

## Features

### 1. Version Management Module
This module handles overall project management by utilising a BOM (Bill of Materials) to uniformly
manage the versions of all imported dependencies, ensuring consistency and reducing version
conflicts across your projects.

### 2. Development Utility Tools
A comprehensive set of practical utilities to simplify common development tasks, including but not
limited to:

- **AesUtil**: Provides AES encryption functionality.
- **Base64Util**: Performs Base64 encoding and decoding for strings.
- **BoolUtil**: Executes logical AND and OR operations on multiple boolean expressions.
- **BranchUtil**: Reduces verbose `if-else` statements by combining `BoolUtil` with Lambda expressions for cleaner conditional flows.
- **CollectionUtil**: Utilities designed for convenient and efficient collection handling.
- **HashUtil**: Offers hashing operations on strings using various algorithms.
- **MapUtil** and **ObjectMapAdapter**: Facilitate conversions between `Map` objects and specified Java classes.
- **RangeUtil**: Generates ranged arrays based on specified bounds.

### 3. Global Unique ID Generator
A dedicated module providing a variety of generators for creating different types of globally unique
identifiers (GUIDs), suitable for distributed systems and enterprise applications.

### 4. Key Pair Loading Utilities
Tools to load PEM-format key pair files (`PublicKey` and `PrivateKey`) into their corresponding Java
objects. This utility can also be integrated within the main development utilities module for
better cohesion.

### 5. Mathematics and Statistics Utilities
A set of tools for mathematical and statistical computations, currently supporting:

- Chainable high-precision calculations.
- Quartile computations.

Consideration is given to merging this into the development utilities module for simplicity and
easy access.

### 6. JWT Tools
Employing a facade pattern, Java Dev Kit allows the utilisation of various implementations for
generating, parsing, and verifying JSON Web Tokens (JWT), making token management flexible
and extensible.

### 7. Serial Number Generator
A utility to generate serial numbers following specified formats, useful for identifiers,
order numbers, and other sequential data.

## Getting Started

To include Java Dev Kit in your project, please refer to the version management module’s BOM to
ensure you use compatible and consistent dependency versions.

## Contributing

Java Dev Kit is open source and welcomes contributions. Please feel free to submit issues and pull
requests to help improve the toolkit.

## Licence

This project is licensed under the Apache Licence. See the LICENSE file for details.

---

For more detailed documentation on each module and usage examples, please refer to the `/docs`
directory or visit the project wiki.

---

Thank you for using Java Dev Kit, your trusted companion for enterprise Java development.