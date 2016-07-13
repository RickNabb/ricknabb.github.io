/**
* blog.js
* (C) Nick Rabb 2016
* Nick Rabb <nrabb@outlook.com>
* A file to hold functions related to performing functions related to the blog feature of the site .
*/

/*jslint node:true */
'use strict';

// VARIABLES
// ======================================



// FUNCTIONS
// ======================================

/**
 * Create a new blog post in the database unpublished.
 * @author Nick Rabb <nrabb@outlook.com>
 * @param {object} db      The MySQL database connection
 * @param {string} title   The blog post title
 * @param {string} bodyURL The URL to get the post body HTML from
 * @param {string} author  The author of the post
 * @param {Array}  tags    An array of strings containing tags for the post
 * @param {object} res     A JSON object to return to the REST service
 */

function createBlogPost(db, title, bodyURL, author, tags, res) {
  
}

// EXPORTS
// ======================================

exports.createBlogPost = createBlogPost;