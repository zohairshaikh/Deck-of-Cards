# Deck of Cards

## Setup

Install the dependencies.
Recommended versions
* pip (v9.0.1)
* npm (v5.0.3)
* node (v6.2.0)


Installing python dependencies
```
pip install -r <path-to-projecr>/requirement.txt
```

Installing npm dependencies

```
cd <path-to-project>/static/
npm install
```

Compile NPM dependencies
```
npm start
```

Installing redis-server
https://redis.io/topics/quickstart

Start redis server
```
redis-server
```
> If you wish to change settings for redis server, Configuration option is in ocd_cards.py


Export flask app to the environment variable

```
export FLASK_APP=<path_to_app>/ocd_cards/ocd_cards.py 
```

Run application
```
flask run
```