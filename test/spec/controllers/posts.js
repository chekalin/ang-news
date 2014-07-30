'use strict';

describe('Controller: PostsCtrl', function () {

    // load the controller's module
    beforeEach(module('angNews'));

    var PostsCtrl,
        scope,
        mockPost;

    var expectedPosts = ['One', 'Two'];

    beforeEach(function () {
        mockPost = {
            get: function() {
                return expectedPosts
            },
            save: function() { },
            delete: function() { }
        };

        module(function ($provide) {
            $provide.value('Post', mockPost);
        });
    });

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

    it('should load posts from Post service', function() {
       expect(scope.posts).toEqual(expectedPosts);
    });

    it('should save posts on submit', function () {
        spyOn(mockPost, 'save');
        var expectedPost = {url: 'some url', title: 'some title'};
        scope.post = expectedPost;
        scope.submitPost();
        expect(mockPost.save).toHaveBeenCalledWith(expectedPost, jasmine.any(Function));
    });

    it('should delete post', function() {
        spyOn(mockPost, 'delete');
        scope.deletePost(1);
        expect(mockPost.delete).toHaveBeenCalledWith({id: 1}, jasmine.any(Function));
    });
});
