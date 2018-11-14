function Ajax() {
    this.xhr = '';
}

//  options里面应该有{请求类型，参数，token}
Ajax.prototype.request = function(url, options, token) {
    this.xhr = new XMLHttpRequest();
    var _headerConfig = {};
    if(url.indexOf('getcaptcha') !== -1) {
        _headerConfig = {
            Accept: 'image/png',
            responseType: 'arraybuffer',
        }
    } else if(url.indexOf('files/upload') !== -1) {
        _headerConfig = {
            'Content-Type': 'multipart/form-data',
            responseType: 'json',
        }
    } else {
        _headerConfig = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            responseType: 'json',
        }
    }

    if("method" in options) {
        options.method = options.method.toUpperCase();
    } else {
        options.method = "GET";
    }

    if(options.method !== "GET") {
        if(!(options.params instanceof FormData)) {
            options.params = JSON.stringify(options.params);
        }
    }

    this.xhr.open(options.method, url, true);
    for(var _i in _headerConfig) {

        if(_i === 'responseType') {
            this.xhr.responseType = _headerConfig[_i];
        } else {
            this.xhr.setRequestHeader(_i, _headerConfig[_i]);
        }
    }
    if(token) {
        this.xhr.setRequestHeader("token", token);
    }
    this.xhr.send(options.params);
    return this;
}

Ajax.prototype.complete = function(completeFunction) {
    this.xhr.onreadystatechange = function(e) {
        if(this.readyState === 4) {
            completeFunction(this);
        }
    }
    return this;
}
