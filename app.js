$("document").ready(function (){
var hmm =  $.getJSON("data.json", function(songs) {
    var songTemplate = $("#songTemplate").html();
    var html_out = Mustache.to_html(songTemplate, songs);
     $("#music-player").html(html_out);
     datas = function(){
        return songs;
     };

  $('#music-player').on('click', '.fa-play' , function() {
    var hi = datas();
    var n = $(this).closest('article div h2').attr("id") - 1;
    var songString = "tracks/" + hi.tracks[n].file + ".mp3"
    $('audio').attr('src', '');
    $(this).siblings('audio').attr('src', songString);
    var head = $(this).closest('article div h2').data("songtitle");
    head = "Now Playing: " + head;
    $('audio')[n].play();
    $(this).addClass("fa-stop").removeClass("fa-play");
    $('.fa').not(this).removeClass("fa-stop").addClass("fa-play");
    $('#head-grab h2').addClass("play-header").removeClass('noplay-header');
    $('.play-header').text(head);
    });
  });

  $('#music-player').on('click', '.fa-stop', function() {
    $(this).siblings('audio').attr('src', '')
    $(this).addClass("fa-play").removeClass("fa-stop");
    $('#head-grab h2').removeClass("play-header").addClass('noplay-header');
    $('.noplay-header').text('Select a song!');
  });
});
