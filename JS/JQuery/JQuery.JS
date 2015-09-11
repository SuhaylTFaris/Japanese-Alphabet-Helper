var symbols = [];
symbols[0] = {
  name: 'あ',
  url: 'Sound/Voice 001.m4a',
  description: '<p>あ in hiragana (romanised a). あ is based on the sōsho style of kanji 安. In the modern Japanese system of alphabetical order, it occupies the first position of the alphabet, before い. Additionally, it is the 36th letter in Iroha, after て, before さ. Its hiragana resembles the kana (no) combined with a cross.</p>',
  gif: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Hiragana_%E3%81%82_stroke_order_animation.gif'
};
symbols[1] = {
  name: 'い',
  url: 'Sound/Voice 002.m4a',
  description: '<p>い in hiragana(romanised as i). い is based on the sōsho style of the kanji character 以. In the modern Japanese system of alphabetical order, it occupies the second position of the alphabet, between あ and う. Additionally, it is the first letter in Iroha, before ろ. Representing the sound [i]. </p>',
  gif: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Hiragana_%E3%81%84_stroke_order_animation.gif'
};
symbols[2] = {
  name: 'う',
  url: 'Sound/Voice 003.m4a',
  description: '<p>う in hiragana(romanised u). In the modern Japanese system of alphabetical order, they occupy the third place in the modern Gojūon (五十音) system of collating kana. In the Iroha, they occupied the 24th position, between む and ゐ. In the Gojūon chart (ordered by columns, from right to left), う lies in the first column (あ行, "column A") and the third row (う段, "row U"). Representing the sound [u͍].</p>',
  gif: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Hiragana_%E3%81%86_stroke_order_animation.gif'
};
symbols[3] = {
  name: 'え',
  url: 'Sound/Voice 004.m4a',
  description: '<p>In Japanese writing, the kana え (hiragana) (romanised e) occupies the fourth place, between う and お, in the modern Gojūon (五十音) system of collating kana. In the Iroha, they occupy the 34th, between こ and て. In the table at right (ordered by columns, from right to left), え lies in the first column (あ行, "column A") and the fourth row (え段, "row E"). Representing the sound [e].</p>',
  gif: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Hiragana_%E3%81%88_stroke_order_animation.gif'
};
symbols[4] = {
  name: 'お',
  url: 'Sound/Voice 005.m4a',
  description: '<p>In Japanese writing, the kana お (hiragana) occupies the fifth place, between え and か, in the modern Gojūon (五十音) system of collating kana. In the Iroha, they occupy the 27th, between の and く. In the table at right (ordered by columns, from right to left), お lies in the first column (あ行, "column A") and the fifth row (お段, "row O"). Representing the sound [o].</p>',
  gif: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Hiragana_%E3%81%8A_stroke_order_animation.gif'
};

// A $( document ).ready() block.
$(document).ready(function() {

    var buttons = $('.btn');
    for(i=0; i < buttons.length; i++){
      // refactor into jquery
      buttons[i].addEventListener('click', function(e){
        $('#modal-data').html('');
        $('#my-modal-label').html('');
        $('#modal-image').html('');
        createPopup(this.innerHTML);
      });
    }

    var createPopup = function(symbol){
      for(i=0; i < symbols.length; i++){
        if(symbol === symbols[i].name) {
          var currentsymbol = symbols[i];

          var modalTitleName = $("<h2>" + currentsymbol.name + "</h2>" );
          modalTitleName.appendTo($('#my-modal-label'));
          $("#my-modal-label").css("text-align", "center");

          var loader_img = $("<img id='a' src=" + currentsymbol.gif + ">" );
          loader_img.appendTo($('#modal-image'));
          $("#a").css("width", "75px");
          $("#a").css("height", "75px");

          $('#audio').attr('src', symbols[i].url);

          var description = $("<p>" + currentsymbol.description + "</p>" );
          description.appendTo($('#modal-data'));

          $("modal-data").css("text-align", "center");
          }
        }
      };


    var renderSymbol = function(symbol){
};
});

$('#play-btn').on('click', function(e) {
  e.preventDefault();
  console.log('test');
  $('#audio').get(0).play();
});
