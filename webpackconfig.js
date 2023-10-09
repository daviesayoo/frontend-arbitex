const crypto = require("crypto");

crypto.engines.registerEngine(
  "./node_modules/openssl-engine",
  crypto.engines.ciphers,
  crypto.engines.Digest
);
crypto.getEngine("openssl");
