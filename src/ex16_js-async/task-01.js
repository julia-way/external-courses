const fetchImitation = function(url, method) {

    return new Promise((resolve, reject) => {
        let result;
        let data = 'surname';

        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        if (method === 'POST') xhr.setRequestHeader('Content-type', 'application/json');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responceText);
            } else {
                reject(xhr.statusText);
            }
        }
        
        if (method === 'GET') result = xhr.send();
        if (method === 'POST') result = xhr.send(data);

        return result;   
    });
};
