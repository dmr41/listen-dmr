$("document").ready(function (){
  $.getJSON("data.json", function(songs) {
    var songTemplate = $("#songTemplate").html();
    var html_out = Mustache.to_html(songTemplate, songs);
     $("#music-player").html(html_out);
  });

  $('#music-player').on('click', '.fa-play' ,function() {
    var n = $(this).closest('article div h2').attr("id") - 1;
    var head = $(this).closest('article div h2').data("songtitle");
    console.log(head);
    head = "Now Playing: " + head;
    $('audio').each(function(){
      this.pause();
    });

    $('audio')[n].play();
      $(this).addClass("fa-pause").removeClass("fa-play");
      $('.fa').not(this).removeClass("fa-pause").addClass("fa-play");

    $('#head-grab h2').addClass("play-header").removeClass('noplay-header');
    $('.play-header').text(head);
    });

  $('#music-player').on('click', '.fa-pause', function() {
    var n = $(this).closest('article div h2').attr("id") - 1;
    $('article div audio')[n].pause();
    $(this).addClass("fa-play").removeClass("fa-pause");

    $('#head-grab h2').removeClass("play-header").addClass('noplay-header');
    $('.noplay-header').text('Select a song!');

  });

});
