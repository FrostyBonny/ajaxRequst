function handleRequest() {

}

//  get请求带参数。
handleRequest.prototype.getDataUseGet = function(api, method, params) {
    var _url;
    var ajax = new Ajax();
    var token = sessionStorage.getItem('token');
    if(params) {
        _url = requstUrl.createUrl(api, method, params);
    } else {
        _url = requstUrl.createUrl(api, method);
    }
    return ajax.request(_url, {
        method: 'GET',
        params: params
    }, token);
}

//  get请求不带token
handleRequest.prototype.getDataUseGetWithoutToken = function(api, method, params) {
    var _url;
    var ajax = new Ajax();
    if(params) {
        _url = requstUrl.createUrl(api, method, params);
    } else {
        _url = requstUrl.createUrl(api, method);
    }
    return ajax.request(_url, {
        method: 'GET',
        params: params
    });
}

//  post请求带token
handleRequest.prototype.getDataUsePost = function(api, method, params) {
    var _url = requstUrl.createUrl(api, method);
    var token = sessionStorage.getItem('token');
    var ajax = new Ajax();
    console.log(createAjaxObj(_url, {
        method: 'POST',
        params: params
    }, token));
    return ajax.request(_url, {
        method: 'POST',
        params: params
    }, token);
}

//  post请求不带token
handleRequest.prototype.getDataUsePostWithOutToken = function(api, method, params) {
    var _url = requstUrl.createUrl(api, method);
    var ajax = new Ajax();
    return ajax.request(_url, {
        method: 'POST',
        params: params
    });
}

//  put请求带token
handleRequest.prototype.getDataUsePut = function(api, method, params) {
    var _url = requstUrl.createUrl(api, method);
    var token = sessionStorage.getItem('token');
    var ajax = new Ajax();
    return ajax.request(_url, {
        method: 'PUT',
        params: params
    }, token);
}

//  put请求不带token
handleRequest.prototype.getDataUsePutWithOutToken = function(api, method, params) {
    var _url = requstUrl.createUrl(api, method);
    var ajax = new Ajax();
    return ajax.request(_url, {
        method: 'PUT',
        params: params
    });
}

//  delete请求带token
handleRequest.prototype.deleteData = function(api, method, params) {
    var _url = requstUrl.createUrl(api, method);
    var token = sessionStorage.getItem('token');
    var ajax = new Ajax();
    return ajax.request(_url, {
        method: 'DELETE',
        params: params
    }, token);
}

var requstUrl = {
    baseURL: URL,
    API: {
        NEWS: '/news',
        LOGIN: '/',
    },
    // api为API中的参数，用于拼接url
    // method为API后的地址，用于拼接url最后面的东西。
    // params为get请求需要的参数
    createUrl: function(api, method, params) {
        var _requestUrl = this.baseURL + this.API[api] + method;
        if(params) {
            for(var i of params) {
                _requestUrl += (_requestUrl.indexOf("?") == -1 ? "?" : "&");
                _requestUrl += name + "=" + value;
            }
        }
        return _requestUrl;
    }
}
