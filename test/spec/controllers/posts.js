'use strict';

describe('Controller: PostsCtrl', function () {

    // load the controller's module
    beforeEach(module('angNews'));

    var PostsCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        PostsCtrl = $controller('PostsCtrl', {
            $scope: scope
        });
    }));

    it('should initialize post with default url', function () {
        expect(scope.post.url).toBe('http://');
    });

    it('should add post to posts on submit', function () {
        var expectedPost = {url: 'some url', title: 'some title'};
        scope.post = expectedPost;
        scope.submitPost();
        expect(scope.posts[0]).toBe(expectedPost);
    });

    it('should reset post to default on submit', function () {
        scope.post = {url: 'some url', title: 'some title'};
        scope.submitPost();
        expect(scope.post.url).toBe('http://');
    });

    it('should delete post', function() {
        scope.posts = ['post1', 'post2', 'post3'];
        scope.deletePost(1);
        expect(scope.posts.length).toBe(2);
        expect(scope.posts[0]).toBe('post1');
        expect(scope.posts[1]).toBe('post3');
    });
});
