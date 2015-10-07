;(function() {
    'use strict';
    var BASE_URL = 'http://api.wap.com:3000/api/v1'

    var wa_tag = document.getElementsByTagName('script')[0]
    var website_id = wa_tag.getAttribute('id')
    var COOKIE_KEY_WA_USER_ID  = 'wa_user_id'

    var __WA_DEBUG_ = function(msg){
        var debug = false
        if(debug)
            console.log(msg)
    }

    var addEvent = function(website_id, category, action, opt_label, opt_value) {
        __WA_DEBUG_(website_id + ' ->' + category + ' ' + action + ' ' + opt_label  + ' ' + opt_value)

        fetch(BASE_URL + '/website/:website_id/events'.replace(':website_id', website_id), {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    category: category,
                    action: action,
                    opt_label: opt_label,
                    opt_value: opt_value

                })
            })
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                if (json.msg) {
                    console.error(json.msg)
                }
            })
    }

    var observer = new ArrayObserver(_wa);
    observer.open(function(splices) {
        console.log(splices)
        // respond to changes to the elements of arr.
        splices.forEach(function(splice) {
            if (splice.addedCount >0){
                var obj = _wa[splice.index]
                addEvent(website_id, obj.category, obj.action, obj.opt_label, obj.opt_value)
            }
        });
    });
    //basicly record
    (function(website_id){
        var e = document.createElement('img');
        e.src = BASE_URL + '/wap.png?wid=' + website_id;
    })(website_id)
})()
