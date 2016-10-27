A simple and colored log lib
============================

This lib is intended to only be used in NodeJS.
It will color your output, and will make sure it gets proper timestamping
Example:

	2016/10/26 00:44:37.484    ERROR    Error connecting to mongo:     {"name":"MongoError","message":"Authentication failed.","ok":0,"code":18,"errmsg":"Authentication failed."}

This sample identifies the following items:
1. timestamp
2. type of message (can be any one of debug, info, error)
3. user's message (text format)
4. JSON.stringified user's other objects passed as parameters.

How to use it ? 

	var log = require ('simple-color-log');

	log.debug("Started this service. I will print some random JSON now:", {firstJson: "Value", secondKey:"secondValue"}, {error: "This is an error on the same log method"});

That's it.
It knows about 3 logging methods and one shut-the-hell-up method. 

1. debug (loglevel 3)
2. info (loglevel 2)
3. error (loglevel 1)
4. none (loglevel 0)

Usage: 

	log.<method>("Strings", myJSONVar, anArrayVar, "some other strings");
