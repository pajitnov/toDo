brew update && brew upgrade
brew tap mongodb/brew
brew install mongodb-community@4.2
brew services start mongodb-community@4.2
mongod --config /usr/local/etc/mongod.conf --fork
ps aux | grep -v grep | grep mongod
mongo