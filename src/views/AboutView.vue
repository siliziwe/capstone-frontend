<template>
<section class="page-wrap">
				<div>
        <div class="wrapper">
            <div class="container" id="cont">
            <h1>About Us</h1>
            </div>
        </div>
				</div>

			<article id="block1" class="module-block">


				<img class="right1" src="https://i.postimg.cc/k5sN657h/RD-Y2-Personal-assitant.jpg" alt="" />

				<p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deleniti officiis ipsum, sunt cupiditate minus, id ut sapiente vitae eum voluptate expedita sint dolor eos molestiae quam harum non? Pariatur?
					<br>
					<br>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus dolorum necessitatibus, excepturi facere recusandae doloremque sit aperiam suscipit voluptas impedit natus consequuntur assumenda! Tempora soluta animi et tempore illo!

				</p>

				<!-- <ul class="social">
					<li><router-link to="#">Link 1</router-link></li>
					<li><router-link to="#">Link 2</router-link></li>
					<li><router-link to="#">Link 3</router-link></li>
				</ul> -->

			</article>



			<section id="block2" class="module-block">

				<h2>Technology</h2>

			<router-linkrticle class="post">

					<h3>
						<router-link to="#">
							lorem picsum
							<img src="https://i.postimg.cc/Px5wZdVS/SONY-LIMIT-BREAKER-MAX.jpg" alt="" />
						</router-link>
					</h3>

					<strong class="date">Nov 28th, 2061</strong>

					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero cum ratione alias veritatis tempora reprehenderit aliquid necessitatibus nemo unde. Quia, quod. Perferendis, corrupti maiores beatae doloremque eum ipsa porro!<router-link to="https://ivypanda.com/essays/camping-its-advantages-and-disadvantages/">Read full article &rarr;</router-link></p>

				</router-linkrticle>

				<router-linkrticle class="post">

					<h3>
						<router-link to="#">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							<img src="https://i.postimg.cc/5twhvVQQ/drone2.jpg" alt="" />
						</router-link>
					</h3>

					<strong class="date">Jun 7th, 2056</strong>

					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores cupiditate libero obcaecati architecto, dolore placeat facere illo, laboriosam nam soluta assumenda laborum suscipit aliquid numquam voluptatibus animi sed! Illum, vero!<router-link to="#">Read full article &rarr;</router-link></p>

				</router-linkrticle>

			</section>


			<section id="block3" class="module-block">

				<h2>More Equipment</h2>

				<ul class="gallery">

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/PJWGbnRR/ADAM-S-HAND.jpg"/>
						</router-link>
					</li>
					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/brs815hX/MGD-09-PROGRAMMING-DEVICE.jpg"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/DfJwJWyS/151228-Hoverboard.jpg"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/WbZzKdQB/Smart-AR-glasses.jpg"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/xTSG7W6g/top-10-real-life-superpowers-rollerman.jpg"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/nL3h7BDD/GLOVE-REMOTE.jpg"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/ryBxK2cL/Drone.jpg"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/d3r78Dvc/F100-Cleaning-assistant.jpg"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/P5rxqSLj/MIL-03-Smoke-grenade.jpg"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/rwP8wMX1/lexus-hoverboard.webp"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/y8kH5tgk/RD-5-R-Radio-scan.webp"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/sD2dQqJw/smart-glasses.jpg"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/vmGWB9Jn/vpp-futuristic-police-motorcycle-papercraft-01.jpg"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/W4QT86sF/futuristic-inventions-3.jpg"/>
						</router-link>
					</li>

					<li>
						<router-link to="#">
							<img alt="" src="https://i.postimg.cc/g2CTBM6W/videoblocks-cloud-computing-futuristic-holographic-display-hologram-technology-b-zrpkq2g7-thumbnail.png"/>
						</router-link>
					</li>

				</ul>
			</section>

		</section>

</template>

<script>

</script>

<style scoped>
h1{
font-size: 11rem;
color: #fff;
font-weight: 500;
text-align: center;
}

#cont{
	box-shadow: 10px, 10px #272727;
}


header:after,
nav:after,
footer:after,
.module-block:after,
.gallery:after,
.social:after {
content: ".";
display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}


body {
	font-size: 16px;
	line-height: 1.5;
	color: #000;
}

header footer article section nav {
	display:block;
}

a {
	color:#4698d2;
	text-decoration:none;
	-webkit-transition: all .3s ease-in-out;
	-moz-transition: all .3s ease-in-out;
	-o-transition: all .3s ease-in-out;
	transition: all .3s ease-in-out;
}

a:hover, a:focus {
	color: #000;
}



h2 {
	font-size: 24px;
	letter-spacing:2px;
	text-transform: uppercase;
	font-weight: normal;
	margin: 0 0 24px;
	line-height: 1;
}


h3 {
	font-size: 30px;
	font-weight: normal;
	margin: 0 0 24px;
	line-height: 1;
}

p {
	margin-bottom: 24px;
}



header { margin: 20px 40px 60px; }

header div {
	margin-top: 40px;
	width: 60%;
	float: left;
}

header p {
	color: #272727;
	font-size: 18px;
	margin: 0;
	font-family: 'Poppins', sans-serif;
}

nav {
	float: right;
	width: 40%;
}


nav ul { float: right; }

nav li {
	float: left;
	list-style: none;
	padding: 4px 0;
}

nav a {
	color:#565656;
	display: block;
	font-size:12px;
	margin:5px 2px;
	padding:10px 10px 8px;
	text-transform:uppercase;
	font-weight: bold;
	letter-spacing: 1px;
	border-right: 1px dashed rgba(0, 0, 0, .3);
}

nav li:last-child a { border-right: none; }


nav a:hover, nav a:focus {
	text-decoration:none;
	background-color:#f0f0f0;
	border-color: transparent;
}




.social li {
	float: left;
	list-style: none;
}


.social a {
	display: block;
	font-size:12px;
	margin:5px 2px;
	padding:10px 10px 8px;
	text-transform:uppercase;
	font-weight: bold;
	letter-spacing: 1px;
	border-right: 1px dashed rgba(0, 0, 0, .1);
}

.social li:last-child a { border: none; }





.post {
	position: relative;
	margin-bottom: 50px;
	padding-left: 24%;
}

.post h3 {
	margin-bottom: 10px;
}


.date {
	display: block;
	margin-bottom: 10px;
}



.gallery a img {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;

}

.gallery a:hover img, .gallery a:focus img {
	-webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);
}



.page-wrap {
	max-width:960px;
	padding: 0 20px;
	margin:0 auto;
}

.module-block {
	background-color: #fff;
	margin:0 0 70px 0;
	padding: 40px;
	-webkit-box-shadow: inset 0px 0px 13px rgba(68, 68, 68, 0.1);
	-moz-box-shadow: inset 0px 0px 13px rgba(68, 68, 68, 0.1);
	box-shadow: inset 0px 0px 13px rgba(68, 68, 68, 0.1);
	border: 1px solid rgba(0, 0, 0, .1);
}

.module-block h2 {
	padding-bottom: 30px;
	margin-bottom: 30px;
	border-bottom: 1px dashed rgba(0,0,0,.3);
}

.gallery {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-auto-rows: 150px 200px;
gap: 1rem;
}

li:nth-child(2) {
grid-row: span 2;
}

li:nth-child(4) {
grid-row: span 3;
}



* {
box-sizing: border-box;
}

u {
padding: 0;
margin: 0;
list-style-type: none;
}

img {
display: block;
width: 100%;
height: 100%;
object-fit: cover;
}

</style>