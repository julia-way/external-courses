const fetchImitation = function(url, method) {

    return new Promise((resolve, reject) => {
        let result;

        if (method === 'GET') {
            let xhrGet = new XMLHttpRequest();
            xhrGet.open('GET', url, true);
            xhrGet.onreadystatechange = function() {
                if (xhrGet.readyState === 4 && xhrGet.status === 200) {
                    resolve(xhrGet.responceText);
                } else {
                    reject(xhrGet.statusText);
                }
            }

            result = xhrGet.send();
        }

        if (method === 'POST') {
            let xhrPost = new XMLHttpRequest();
            let data = 'surname';

            xhrPost.open('POST', url, true);
            xhrPost.setRequestHeader('Content-type', 'application/json');
            xhrPost.onreadystatechange = function() {
                if (xhrPost.readyState === 4 && xhrPost.status === 200) {
                    resolve(xhrPost.responceText);
                } else {
                    reject(xhrPost.statusText);
                }
            }
    
            result = xhrPost.send(data);
        }   

        return result;   
    });
};
