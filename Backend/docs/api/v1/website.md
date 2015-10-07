## Website

- [创建website](#创建website)
- [获取website列表](#获取website列表)
- [获取一个website信息](#获取一个website信息)

### 创建website

`POST /websites`

#### 参数

Name|Type|Required|Description
:---:|:---:|:---:|:---:|
domain|String|√|网站的域名


#### 响应

```
$ http -f post http://localhost:3000/api/v1/websites domain=jayinton.com app_key=1234567890xxxxx create_time=1431865303217
```

```
HTTP/1.1 201 Created

{
    "__v": 0,
    "_id": "5558882f8b1c14f83a76edd3",
    "app_key": "1c0d472aa310028965577447d39920f1",
    "create_time": "2015-05-17T12:23:11.109Z",
    "domain": "jayinton.com"
}
```

#### 获取website列表

`GET /websites`

#### 响应

```
$ http get http://localhost:3000/api/v1/websites
```

```
HTTP/1.1 200 OK

[
       {
           "_id": "555b2059e365c79f8f14028a",
           "app_key": "001993a18490aa30702b6f79f26a0100",
           "create_time": "2015-05-19T11:36:57.792Z",
           "domain": "jayinton.com"
       },
       {
           "_id": "555b2059e365c79f8f14028b",
           "app_key": "cc34f99f5784900e0683aee670cf70b7",
           "create_time": "2015-05-19T11:36:57.795Z",
           "domain": "testapi.com"
       },
]
```

#### 获取一个website信息

`GET /websites/:website_id`

#### 响应

```
$ http get http://localhost:3000/api/v1/websites/55588d5ee8b6e7683bbc03fc
```

```
HTTP/1.1 200 OK

{
    "app_key": "9ced7b8469d81044c855ca32938fec34",
    "create_time": "2015-05-17T12:45:18.190Z",
    "domain": "testapi.com"
}
```







