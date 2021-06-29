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
  //console.log(document.getElementsByName('neutral-rating-value').value);
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
  //console.log(document.getElementsByName('energizing-rating-value').value);
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
  //console.log(document.getElementsByName('dreamy-rating-value').value);
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
  //console.log(document.getElementsByName('relaxing-rating-value').value);
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
  //console.log(document.getElementsByName('anxious-rating-value').value);
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
  //console.log(document.getElementsByName('annoying-rating-value').value);
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
  //console.log(document.getElementsByName('happy-rating-value').value);
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
  //console.log(document.getElementsByName('sad-rating-value').value);
  return SetSadRatingStar();
});

//SetRatingStar();
$(document).ready(function() {});

let resetStars = function(){
  happy_star_rating.removeClass('fa-star').addClass('fa-star-o');
  happy_star_rating.siblings('input.happy-rating-value').val(0)
  //console.log(document.getElementsByName("happy-rating-value").value);

  sad_star_rating.removeClass('fa-star').addClass('fa-star-o');
  sad_star_rating.siblings('input.sad-rating-value').val(0);
  //document.getElementsByName("sad-rating-value").value = 0.0;

  annoying_star_rating.removeClass('fa-star').addClass('fa-star-o');
  annoying_star_rating.siblings('input.annoying-rating-value').val(0);
  //document.getElementsByName("annoying-rating-value").value = 0.0;
    
  anxious_star_rating.removeClass('fa-star').addClass('fa-star-o');
  anxious_star_rating.siblings('input.anxious-rating-value').val(0);
  //document.getElementsByName("anxious-rating-value").value = 0.0;

  relaxing_star_rating.removeClass('fa-star').addClass('fa-star-o');
  relaxing_star_rating.siblings('input.relaxing-rating-value').val(0);
  //document.getElementsByName("relaxing-rating-value").value = 0.0;

  dreamy_star_rating.removeClass('fa-star').addClass('fa-star-o');
  dreamy_star_rating.siblings('input.dreamy-rating-value').val(0);
  //document.getElementsByName("dreamy-rating-value").value = 0.0;

  energizing_star_rating.removeClass('fa-star').addClass('fa-star-o');
  energizing_star_rating.siblings('input.energizing-rating-value').val(0);
  //document.getElementsByName("energizing-rating-value").value = 0.0;

  neutral_star_rating.removeClass('fa-star').addClass('fa-star-o');
  neutral_star_rating.siblings('input.neutral-rating-value').val(0);
  //document.getElementsByName("neutral-rating-value").value = 0.0;
};


//Switch between emotify dataset and spotify
    $("#select_source").on("change", function() {
      var selectedOption = $(this).val();
      
      switch(selectedOption) {
        case "spotify":
          // code block
          document.querySelector(".search_spotify_pane").hidden=false;
          document.querySelector(".badge-pill").hidden=true; 
          document.querySelector(".emotify_song").hidden = true
          document.querySelector(".spotify_item").hidden=false;
          document.querySelector(".audioplayer").hidden=true;

      //Make spotify ready
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
                const max_songs = 12;
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


          break;
        case "emotify":
          // code block
          document.querySelector(".audioplayer").hidden=false;
          document.querySelector(".emotify_songs").hidden = false
          document.querySelector(".search_spotify_pane").hidden = true;
          document.querySelector(".badge-pill").hidden=false;
          document.querySelector(".spotify_item").hidden=true;
          init();

          break;
        default:
          // code block
          location.reload(); 
      } 
    });

let audio = document.getElementById("audio");
let playlist;
let tracks;
let current;
let currentSource;


audio.onplaying = ()=>{
  currentSource = audio.currentSrc;
  if (audio.currentTime >= 0){
    document.querySelector(".toggle_rating").hidden = false;
  }
};



init();
function init(){
    current = 0;
    audio = document.getElementById("audio");
    playlist = $('#music-list');
    tracks = playlist.find('li a');
    len = tracks.length - 1;
    audio.volume = .50;
    audio.play();
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio);
    });
    audio.addEventListener('ended',function(e){
        e.preventDefault();
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];    
        }
        //run($(link),audio[0]);
    });
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio.load();
        audio.play();
        link.addClass('white').siblings().removeClass('white').addClass('blue');
}

// $(".toggle_rating").click(()=>{
// console.log(currentSource);
    
// });
//submit rating form to flask app
$("#rating_form").submit((event)=>{
  event.preventDefault();
  let curSrc =  currentSource;
  let formData = {
    happy_rating: $("input[name='happy-rating-value']").val(),
    sadness_rating: $("input[name='sad-rating-value']").val(),
    annoying_rating: $("input[name='annoying-rating-value']").val(),
    anxious_rating: $("input[name='anxious-rating-value']").val(),
    relaxing_rating: $("input[name='relaxing-rating-value']").val(),
    dreamy_rating: $("input[name='dreamy-rating-value']").val(),
    energizing_rating: $("input[name='energizing-rating-value']").val(),
    neutral_rating: $("input[name='neutral-rating-value']").val(),
    curSrc: curSrc
    };
  $.ajax({
    url:"/submit_rating",
    data:formData,
    type:"POST",
    success: (res)=>{alert("Success!")},
    error: (err)=>{alert("Fatal Error!")}
  });
  resetStars();
  //console.log("submitted form successfully");
});


//pwd: wafrika2268