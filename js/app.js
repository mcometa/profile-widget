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

      likePost: function(e) {

        // remove the button border, change the color to pink, increase the like count

        e.preventDefault();
        e.cancelBubble = true;

        var postMetaLike = document.querySelector('.post.active .meta .likes .count'),
            activePost = document.querySelector('.post.active'),
            likes;

        // handle event bubbling the hard way
        if ( e.target.classList.contains('fa') ) {
          if (!e.target.parentElement.classList.contains('liked')) {
            e.target.parentElement.classList.add('liked');
            activePost.classList.add('liked');
            activePost.querySelector('.fa-heart').classList.add('pulsate-once');
            likes = parseInt(postMetaLike.textContent);
            likes+=1;
            postMetaLike.textContent = likes;
          }
        } 
        if ( e.target.classList.contains('js-like-post') && !e.target.classList.contains('liked') ) {
          e.target.classList.add('liked');
          activePost.classList.add('liked');
          activePost.querySelector('.fa-heart').classList.add('pulsate-once');
          likes = parseInt(postMetaLike.textContent);
          likes+=1;
          postMetaLike.textContent = likes;
        }


        console.log(e.target.classList);
      },

      nextPost: function(e) {
        e.preventDefault();
        var activePost = document.querySelector('.post.active');
        var nextPostToActive = activePost.nextElementSibling;

        if ( nextPostToActive !== null ) {
          
          activePost.classList.add('slide', 'to-left');
          self.hideElement( activePost );

          nextPostToActive.classList.add('slide', 'from-right');
          self.showElement( nextPostToActive, ['slide', 'from-right', 'to-left', 'active'] );
        }

        self.setDisabledButton();
        self.toggleLikeButton( nextPostToActive );
      },

      prevPost: function(e) {
        e.preventDefault();
        var activePost = document.querySelector('.post.active');
        var prevPostToActive = activePost.previousElementSibling;

        if ( prevPostToActive !== null ) {
          
          activePost.classList.add('slide', 'to-right');
          self.hideElement( activePost );

          prevPostToActive.classList.add('slide', 'from-left');
          self.showElement( prevPostToActive, ['slide', 'from-left', 'to-right', 'active'] );
        }

        self.setDisabledButton();
        self.toggleLikeButton( prevPostToActive );
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

        // sidenote: forEach is not needed, if you wish to change all classNames use the Element.className instead. GAHHHH!
        className.forEach( function( element ) {
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
      },

      toggleLikeButton: function( post ) {
        if ( post !== null && !post.classList.contains('liked') ) {
          document.querySelector('.js-like-post').classList.remove('liked');
        } else if ( post !== null && post.classList.contains('liked') ) {
          document.querySelector('.js-like-post').classList.add('liked');
        }
      }



    };

App.init();