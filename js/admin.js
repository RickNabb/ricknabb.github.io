/**
* admin.js
* @author Nick Rabb <nrabb@outlook.com>
* This file holds all of the administrator functions that this website needs
*/

// VARIABLES
// ================

// State enums
var STATE_NONE = 0;
var STATE_BLOG_TOOLS = 1;

// FUNCTIONS
// ================

function authorize() {
  
}

function init() {
  changeState(STATE_NONE);
}

function showSideBar() {
  $("#side-toolbar").addClass("active");
}

function hideSideBar() {
  $("#side-toolbar").removeClass("active");
}

function changeState(state) {
  $("div[id*='state']").fadeOut();
  $("div[id*='side-toolbar-]").removeClass("active");
  switch (state) {
    case (STATE_NONE):
      $("#state-none").fadeIn();
      $("#side-toolbar-back").fadeOut();
      break;
    case (STATE_BLOG_TOOLS):
      $("#state-blog-tools").fadeIn();
      $("#side-toolbar-back").fadeIn();
      $("#side-toolbar-blog").addClass("active");
      break;
  }
  if (state !== STATE_NONE) {
    showSideBar();
  } else {
    hideSideBar();
  }
}

//init();