const formatArr = arr => arr.map(x => x.trim());

const csvToObj = csv => {
    const lines = csv.split('\n');
    const regexStr = /[,;]/;
    const result = [];
    const headers = formatArr(lines[0].split(regexStr));

    lines.slice(1).forEach(line => {
        const obj = {};
        const currLine = line.split(regexStr);

        if (line.length){
            headers.forEach((header, index) => {
                obj[header] = currLine[index];
            });

            result.push(obj);
        }
    });

    return result;
};

module.exports = {
    csvToObj
};
