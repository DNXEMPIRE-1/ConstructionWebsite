/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.0.1
 **/
"use strict";

! function () {
    var a = function (a, b) {
            var c = document.createElement("canvas");
            "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(c);
            var d = c.getContext("2d");
            if (c.width = c.height = b.size, a.appendChild(c), window.devicePixelRatio > 1) {
                var e = window.devicePixelRatio;
                c.style.width = c.style.height = [b.size, "px"].join(""), c.width = c.height = b.size * e, d.scale(e, e)
            }
            d.translate(b.size / 2, b.size / 2), d.rotate((-0.5 + b.rotate / 180) * Math.PI);
            var f = (b.size - b.lineWidth) / 2;
            b.scaleColor && b.scaleLength && (f -= b.scaleLength + 2);
            var g = function (a, b, c) {
                    c = Math.min(Math.max(0, c || 1), 1), d.beginPath(), d.arc(0, 0, f, 0, 2 * Math.PI * c, !1), d.strokeStyle = a, d.lineWidth = b, d.stroke()
                },
                h = function () {
                    var a, c, e = 24;
                    d.lineWidth = 1, d.fillStyle = b.scaleColor, d.save();
                    for (var e = 24; e >= 0; --e) 0 === e % 6 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), d.fillRect(-b.size / 2 + a, 0, c, 1), d.rotate(Math.PI / 12);
                    d.restore()
                };
            Date.now = Date.now || function () {
                return +new Date
            };
            var i = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
                    window.setTimeout(a, 1e3 / 60)
                }
            }();
            this.clear = function () {
                d.clearRect(b.size / -2, b.size / -2, b.size, b.size)
            }, this.draw = function (a) {
                this.clear(), b.scaleColor && h(), b.trackColor && g(b.trackColor, b.lineWidth), d.lineCap = b.lineCap;
                var c;
                c = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, a > 0 && g(c, b.lineWidth, a / 100)
            }.bind(this), this.animate = function (a, c) {
                var d = Date.now();
                b.onStart(a, c);
                var e = function () {
                    var f = Math.min(Date.now() - d, b.animate),
                        g = b.easing(this, f, a, c - a, b.animate);
                    this.draw(g), b.onStep(a, c, g), f >= b.animate ? b.onStop(a, c) : i(e)
                }.bind(this);
                i(e)
            }.bind(this)
        },
        b = function (b, c) {
            var d, e = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    size: 110,
                    rotate: 0,
                    animate: 1e3,
                    renderer: a,
                    easing: function (a, b, c, d, e) {
                        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
                    },
                    onStart: function () {},
                    onStep: function () {},
                    onStop: function () {}
                },
                f = {},
                g = 0,
                h = function () {
                    this.el = b, this.options = f;
                    for (var a in e) e.hasOwnProperty(a) && (f[a] = c && "undefined" != typeof c[a] ? c[a] : e[a], "function" == typeof f[a] && (f[a] = f[a].bind(this)));
                    f.easing = "string" == typeof f.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[f.easing]) ? jQuery.easing[f.easing] : e.easing, d = new f.renderer(b, f), d.draw(g), b.dataset && b.dataset.percent && this.update(parseInt(b.dataset.percent, 10))
                }.bind(this);
            this.update = function (a) {
                return a = parseInt(a, 10), f.animate ? d.animate(g, a) : d.draw(a), g = a, this
            }.bind(this), h()
        };
    window.EasyPieChart = b
}();

var options = {
    scaleColor: false,
    trackColor: '#151515',
    barColor: '#ff7657',
    lineWidth: 5,
    lineCap: 'butt',
    size: 80
};

window.addEventListener('DOMContentLoaded', function () {
    var charts = [];
  [].forEach.call(document.querySelectorAll('.chart'), function (el) {
        charts.push(new EasyPieChart(el, options));
    });
});
