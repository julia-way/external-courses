const returnData = function (obj) {
    for (const key in obj) {
        console.log(key, ':', obj[key]);
    };

    return;
};

module.exports = returnData;
