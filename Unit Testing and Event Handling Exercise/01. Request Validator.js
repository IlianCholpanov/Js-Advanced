function requesValidator(obj) {
    let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /\w+./gm;
    let messageText = /^[^<>\\&'"]+/gm;

    if (!obj.method || !validMethod.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }
    if (!obj.uri || !uriRegex.test(obj.uri)) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!obj.version || !validVersion.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    if (obj.message || messageText.test(obj.message)) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;

}
requesValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})