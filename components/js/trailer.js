document.addEventListener('mousemove', function (ev) {
    var elem = document.getElementById("mc_1");
    if (elem == null)
        return;
    var x = ev.x - elem.offsetWidth / 2;
    var y = ev.y - elem.offsetHeight / 2;
    var keyframes = {
        transform: "translate(".concat(x, "px, ").concat(y, "px)"),
    };
    elem.animate(keyframes, {
        duration: 800,
        fill: 'forwards'
    });
});