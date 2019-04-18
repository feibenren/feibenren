---
title: crypto
categories: 
- NODEJS
---

# crypto

The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

crypto模块提供了一系列的加密功能，是openssl的一个封装


# 类

- Class: Certificate
- Class: Cipher
- Class: Decipher
- Class: DiffieHellman
- Class: ECDH
- Class: Hash
- Class: Hmac
- Class: Sign
- Class: Verify

##  Class: Hash

- crypto.createHash():创建hash类
- crypto.update():更新需要摘要的数据
- crypto.digest():生成摘要

# 方法&属性

- crypto.constants
- crypto.DEFAULT_ENCODING
- crypto.fips
- crypto.createCipher(algorithm, password[, options])
- crypto.createCipheriv(algorithm, key, iv[, options])
- crypto.createCredentials(details)
- crypto.createDecipher(algorithm, password[, options])
- crypto.createDecipheriv(algorithm, key, iv[, options])
- crypto.createDiffieHellman(prime[, primeEncoding][, generator][, generatorEncoding])
- crypto.createDiffieHellman(primeLength[, generator])
- crypto.createECDH(curveName)
- crypto.createHash(algorithm[, options])
- crypto.createHmac(algorithm, key[, options])
- crypto.createSign(algorithm[, options])
- crypto.createVerify(algorithm[, options])
- crypto.generateKeyPair(type, options, callback)
- crypto.generateKeyPairSync(type, options)
- crypto.getCiphers()
- crypto.getCurves()
- crypto.getDiffieHellman(groupName)
- crypto.getFips()
- crypto.getHashes()
- crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)
- crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
- crypto.privateDecrypt(privateKey, buffer)
- crypto.privateEncrypt(privateKey, buffer)
- crypto.publicDecrypt(key, buffer)
- crypto.publicEncrypt(key, buffer)
- crypto.randomBytes(size[, callback])
- crypto.randomFillSync(buffer[, offset][, size])
- crypto.randomFill(buffer[, offset][, size], callback)
- crypto.scrypt(password, salt, keylen[, options], callback)
- crypto.scryptSync(password, salt, keylen[, options])
- crypto.setEngine(engine[, flags])
- crypto.setFips(bool)
- crypto.timingSafeEqual(a, b)

