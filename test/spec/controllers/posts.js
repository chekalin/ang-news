'use strict';

describe('Controller: PostsCtrl', function () {

    // load the controller's module
    beforeEach(module('angNews'));

    var PostsCtrl,
        scope,
        mockPost;

    var expectedPosts = ['One', 'Two'];

    beforeEach(inject(function (_$q_) {
        mockPost = {
            all: expectedPosts,
            create: function() {
                var queryDeferred = _$q_.defer();
                return queryDeferred.promise;
            },
            delete: function() { }
        };
        spyOn(mockPost, 'create').andCallThrough();
    }));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        PostsCtrl = $controller('PostsCtrl', {
            $scope: scope,
            Post: mockPost
        });
    }));

    it('should initialize post with default url', function () {
        expect(scope.post.url).toBe('http://');
    });

    it('should load posts from Post service', function() {
       expect(scope.posts).toEqual(expectedPosts);
    });

    it('should save posts on submit', function () {
        var expectedPost = {url: 'some url', title: 'some title'};
        scope.post = expectedPost;
        scope.submitPost();
        expect(mockPost.create).toHaveBeenCalledWith(expectedPost);
    });

    it('should delete post', function() {
        spyOn(mockPost, 'delete');
        scope.deletePost(1);
        expect(mockPost.delete).toHaveBeenCalledWith(1);
    });
});
