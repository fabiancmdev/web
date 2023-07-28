/* Cambiar Dark-Light Mode */
const themeSwitch = document.querySelector('input');
    themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});
/* Efectos en Menú */
$(document).ready(function(){
    /* Cambiar ícono Menú mobile */
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
    });
    /* Fijar Menú */
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > 10 ){
            $('header').addClass('fixed-top');
            $('header').removeClass('menu');
        } else {
            $('header').addClass('menu');
            $('header').removeClass('fixed-top');
        }
    });
});
/* Iniciar Efectos de aparición */
AOS.init();
/* Eliminar espacios en blanco generados por el navegador */
function removeWhiteSpace(elem){
    let el = elem || document,
        cur = el.firstChild,
        temp,
        reg = /\S/;
    while(null != cur){
        temp = cur.nextSibling;
        if( 3 === cur.nodeType && !reg.test(cur.nodeValue) ){
        el.removeChild(cur);
        }else if( 1 === cur.nodeType ){
        removeWhiteSpace(cur);
        }
        cur = temp;
    }
}
removeWhiteSpace();
// Canvas
// var canvas = $('canvas').get(0);
// var ctx = canvas.getContext('2d');
// var particles = [];
// var mousePos = {
// 	x: window.innerWidth / 2,
// 	y: window.innerHeight / 2
// };
// console.log(mousePos)
// var multiply = 3000;
// function draw() {
// 	ctx.clearRect(0,0,canvas.width, canvas.height);
// 	if (particles.length < multiply) {
// 		for(let i = 0; i < multiply; i++) {
// 			let p = new Particle();
// 			particles.push(p);
// 		}
// 	}
// 	for(let i = particles.length - 1; i >= 0; i--) {
// 		particles[i].update();
// 		particles[i].draw();
// 	}
// 	requestAnimationFrame(draw);
// }
// class Particle {
// 	constructor(){
// 		this.reset();
// 	}
// 	reset() {
// 		this.radius = 1;
// 		this.x = mousePos.x;
// 		this.y = mousePos.y;
// 		this.explosionRadius = 2;
// 		this.angle = random(0 ,Math.PI * 2);
// 		this.color = 255;
// 		this.velocity = {
// 			x: Math.sin(this.angle) * this.explosionRadius,
// 			y: Math.cos(this.angle) * this.explosionRadius,
// 		};
// 		this.alpha = Math.random();
// 	}
// 	draw() {
// 		ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
//     ctx.fillStyle = `rgba(255, ${this.color}, ${this.color}, ${this.alpha})`;
//     ctx.fill();
// 	}
// 	update() {
// 		this.x += this.velocity.x;
// 		this.y += this.velocity.y;
// 		this.alpha -= 0.01;
// 		this.color = Math.abs(this.color - 5);
// 		if (this.alpha < 0) {
// 			this.reset();
// 		}
// 	}
// }
// function follow(e) {
// 	mousePos.x = e.pageX;
// 	mousePos.y = e.pageY;
// }
// function random(min,max) {
// 	return Math.random()*(max-min+1)+min;
// }
// function resize() {
// 	canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }
// $(function(){
// 	$(window).on('resize', resize);
// 	$(canvas).on('mousemove', follow);
// 	resize();
// 	draw();
// })
// Typed
var typed5 = new Typed('#typed', {
    strings: ['Front-End Developer', 'Digital Designer', 'Dachshund Lover'],
    startDelay: 1000,
    backDelay: 3000,
    typeSpeed: 50,
    backSpeed: 50,
    cursorChar: '_',
    smartBackspace: true,
    loop: true
});