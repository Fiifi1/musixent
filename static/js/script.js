// Happy 😁
// Sad 😥
// Annoying 😒
// Anxious 😩😰
// Relaxing 😎
// Dreamy 😇
// Energizing ⚡
// Neutral 😐
let happy_star_rating = $('.happy-star-rating .fa');
let sad_star_rating=$('.sad-star-rating .fa');
let annoying_star_rating=$('.annoying-star-rating .fa');
let anxious_star_rating=$('.anxious-star-rating .fa');
let relaxing_star_rating=$('.relaxing-star-rating .fa');
let dreamy_star_rating=$('.dreamy-star-rating .fa');
let energizing_star_rating=$('.energizing-star-rating .fa');
let neutral_star_rating=$('.neutral-star-rating .fa');

let SetNeutralRatingStar = function() {
  return neutral_star_rating.each(function() {
    if (parseInt(neutral_star_rating.siblings('input.neutral-rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

neutral_star_rating.on('click', function() {
  neutral_star_rating.siblings('input.neutral-rating-value').val($(this).data('rating'));
  document.getElementsByName('neutral-rating-value').value = parseInt($(this).data('rating'));
  console.log(document.getElementsByName('neutral-rating-value').value);
  return SetNeutralRatingStar();
});

let SetEnergizingRatingStar = function() {
  return energizing_star_rating.each(function() {
    if (parseInt(energizing_star_rating.siblings('input.energizing-rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

energizing_star_rating.on('click', function() {
  energizing_star_rating.siblings('input.energizing-rating-value').val($(this).data('rating'));
  document.getElementsByName('energizing-rating-value').value = parseInt($(this).data('rating'));
  console.log(document.getElementsByName('energizing-rating-value').value);
  return SetEnergizingRatingStar();
});

let SetDreamyRatingStar = function() {
  return dreamy_star_rating.each(function() {
    if (parseInt(dreamy_star_rating.siblings('input.dreamy-rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

dreamy_star_rating.on('click', function() {
  dreamy_star_rating.siblings('input.dreamy-rating-value').val($(this).data('rating'));
  document.getElementsByName('dreamy-rating-value').value = parseInt($(this).data('rating'));
  console.log(document.getElementsByName('dreamy-rating-value').value);
  return SetDreamyRatingStar();
});

let SetRelaxingRatingStar = function() {
  return relaxing_star_rating.each(function() {
    if (parseInt(relaxing_star_rating.siblings('input.relaxing-rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

relaxing_star_rating.on('click', function() {
  relaxing_star_rating.siblings('input.relaxing-rating-value').val($(this).data('rating'));
  document.getElementsByName('relaxing-rating-value').value = parseInt($(this).data('rating'));
  console.log(document.getElementsByName('relaxing-rating-value').value);
  return SetRelaxingRatingStar();
});

let SetAnxiousRatingStar = function() {
  return anxious_star_rating.each(function() {
    if (parseInt(anxious_star_rating.siblings('input.anxious-rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

anxious_star_rating.on('click', function() {
  anxious_star_rating.siblings('input.anxious-rating-value').val($(this).data('rating'));
  document.getElementsByName('anxious-rating-value').value = parseInt($(this).data('rating'));
  console.log(document.getElementsByName('anxious-rating-value').value);
  return SetAnxiousRatingStar();
});

let SetAnnoyingRatingStar = function() {
  return annoying_star_rating.each(function() {
    if (parseInt(annoying_star_rating.siblings('input.annoying-rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

annoying_star_rating.on('click', function() {
  annoying_star_rating.siblings('input.annoying-rating-value').val($(this).data('rating'));
  document.getElementsByName('annoying-rating-value').value = parseInt($(this).data('rating'));
  console.log(document.getElementsByName('annoying-rating-value').value);
  return SetAnnoyingRatingStar();
});

let SetHappyRatingStar = function() {
  return happy_star_rating.each(function() {
    if (parseInt(happy_star_rating.siblings('input.happy-rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

happy_star_rating.on('click', function() {
  happy_star_rating.siblings('input.happy-rating-value').val($(this).data('rating'));
  document.getElementsByName('happy-rating-value').value = parseInt($(this).data('rating'));
  console.log(document.getElementsByName('happy-rating-value').value);
  return SetHappyRatingStar();
});

let SetSadRatingStar = function() {
  return sad_star_rating.each(function() {
    if (parseInt(sad_star_rating.siblings('input.sad-rating-value').val()) >= parseInt($(this).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};

  sad_star_rating.on('click', function() {
    sad_star_rating.siblings('input.sad-rating-value').val($(this).data('rating'));
  document.getElementsByName('sad-rating-value').value = parseInt($(this).data('rating'));
  console.log(document.getElementsByName('sad-rating-value').value);
  return SetSadRatingStar();
});

//SetRatingStar();
$(document).ready(function() {});

let resetStars = function(){
    let allStars = $('.star-rating .fa');
    return allStars.each(()=>{
        return $(this).removeClass('fa-star').addClass('fa-star-o');
    });
}

//pwd: wafrika2268
// Happy 😁
// Sad 😥
// Annoying 😒
// Anxious 😩😰
// Relaxing 😎
// Dreamy 😇
// Energizing ⚡
// Neutral 😐


/**
 * Get songs from
 */
//Document has been loaded
$( document ).ready(function() {
    // Helper Function to Extract Access Token for URL
   const getUrlParameter = (sParam) => {
     let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
         sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#') : [],
         sParameterName,
         i;
     let split_str = window.location.href.length > 0 ? window.location.href.split('#') : [];
     sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
     for (i = 0; i < sURLVariables.length; i++) {
         sParameterName = sURLVariables[i].split('=');
         if (sParameterName[0] === sParam) {
             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
         }
     }
 };

   // Get Access Token
   const accessToken = getUrlParameter('access_token');

   // AUTHORIZE with Spotify (if needed)
   // *************** REPLACE THESE VALUES! *************************
   let client_id = 'c81cd87048404778a6fc82b97ca910b0';
   // Use the following site to convert your regular url to the encoded version:
   // https://www.url-encode-decode.com/
   let redirect_uri = 'https%3A%2F%2Fmusixent.herokuapp.com%2F'; // GitHub Pages URL or whatever your public url to this app is
   // *************** END *************************

   const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;
   // Don't authorize if we have an access token already
   if(accessToken == null || accessToken == "" || accessToken == undefined){
     window.location.replace(redirect);
   }
   $(window).("onload", ()=>{
    $.ajax({
     url: `https://api.spotify.com/v1/search?q=love&type=track`,
     type: 'GET',
     headers: {
         'Authorization' : 'Bearer ' + accessToken
     },
     success: function(data) {
       // Load our songs from Spotify into our page
       let num_of_tracks = data.tracks.items.length;
       let count = 0;
       // Max number of songs is 12
       const max_songs = 20;
       while(count < max_songs && count < num_of_tracks){
         // Extract the id of the FIRST song from the data object
         let id = data.tracks.items[count].id;
         // Constructing two different iframes to embed the song

         //console.log(id)

         let src_str = `https://open.spotify.com/embed/track/${id}`;
         let iframe = `<div class='song'><iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`;
         let parent_div = $('#song_'+ count);
         parent_div.html(iframe);
         count++;
       }
     }
   });
 });
   // Search button has been clicked
   $( "#search_button" ).click(function() {
     //Get the value of the search box
     let raw_search_query = $('#search_text').val();
     let search_query = encodeURI(raw_search_query);
     // Make Spotify API call
     // Note: We are using the track API endpoint.
     $.ajax({
       url: `https://api.spotify.com/v1/search?q=${search_query}&type=track`,
       type: 'GET',
       headers: {
           'Authorization' : 'Bearer ' + accessToken
       },
       success: function(data) {
         // Load our songs from Spotify into our page
         let num_of_tracks = data.tracks.items.length;
         let count = 0;
         // Max number of songs is 12
         const max_songs = 20;
         while(count < max_songs && count < num_of_tracks){
           // Extract the id of the FIRST song from the data object
           let id = data.tracks.items[count].id;
           // Constructing two different iframes to embed the song

           //console.log(id)

           let src_str = `https://open.spotify.com/embed/track/${id}`;
           let iframe = `<div class='song'><iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`;
           let parent_div = $('#song_'+ count);
           parent_div.html(iframe);
           count++;
         }
       }
     }); // End of Spotify ajax call
   }); // End of search button
 }); // End of document.ready