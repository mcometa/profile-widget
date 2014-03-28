'use strict';
var messages,
    App = {

      messages: [
        'How was the weather today? Was it sunny and perfect?',
        'Did you get stuck at traffic? Tell us more about it.',
        'What is on your mind?'
      ],
      
      init: function() {
        this.attachEvents();
        console.log("App:init()");
      },

      attachEvents: function() {
        var newPost   = document.querySelector('.js-new-post'),
            likePost  = document.querySelector('.js-like-post'),
            replyPost = document.querySelector('.js-reply-post');


        newPost.addEventListener('click', this.newPost, false);
        likePost.addEventListener('click', this.likePost, false);
        replyPost.addEventListener('click', this.replyPost, false);
      },

      newPost: function() {
        // Dim and disable other elements and append a new post form in the posts container. 
        // Replace the 'New Post' with 'Post' and show the cancel button
        // When done, post should be added at the last of the list of post. (update the time-ago)
        // Focus on the new post.

      },

      likePost: function() {
        // 
      },

      showPrev: function() {
        var activePost = document.querySelector('.post.active');
        var nextPostToActive = activePost.nextElementSibling();

        activePost.classList.remove('active');
        nextPostToActive.classList.add('active');
      },



    };

App.init();