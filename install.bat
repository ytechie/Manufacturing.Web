@echo off

echo Please make sure you have node/npm installed. You'll get some interesting errors if that's not the case. :-)

echo Installing prerequisites...
call npm install

echo Installing bower...
call npm install -g bower

echo Installing gulp...
call npm install -g gulp

echo If you received an error that looks like "Error: ENOENT, stat 'c:\users\you\AppData\Roaming\npm", you should create that folder manually and ensure that it's in your path.

pause