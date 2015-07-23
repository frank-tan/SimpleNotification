$(function () {
  'use strict';

  setTimeout(function () {
    $('#notif-area').append('<div id="dialog1" class="notif-box info-box hidden"><span class="notif-close notif-icon"></span><p class="notif-title">Title</p><span class="notif-info-icon notif-indicator-icon notif-icon"></span><div class="notif-body"><p>Body</p></div></div>');
    $('#dialog1').slideDown();
  }, 2000);
  setTimeout(function () {
    $('#notif-area').append('<div id="dialog2" class="notif-box success-box hidden"><span class="notif-close notif-icon"></span><p class="notif-title">Title</p><span class="notif-success-icon notif-indicator-icon notif-icon"></span><div class="notif-body"><p>Body</p></div></div>');
    $('#dialog2').slideDown();
  }, 4000);

  setTimeout(function () {
    $('#notif-area').append('<div id="dialog3" class="notif-box fail-box hidden"><span class="notif-close notif-icon"></span><p class="notif-title">Title</p><span class="notif-fail-icon notif-indicator-icon notif-icon"></span><div class="notif-body"><p>Body</p></div></div>');
    $('#dialog3').slideDown();
  }, 6000);

  setTimeout(function () {
    $('#notif-area').append('<div id="dialog4" class="notif-box warning-box hidden"><span class="notif-close notif-icon"></span><p class="notif-title">Title</p><span class="notif-warning-icon notif-indicator-icon notif-icon"></span><div class="notif-body"><p>Body</p></div></div>');
    $('#dialog4').slideDown();
  }, 8000);

  setTimeout(function () {
    $('#dialog1').slideUp();
  }, 10000);

  setTimeout(function () {
    $('#dialog2').slideUp();
  }, 12000);

  setTimeout(function () {
    $('#dialog3').slideUp();
  }, 14000);

  setTimeout(function () {
    $('#dialog4').slideUp();
  }, 16000);
});