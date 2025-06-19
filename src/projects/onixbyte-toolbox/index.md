# OnixByte Toolbox <Badge type="info">3.0.0</Badge>

OnixByte Toolbox is an open-source enterprise-grade Java development toolkit suite, designed to
streamline and enhance your software development workflow. It provides a collection of modular tools
and utilities tailored for various aspects of Java application development.

## Installation

You can install our toolbox by adding following codes to your build script.

::: code-group

```xml [Maven]
<dependencies>
    <dependency>
        <groupId>com.onixbyte</groupId>
        <artifactId>${artefactId}</artifactId>
        <version>${version}</version>
    </dependency>
</dependencies>
```

```kotlin [Gradle (Kotlin DSL)]
dependencies {
    implementation("com.onixbyte:$artefactId:$version")
}
```

```groovy [Gradle (Groovy DSL)]
dependencies {
    implementation 'com.onixbyte:$artefactId:$version'
}
```

:::

## Features

### 1. Version Catalogue

This module handles overall project management by utilising a BOM (Bill of Materials) to uniformly
manage the versions of all imported dependencies, ensuring consistency and reducing version
conflicts across your projects.

### 2. Common Toolkit

A comprehensive set of practical utilities to simplify common development tasks, including but not
limited to:

- **AesUtil**: Provides AES encryption functionality.
- **Base64Util**: Performs Base64 encoding and decoding for strings.
- **BoolUtil**: Executes logical AND and OR operations on multiple boolean expressions.
- **BranchUtil**: Reduces verbose `if-else` statements by combining `BoolUtil` with Lambda
  expressions for cleaner conditional flows.
- **CollectionUtil**: Utilities designed for convenient and efficient collection handling.
- **HashUtil**: Offers hashing operations on strings using various algorithms.
- **MapUtil** and **ObjectMapAdapter**: Facilitate conversions between `Map` objects and specified
  Java classes.
- **RangeUtil**: Generates ranged arrays based on specified bounds.

### 3. Identity Generator

A dedicated module providing a variety of generators for creating different types of globally unique
identifiers (GUIDs), suitable for distributed systems and enterprise applications.

### 4. Crypto Toolkit

Tools to load PEM-format key pair files (`PublicKey` and `PrivateKey`) into their corresponding Java
objects. This utility can also be integrated within the main development utilities module for
better cohesion.

### 5. Math Toolkit

A set of tools for mathematical and statistical computations, currently supporting:

- Chainable high-precision calculations.
- Quartile computations.

Consideration is given to merging this into the development utilities module for simplicity and
easy access.

## Getting Started

To include OnixByte Toolbox in your project, please refer to the version management module’s BOM to
ensure you use compatible and consistent dependency versions.

## Contributing

OnixByte Toolbox is open source and welcomes contributions. Please feel free to submit issues and
pull requests to help improve the toolkit.

## Licence

This project is licensed under MIT Licence. See the LICENSE file for details. You may refer to the
[License](/projects/onixbyte-toolbox/LICENSE.txt) here.

---

Thank you for using OnixByte Toolbox, your trusted companion for enterprise Java development.