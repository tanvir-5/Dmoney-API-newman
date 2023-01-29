const newman = require('newman');
 
newman.run({
    collection: require('./collection/collection.json'),
    //collection:'https://api.postman.com/collections/1844288-53fbf500-7ff6-48ec-90b3-8b68df13ce88?access_key=PMAT-01GQ2N9AGHDPNWHCMNSER22W3M',
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
