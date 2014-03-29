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
        self.setDisabledButton();
        console.log("App:init()");
      },

      attachEvents: function() {
        var newPost   = document.querySelector('.js-new-post'),
            likePost  = document.querySelector('.js-like-post'),
            replyPost = document.querySelector('.js-reply-post'),
            nextPost  = document.querySelector('.js-next-post'),
            prevPost  = document.querySelector('.js-prev-post');


        newPost.addEventListener('click', self.newPost, true);
        likePost.addEventListener('click', self.likePost, true);
        replyPost.addEventListener('click', self.replyPost, true);
        nextPost.addEventListener('click', self.nextPost, true);
        prevPost.addEventListener('click', self.prevPost, true);
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
          
          activePost.classList.add('slide', 'to-left');
          self.hideElement( activePost );

          nextPostToActive.classList.add('slide', 'from-right');
          self.showElement( nextPostToActive, ['slide', 'from-right', 'to-left', 'active'] );
        }

        self.setDisabledButton();

        console.log( nextPostToActive );
      },

      prevPost: function(e) {
        e.preventDefault();
        console.log(e);
        var activePost = document.querySelector('.post.active');
        var prevPostToActive = activePost.previousElementSibling;

        if (prevPostToActive !== null ) {
          
          activePost.classList.add('slide', 'to-right');
          self.hideElement( activePost );

          prevPostToActive.classList.add('slide', 'from-left');
          self.showElement( prevPostToActive, ['slide', 'from-left', 'to-right', 'active'] );
        }

        self.setDisabledButton();

        console.log( prevPostToActive );
      },

      hideElement: function(elem) {
        setTimeout( function() {
          elem.classList.add('hide');
          elem.classList.remove('active');
        }, 315);

        self.removeSlideClasses(elem);
      },

      showElement: function(elem, className) {
        setTimeout(function(){
          elem.classList.remove('hide');
        }, 310);
        className.forEach( function( element ) {
          console.log(element);
          setTimeout(function(){
            elem.classList.add(element);
            self.removeSlideClasses(elem);
          }, 315);
        });   
      },

      removeSlideClasses: function(elem) {
        setTimeout( function() {
          elem.classList.remove('slide', 'from-right', 'from-left', 'to-right', 'to-left');
        }, 315);
      },

      setDisabledButton: function() {
        //check if has next or prev post, if no post, add class `disabled` to the button

        var elemNext = document.querySelector('.post.active').nextElementSibling,
            elemPrev = document.querySelector('.post.active').previousElementSibling,
            nextBtn = document.querySelector('a.next'),
            prevBtn = document.querySelector('a.prev');

        if ( elemNext === null ) {
          nextBtn.classList.add('disabled');
        } else {
          nextBtn.classList.remove('disabled');
        }

        if ( elemPrev === null ) {
          prevBtn.classList.add('disabled');
        } else {
          prevBtn.classList.remove('disabled');
        }
      }



    };

App.init();