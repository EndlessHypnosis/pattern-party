

const tabClick = (e) => {
  let $targetTab = $(e.target);
  
  let $targetDiv = $(`#${$targetTab.data('tab')}`);

  $('.tab-div').css('display', 'none');
  $targetDiv.css('display', 'block');

}


$(document).ready(function () {
  $('.tab-label').on('click', tabClick);
  //our script goes here...
});

// const targetIcon = $(`#${targetDiv.data('icon')}`);