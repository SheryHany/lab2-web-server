const fs = require('fs');

module.exports =
    fs.readdirSync('./assets', (err, files) => {
        console.log(files);
        // console.log('./assets/' + files[0]);
        for (let index = 0; index < files.length; index++) {
            fs.rename('./assets/' + files[index], './assets/' + ((index) + '.png'), (err) => {
                if (err) console.log(err);
                // console.log('Rename complete!');
            });
            // console.log(files[index]);
        }
    });
// console.log(imgArr);
