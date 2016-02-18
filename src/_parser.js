import raml from 'raml-1-parser';
import path from 'path';


export default function(inputFile) {
    /*
    var parser = new Promise((resolve, reject) => {
        var filePath = path.resolve(__dirname, inputFile);
        console.log('trying to parse file:', filePath);

        setTimeout(() => {
            resolve({foo: 'bar'})
        }, 500)

    });*/

    var filePath = path.resolve(__dirname, inputFile);

    console.log('trying to parse:', filePath);
    var api = raml.loadApi(filePath);

    return api;
}