WAP-SDK-js
-----------


WAP Javascript SDK 

## Development

### init mongose's test data

```
cd path/to/WAP-SDK-js
coffee db_init
```

### local development

add hosts in your `/ect/hosts`

```
#WAP
127.0.0.1 wap.com
127.0.0.1 api.wap.com
127.0.0.1 test.wap.com
```

### install

```
npm install
```

### build & wacth

```
gulp
```

### generate the md5 for `wap.js`

```
gulp md5
```

License
-------

MIT