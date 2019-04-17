

var $j = jQuery;

function text_to_index(ele, text) {
    for (var i=0; i<ele.length;i++) {
        if (ele[i].childNodes[0].nodeValue === text){
            return i;
        }
    }
    return undefined;
}

function index_to_text(ele, index) {

  if (isNaN(index)){
      return ele[1].childNodes[0].nodeValue
  }

  if (index <= 0) {
    return ele[ele.length -1].childNodes[0].nodeValue
  }

  if (index >= ele.length) {
    return ele[1].childNodes[0].nodeValue
  }

  return ele[index].childNodes[0].nodeValue
}

$j(document).ready(function(){
     $j('.variations .value').prepend( '<span id="b-min" class="bottone"> - </span>' );
     $j('.variations .value').append( '<span id="b-up" class="bottone"> + </span>' );
     $j('.variations .value .reset_variations').remove();

     $j( "#b-min" ).click(function() {

       var select = $j('#quantita');
       var options = $j('#quantita option');

       var index = text_to_index(options, $j('#quantita').val());
       var new_index = index_to_text(options, --index);

       $j("#quantita").val(new_index).trigger('change');

     });

     $j( "#b-up" ).click(function() {


       var select = $j('#quantita');
       var options = $j('#quantita option');

       var index = text_to_index(options, $j('#quantita').val());
       var new_index = index_to_text(options, ++index);

       $j("#quantita").val(new_index).trigger('change');

     });

});
