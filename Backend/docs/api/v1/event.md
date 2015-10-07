## Event

- [创建event](#创建event)
- [获得event列表](#获得event列表)
- [查看event信息](#查看event信息)

### 创建event

`POST /website/:website_id/events`

#### 参数

Name|Type|Required|Description
:---:|:---:|:---:|:---:|
category|String|√|要监控的目标的类型名称
action|String|√|用户跟网页进行交互的动作名称
opt_label|String|x|事件的一些额外信息
opt_value|Number|x|跟事件相关的数值

#### 响应

```
$ http -f post http://localhost:3000/api/v1/website/55588d5ee8b6e7683bbc03fc/events category=HomePage action=buy opt_label=books opt_value=85
```

```
HTTP/1.1 201 Created

{
    "__v": 0,
    "_id": "555893628b1c14f83a76edd4",
    "action": "buy",
    "category": "HomePage",
    "create_time": "2015-05-17T13:10:58.553Z",
    "opt_label": "books",
    "opt_value": 85,
    "website_id": "55588d5ee8b6e7683bbc03fc"
}
```

### 获得event列表

`GET /website/:website_id/events`

#### 响应

```
$ http get http://localhost:3000/api/v1/website/55588d5ee8b6e7683bbc03fc/events
```

```
HTTP/1.1 200 OK

[
    {
        "_id": "555893628b1c14f83a76edd4",
        "action": "buy",
        "category": "HomePage",
        "create_time": "2015-05-17T13:10:58.553Z",
        "opt_label": "books",
        "opt_value": 85,
        "website_id": "55588d5ee8b6e7683bbc03fc"
    }
]
```

### 查看event信息

`GET /website/:website_id/events/:event_id'`

```
$ http get http://localhost:3000/api/v1/website/55588d5ee8b6e7683bbc03fc/events/555893628b1c14f83a76edd4
```

```
HTTP/1.1 200 OK

{
    "_id": "555893628b1c14f83a76edd4",
    "action": "buy",
    "category": "HomePage",
    "create_time": "2015-05-17T13:10:58.553Z",
    "opt_label": "books",
    "opt_value": 85,
    "website_id": "55588d5ee8b6e7683bbc03fc"
}
```

