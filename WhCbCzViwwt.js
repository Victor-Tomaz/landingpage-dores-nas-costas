document.getElementById("buy_button").addEventListener('click',function () {
    gtag('event', 'begin_checkout', {
        'debug_mode': true
      });
}); 

//setTimeout(function () {
//    $(".WhCbCzViwwt").css("display", "block");
//}, 213e4);

var today = new Date();

dd = (today.getDate() + "").padStart(2, "0");
mm = (today.getMonth() + 1 + "").padStart(2, "0");
yyyy = today.getFullYear();

today = (dd + "/" + mm + "/" + yyyy);

$(document).find("#current-date").html(today);

jQuery(function (a) {
    a(document).ready(function () {
        (window._wq = window._wq || []),
            _wq.push({
                id: "_all",
                onReady: function (b) {
                    var c = a(".wistia_embed").attr("id", "wistiaGenID_" + b.hashedId()),
                        d = Wistia.api.all(),
                        e = b.hashedId();
                    (b = Wistia.api("wistiaGenID_")),
                        a(".overlay-video").click(function () {
                            b.play(), a(".overlay-video").fadeOut("slow");
                        }),
                        a(".lock-video").click(function () {
                            b.pause();
                        }),
                        b.bind("pause", function () {
                            a(".overlay-video").fadeIn("slow");
                        }),
                        b.bind("end", function () {
                            a(".overlay-video").fadeIn("slow");
                        });
                },
                options: { plugin: { videoThumbnail: { clickToPlayButton: !1 } } },
            });
    });
});

jQuery(function () {
    var b = 2e3 * Math.random() + 1e3;
    min_max1 = ["422", "486"];
    var c = parseInt(min_max1[0]),
        d = parseInt(min_max1[1]);
    (min = Math.ceil(c)),
        (max = Math.floor(d)),
        setInterval(function () {
            var a = Math.floor(Math.random() * (max - min + 1) + min);
            if (a >= c && a <= d) {
                for (var b = ("" + a).split(""), e = "", f = 0; f < b.length; f++) e += "<span>" + b[f] + "</span>";
                $(document).find("#changing-number").html(e);
            }
        }, b);
});
