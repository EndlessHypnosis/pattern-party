

const tabClick = (e) => {
  let $targetTab = $(e);
  
  let $targetDiv = $(`#${$targetTab.data('tab')}`);

  $('.tab-div').css('display', 'none');
  $targetDiv.css('display', 'flex');

  $('.tab-label').removeClass('active-tab');
  $targetTab.addClass('active-tab');

}


$(document).ready(function () {
  $('.tab-label').on('click', (e) => {
    tabClick(e.target);
  });

  //set to tab 1 by default:
  tabClick($('.tab-label')[0]);
  // console.log('DFD', $('.tab-label')[0]);
  
});

// const targetIcon = $(`#${targetDiv.data('icon')}`);