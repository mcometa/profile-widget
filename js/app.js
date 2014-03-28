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
        // Append a new post form in the posts container, replace the 'New'
      },

      showPrev: function() {
        var activePost = document.querySelector('.post.active');
        var nextPostToActive = activePost.nextElementSibling();

        activePost.classList.remove('active');
        nextPostToActive.classList.add('active');
      },



    };

App.init();