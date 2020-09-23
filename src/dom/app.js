import $ from "jquery";

let $videoContainerDIV = $(".hero__video");
let video = document.getElementById("bgvideo");
console.log(video);
console.log($("p"));
let $video = $("video");
console.log($video);

$(window)
  .resize(function () {
    let heightVideo = $video.height();
    $videoContainerDIV.css("height", heightVideo);

    // var videoWidth = $video.width(),
    //   windowWidth = $window.width(),
    //   marginLeftAdjust = (windowWidth - videoWidth) / 2;
    let widthVideo = $video.width();
    console.log(widthVideo);
    $videoContainerDIV.css("width", widthVideo);
  })
  .resize();
