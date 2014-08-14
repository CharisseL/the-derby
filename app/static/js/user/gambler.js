(function(){
  'use strict';

  $(document).ready(function(){
    $('.gambler').click(outputToConsole);
});

function outputToConsole(){
  var id = $(this).attr('data-id');
  var name =$(this).attr('data-name');
  console.log(id, name);

}

function sellAsset(){
  var id     = $(this).closest('.gambler').attr('data-gambler-id'),
      asset  = $(this).children('.name').text();
  }

})();
