radie = 100
active = 0
start = 0
stopp = 0
level = 0

class Ball
	constructor : (@x, @y, @dx, @dy, @r, @g, @b) ->
		@active = true
	rita : ->
		sw 7
		sc 1
		if not @active then return 
		if @x > width-radie then @dx = -@dx
		if @x < radie then @dx = -@dx
		@x += @dx

		if @y > height-radie then @dy = -@dy else @dy+=0.1

		@y += @dy
		fc @r,@g,@b
		circle @x,@y,radie
	inside : (mx,my) -> dist(@x,@y,mx,my) < radie

balls = []

reset = ->
	start = new Date()
	level++
	radie = radie*0.99
	for i in range level
		keyPressed()


setup = ->
	createCanvas windowWidth,windowHeight
	reset()
	radie =  (windowWidth + windowHeight) /30

draw = ->
	bg 0
	sc()
	for ball in balls
		ball.rita()
	textSize 100
	textAlign CENTER,CENTER
	sw 10
	sc 0.5
	fc 1
	if active == 0
		text (stopp-start)/1000,width/2,height/2


mousePressed = ->
	if active==0
		reset()
	else
		for ball in balls
			if ball.active and ball.inside mouseX,mouseY 
				ball.active = false
				active--
				if active == 0
					stopp = new Date() 

keyPressed = ->
	active++
	x = random 50,width
	y = random 50,100
	dx = random -2,2
	dy = random -0.3,0.3

	r = random 1
	g = random 1
	b = random 1
	balls.push new Ball x,y,dx,dy,r,g,b