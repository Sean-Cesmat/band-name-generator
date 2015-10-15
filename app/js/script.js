$(function() {
    
   $('#quote').click(function() {
       //$('#adjective').text('Hello Ya\'ll');
        var checkedAdj = document.getElementById("includeAdj").checked;
        var checkedNoun = document.getElementById("includeNoun").checked;
        var checkedVerb = document.getElementById("includeVerb").checked;
        
        if (checkedAdj === true) {
            $.get("/adjective", function(response) {
                var adjective = response.word;
                $("#adjective").text(adjective + "  ");
            });
        }else if (checkedAdj === false) {
            $('#adjective').empty();
        }
        
        if (checkedVerb === true) {
            $.get("/verb", function(response) {
               var verb = response.word;
               $("#verb").text(verb); 
            });
        }else if (checkedVerb === false) {
            $('#verb').empty();
        }
        
        if (checkedNoun === true) {
            $.get("/noun", function(response) {
               var noun = response.word;
               $("#noun").text(noun + "  "); 
            });
         }else if (checkedNoun === false) {
            $('#noun').empty();
        }
   });
   
   $('#submitWords').on('submit', function(e) {
      e.preventDefault();
      
      $('#adjectiveRes').empty();
      $('#verbRes').empty();
      $('#nounRes').empty();
      $(':input').removeAttr('placeholder');
      var adjective = $('input[name=adjective]').val();
      var verb = $('input[name=verb]').val();
      var noun = $('input[name=noun]').val();
      var adjPost;
      var verbPost;
      var nounPost;
      
       $("#adjectiveRes").hide().fadeIn(2000).delay(3000).fadeOut(2000);
       $("#nounRes").hide().fadeIn(2000).delay(3000).fadeOut(2000);
       $("#verbRes").hide().fadeIn(2000).delay(3000).fadeOut(2000);
      
      if (adjective) {
          adjPost = {word: adjective};
          $.post('adjective', adjPost, function(response) {
             var adjectiveRes = response.msg;
             $('#adjectiveRes').text(adjectiveRes); 
          });
         
      }
      
      if (verb) {
          verbPost = {word: verb};
          $.post('verb', verbPost, function(response) {
             var verbRes = response.msg;
             $('#verbRes').text(verbRes); 
          });
          $('input[name=verb]').attr('placeholder', "Verb");
      }
      
      if (noun) {
          nounPost = {word: noun};
          $.post('noun', nounPost, function(response) {
             var nounRes = response.msg;
             $('#nounRes').text(nounRes); 
          });
          
      }
       
       $('input[name=adjective]').attr('placeholder', "adjective");
       $('input[name=verb]').attr('placeholder', "verb");
       $('input[name=noun]').attr('placeholder', "noun");
       $('input[type=text]').val('');
   });
   
   
   //console.log(getRandomWord(adjective)); 
});