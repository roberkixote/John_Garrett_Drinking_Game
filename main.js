var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-21408993-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function load() {
    // Check for <audio> tag support, if so link "Yes" to sound byte of the allmighty John Garrett.
    var audioSupported = false,
        yes = document.getElementById('yes');
    try {
        audioSupported = !!(document.createElement('audio').canPlayType);
    } catch(e) {
        audioSupported = false;
    }
    if (audioSupported) {
        var yesClip = document.createElement('audio');
        yesClip.preload = 'auto';
        yesClip.src = 'yes.wav';
        yes.addEventListener('click', function(e) {
            yesClip.play();
            return false;
        }, false);
        document.body.appendChild(yesClip);
    } else {
        yes.outerHTML = '"Yes"';
    }
}