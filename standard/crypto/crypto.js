/*
 CryptoCrypto
	Determining if crypto support is unavailable
	Class: Certificate
		Certificate.exportChallenge(spkac)
		Certificate.exportPublicKey(spkac[, encoding])
		Certificate.verifySpkac(spkac)
		Legacy API
			new crypto.Certificate()
			certificate.exportChallenge(spkac)
			certificate.exportPublicKey(spkac)
			certificate.verifySpkac(spkac)
	Class: Cipher
		cipher.final([outputEncoding])
		cipher.setAAD(buffer[, options])
		cipher.getAuthTag()
		cipher.setAutoPadding([autoPadding])
		cipher.update(data[, inputEncoding][, outputEncoding])
	Class: Decipher
		decipher.final([outputEncoding])
		decipher.setAAD(buffer[, options])
		decipher.setAuthTag(buffer)
		decipher.setAutoPadding([autoPadding])
		decipher.update(data[, inputEncoding][, outputEncoding])
	Class: DiffieHellman
		diffieHellman.computeSecret(otherPublicKey[, inputEncoding][, outputEncoding])
		diffieHellman.generateKeys([encoding])
		diffieHellman.getGenerator([encoding])
		diffieHellman.getPrime([encoding])
		diffieHellman.getPrivateKey([encoding])
		diffieHellman.getPublicKey([encoding])
		diffieHellman.setPrivateKey(privateKey[, encoding])
		diffieHellman.setPublicKey(publicKey[, encoding])
		diffieHellman.verifyError
	Class: DiffieHellmanGroup
	Class: ECDH
		Class Method: ECDH.convertKey(key, curve[, inputEncoding[, outputEncoding[, format]]])
		ecdh.computeSecret(otherPublicKey[, inputEncoding][, outputEncoding])
		ecdh.generateKeys([encoding[, format]])
		ecdh.getPrivateKey([encoding])
		ecdh.getPublicKey([encoding][, format])
		ecdh.setPrivateKey(privateKey[, encoding])
		ecdh.setPublicKey(publicKey[, encoding])
	Class: Hash
		hash.copy([options])
		hash.digest([encoding])
		hash.update(data[, inputEncoding])
	Class: Hmac
		hmac.digest([encoding])
		hmac.update(data[, inputEncoding])
	Class: KeyObject
		keyObject.asymmetricKeyType
		keyObject.export([options])
		keyObject.symmetricKeySize
		keyObject.type
	Class: Sign
		sign.sign(privateKey[, outputEncoding])
		sign.update(data[, inputEncoding])
	Class: Verify
		verify.update(data[, inputEncoding])
		verify.verify(object, signature[, signatureEncoding])
	crypto module methods and properties
		crypto.constants
		crypto.DEFAULT_ENCODING
		crypto.fips
		crypto.createCipher(algorithm, password[, options])
		crypto.createCipheriv(algorithm, key, iv[, options])
		crypto.createDecipher(algorithm, password[, options])
		crypto.createDecipheriv(algorithm, key, iv[, options])
		crypto.createDiffieHellman(prime[, primeEncoding][, generator][, generatorEncoding])
		crypto.createDiffieHellman(primeLength[, generator])
		crypto.createDiffieHellmanGroup(name)
		crypto.createECDH(curveName)
		crypto.createHash(algorithm[, options])
		crypto.createHmac(algorithm, key[, options])
		crypto.createPrivateKey(key)
		crypto.createPublicKey(key)
		crypto.createSecretKey(key)
		crypto.createSign(algorithm[, options])
		crypto.createVerify(algorithm[, options])
		crypto.generateKeyPair(type, options, callback)
		crypto.generateKeyPairSync(type, options)
		crypto.getCiphers()
		crypto.getCurves()
		crypto.getDiffieHellman(groupName)
		crypto.getFips()
		crypto.getHashes()
		crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)
		crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
		crypto.privateDecrypt(privateKey, buffer)
		crypto.privateEncrypt(privateKey, buffer)
		crypto.publicDecrypt(key, buffer)
		crypto.publicEncrypt(key, buffer)
		crypto.randomBytes(size[, callback])
		crypto.randomFillSync(buffer[, offset][, size])
		crypto.randomFill(buffer[, offset][, size], callback)
		crypto.scrypt(password, salt, keylen[, options], callback)
		crypto.scryptSync(password, salt, keylen[, options])
		crypto.setEngine(engine[, flags])
		crypto.setFips(bool)
		crypto.sign(algorithm, data, key)
		crypto.timingSafeEqual(a, b)
		crypto.verify(algorithm, data, key, signature)
	Notes
		Legacy Streams API (pre Node.js v0.10)
		Recent ECDH Changes
		Support for weak or compromised algorithms
		CCM mode
	Crypto Constants
		OpenSSL Options
		OpenSSL Engine Constants
		Other OpenSSL Constants
		Node.js Crypto Constants

 Crypto: The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

 Use require('crypto') to access this module.

*/
const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e






