---
title: openssl
categories:
- CRYPT
---

- [介绍](#介绍)
- [子命令](#子命令)
- [对称密码](#对称密码)
- [非对称密码](#非对称密码)
- [数字摘要](#数字摘要)

# 介绍

openssl是一个开源的工具集，C写的


是对各种加密算法的实现，并且实现了ssl/tsl，数字证书等，功能强大

很多语言，包括计算机都对其进行了引用，linux系统更是自带了openssl

由三部分组成


-  The SSL library(SSL、TLS开发代码库)
-  the Crypto library(密码学相关开发代码库)
-  command line tool(命令行工具，提供CA、证书等功能)


可以通过C来引入，也可以使用命令行

这里只说命令行

# 子命令

openssl 是一个工具集，所以使用的都是他的子命名，子命令有很多，常见的有

- dgst:Message Digest Calculation(摘要计算)
- enc:Encoding with Ciphers(对称加密解密使用)
- genrsa:Generation of RSA Private Key(生成一个rsa私钥)
- rsa：RSA key management(管理rsa，一般用来使用私钥生成对应的公钥)
- rsautl:RSA utility for signing, verification, encryption, and decryption(rsa的组件，用来签名，验证,加密，解密)

# 对称密码

对称密码很多，这里使用des3

加密文件
```
openssl enc -des3 -e -in txt -out des3_en 
```

对称加密和解密是需要输入密码的，只有密码正确才可以正确解密

解密文件
```
openssl enc -des3 -d -in des3_en -out des3_en_de
```

- `enc`:子命令
- `-des3`:表示使用des3加密方式进行加密，也可以选择其他的，比如`-base64`(这样就仅仅表示base64编码),`-rc`
- `-e`:表示该操作是加密
- `-d`:表示该操作是解密
- `-in`:输入的加密文件
- `-out`:输入的加密后的文件


# 非对称密码

这里直说rsa算法


非对称加密流程比较麻烦，这里分为:

## 1、生成私钥

```
openssl genrsa -out sercret 2048
```

- `genrsa`:子命令，生成rsa sercret
- `2048`:指定密钥长度，可以随意，一般是1024,2048，小的有危险


私钥的格式是:

```
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA+sBSTfJqlLN4KKjlN+4xdON5fb2mCkUW44fCx6J9xMdjzwKQ
-----END RSA PRIVATE KEY-----
```


## 2、使用私钥生成公钥

```
 openssl rsa -in sercret -pubout -out pubkey
```

- `rsa`:子命令，管理rsa密钥
- `pubout`:by default a private key is output: with this option a public key will be output instead

公钥格式

```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA+sBSTfJqlLN4KKjlN+4x
-----END PUBLIC KEY-----
```


## 3、使用公钥进行加密

理论上:

- 公钥加密，私钥加密
- 私钥加密，公钥解密

这两种方式都可以，但是openssl分别应用于两个场景，验证和加密

#### 私钥加密，公钥解密
公钥是谁都可以得到的，这样谁都可以得到原文，有什么意义呢？

有，可以确认发送者的身份，因为只有发送者有私钥，所以这种情况是用来验证发送者身份的

即使被别人劫持了，那也没有什么意义

### 公钥加密，私钥加密

确认了发送者的身份

那么就可以发送信息了，这个时候就得使用公钥加密了，接收者使用私钥解密

这个时候如果被劫持了，也没有意义，因为报文是被加密了，无法破解

> 综上，其实只有一条线是加密的，无法进行双向加密，但是如果使用两个密钥对，那么就可以实现双向加密通信了

---------------

这里只说加密

```
openssl rsautl -encrypt -in txt -out public_en -inkey public -pubin
```
- `rsautl`:子命令，rsa utility
- `-encrypt`:本次操作是加密
- `-inkey`:the input key file, by default it should be an RSA private key.
- `-pubin`:由于`inkey`默认是使用私钥的，但是这里使用的是公钥，所以需要指明这次的密码是公钥

## 4、使用私钥进行解密

```
openssl rsautl -decrypt -in public_en -out public_en_sercret_de -inkey sercret 
```
- `-encrypt`:本次操作是解密
- `-inkey`:the input key file, by default it should be an RSA private key.

# 数字摘要

数字摘要方法也很多，最出名的就是`md5`,`sha1`

```
openssl dgst -md5 -out md5 txt
openssl dgst -sha1 -out sha1 txt
```

- `dgst`:子操作,生成摘要
- `-md5`:使用md5方法进行计算
- `txt`:指明输入文件