import Script from "next/script"

export default function Trailer() {

    return (
        <> <div
            className={`w-0 h-0 lg:w-72 lg:h-72 block absolute left-0 top-0 -z-10 blur-3xl pointer-events-none rounded-full bg-gray-700`}
            id="mc_1">
        </div>
            <Script>
                {`document.addEventListener('mousemove', function (ev) {
                var elem = document.getElementById("mc_1");
                if (elem == null)
                return;
    var x = ev.x - elem.offsetWidth / 2;
    var y = ev.y - elem.offsetHeight / 2;
    var keyframes = {
        transform: "translate(".concat(x, "px, ").concat(y, "px)"),
    };
    elem.animate(keyframes, {
        duration: 1100,
        fill: 'forwards'
    });
});`}
            </Script>
        </>
    )
}