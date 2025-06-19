# Usage <Badge>3.0.0</Badge>

## Version Catalogue

By using `version-catalogue`, you can manage the whole `onixbyte-toolbox` centralised.

### 1. Install Version Catalogue

::: code-group

```xml [Maven]
<dependencies>
    <dependency>
        <groupId>com.onixbyte</groupId>
        <artifactId>version-catalogue</artifactId>
        <version>${version}</version>
        <type>pom</type>
        <scope>import</scope>
    </dependency>
</dependencies>
```

```kotlin [Gradle (Kotlin DSL)]
dependencies {
    implementation(platform("com.onixbyte:version-catalogue:$version"))
}
```

```groovy [Gradle (Groovy DSL)]
dependencies {
    implementation platform('com.onixbyte:version-catalogue:$version')
}
```

:::

### 2. Use Version Catalogue

By using `version-catalogue`, you can install other dependencies without a version specifying.

**For example**:

::: code-group

```xml [Maven]
<dependencies>
    <dependency>
        <groupId>com.onixbyte</groupId>
        <artifactId>${otherDependencyArtefactId}</artifactId>
    </dependency>
</dependencies>
```

```kotlin [Gradle (Kotlin DSL)]
dependencies {
    implementation("com.onixbyte:$otherDependencyArtefactId")
}
```

```groovy [Gradle (Groovy DSL)]
dependencies {
    implementation 'com.onixbyte:$otherDependencyArtefactId'
}
```

:::

## Common Toolbox

### Encrypt and Decrypt Byte Array Data

```java:line-numbers{4,7}
byte[] secretKey = "43f72073956d4c81".getBytes(StandardCharsets.UTF_8);
byte[] originalData = "Hello World".getBytes(StandardCharsets.UTF_8);

byte[] encryptedData = AesUtil.encrypt(originalData, secretKey);
System.out.println(Arrays.toString(encryptedData));

byte[] decryptedData = AesUtil.decrypt(encryptedData, secretKey);
System.out.println(Arrays.toString(decryptData));
```

### Encrypt and Decrypt String Data

```java:line-numbers{4,7}
String secretKey = "43f72073956d4c81";
String originalData = "Hello World";

String encryptedData = AesUtil.encrypt(originalData, secretKey);
System.out.println(encryptedData);

String decryptedData = AesUtil.decrypt(encryptedData, secretKey);
System.out.println(decryptData);
```

> Note: The `iv` param is the same as `secret` by default. You can also customise your own `iv`
> param, by reference `AesUtil#encrypt(byte[], byte[], byte[])` and
> `AesUtil#decrypt(String, String, String)`.

### Base64 Encoding and Decoding

```java:line-numbers{2,5}
String original = "Hello, Base64!";
String encoded = Base64Util.encode(original);
System.out.println(encoded);

String decoded = Base64Util.decode(encode);
System.out.println(decoded);
System.out.println(decoded.equals(original));
```

### Base64 Encoding and Decoding with Specific Character Set

```java:line-numbers{4,7}
String original = "编码测试";  // Some unicode characters (Chinese)
String charset = StandardCharsets.UTF_8;

String encoded = Base64Util.encode(original, charset);
System.out.println(encoded);

String decoded = Base64Util.decode(encoded, charset);
System.out.println(decoded);
System.out.println(original.equals(decoded));
```

### Base64 URL Safe Encoding and Decoding with UTF-8

```java:line-numbers{3,10}
String original = "This is a test for URL-safe Base64 encoding+!";

String encodedUrl = Base64Util.encodeUrlComponents(original);
assertNotNull(encodedUrl);
assertNotEquals(original, encodedUrl);
// URL-safe encoding should not contain '+' or '/' characters
assertFalse(encodedUrl.contains("+"));
assertFalse(encodedUrl.contains("/"));

String decodedUrl = Base64Util.decodeUrlComponents(encodedUrl);
assertNotNull(decodedUrl);
assertEquals(original, decodedUrl);
```
