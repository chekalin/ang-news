'use strict';

app.factory('Post', function ($resource) {
    return $resource('https://sweltering-fire-6468.firebaseio.com/posts/:id.json');
});