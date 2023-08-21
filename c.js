window.onload = function () {
    const targetUrl = 'https://www.baidu.com';
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2);
    const urlWithParam = `${targetUrl}?timestamp=${timestamp}-${randomString}`;
    window.open(urlWithParam);
};
