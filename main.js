var hook = require('http-event-hook');

hook.on('push', function(payload) {
    console.log(payload);
});

hook.listen(4567, function() {
    console.log('Server listening on port 4567');
});
