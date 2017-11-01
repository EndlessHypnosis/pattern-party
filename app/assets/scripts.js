const tabClick = (e) => {
  let $targetTab = $(e);
  let $targetDiv = $(`#${$targetTab.data('tab')}`);

  $('.tab-div').css('display', 'none');
  $targetDiv.css('display', 'flex');

  $('.tab-label').removeClass('active-tab');
  $targetTab.addClass('active-tab');

  $('.tab-label span:nth-of-type(2)').text('+');
  $targetTab.find('span:nth-of-type(2)').text('-');
}

const menuClick = (e) => {
  // let $menu = $(e);

  if ($(window).width() <= 800) {
    $('.nav-links').toggleClass('on-off');
    $('.search-wrapper').toggleClass('on-off');
  }

}

// do this stuff once
$(document).ready(function () {
  $('.tab-label').on('click', (e) => {
    tabClick(e.currentTarget);
  });

  $('.thex-wrapper').on('click', (e) => {
    menuClick(e.currentTarget);
  })

  //set to tab 1 by default:
  tabClick($('.tab-label')[0]);
});