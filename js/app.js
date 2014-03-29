'use strict';
var messages,
    self,
    App = {

      messages: [
        'How was the weather today? Was it sunny and perfect?',
        'Did you get stuck at traffic? Tell us more about it.',
        'What is on your mind?'
      ],
      
      init: function() {
        self = this;
        self.attachEvents();
        console.log("App:init()");
      },

      attachEvents: function() {
        var newPost   = document.querySelector('.js-new-post'),
            likePost  = document.querySelector('.js-like-post'),
            replyPost = document.querySelector('.js-reply-post'),
            nextPost  = document.querySelector('.js-next-post'),
            prevPost  = document.querySelector('.js-prev-post');


        newPost.addEventListener('click', self.newPost, false);
        likePost.addEventListener('click', self.likePost, false);
        replyPost.addEventListener('click', self.replyPost, false);
        nextPost.addEventListener('click', self.nextPost, false);
        prevPost.addEventListener('click', self.prevPost, false);
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

      nextPost: function(e) {
        e.preventDefault();
        var activePost = document.querySelector('.post.active');
        var nextPostToActive = activePost.nextElementSibling;

        if (nextPostToActive !== null) {
          activePost.classList.remove('active');
          activePost.classList.add('to-left');
          
          self.hideElement( activePost );

          nextPostToActive.classList.remove('hide');
          nextPostToActive.classList.add('active', 'to-left');          
        }

        console.log( nextPostToActive );
      },

      prevPost: function(e) {
        e.preventDefault();
        var activePost = document.querySelector('.post.active');
        var prevPostToActive = activePost.previousElementSibling;
        
        

        activePost.classList.remove('active');
        prevPostToActive.classList.add('active');
      },

      hideElement: function(elem) {
        setTimeout( function() {
          elem.classList.add('hide');
        }, 200);
      }



    };

App.init();