
var canvas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;



block_image_width = 5;
block_image_height = 5;


    function load_img() {
        fabric.Image.fromURL("golf-h.png", function(Img) {
        
        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
        top : hole_y,
        left: hole_x
        });
        canvas.add(hole_obj) ;
    });
         newImage();
}

function newImage()
{
    fabric.Image.fromURL("ball.png", function(Img) {
    ball_obj = Img;
    ball_obj.scaleToWidth(50);
    ball_obj.scaleToHeight(50);

    ball_obj.set({
    top:ball_y,
    left: ball_x
    });
    canvas.add(ball_obj);
    });
};

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y) ){

canvas.remove(ball_obj);
console.log("Você marcou um gol!!")
document.getElementById("hd3").innerHTML="Voce atingiu o objetivo! !!";
document.getElementById("myCanvas").style.borderColor="red";
}
        
else	
{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
        if(ball_y >=5){
        
        ball_y-ball_y - block_image_height;

        console.log("Altura da imagem dobloco t = " + block_image_height);
        (" + ball x + " , Y - "+ball_y");

        console.log("Quando a tecla direcional cima e pressionada, x =")
        canvas.remove(ball_obj);
        newImage ();
            }	}

	function down()
	{
        if(ball_y <=450)
        {
        ball_y-ball_y + block_image_height;

        console.log("Altura da imagem dobloco t = " + block_image_height);
        (" + ball x + " , Y - "+ball_y");

        console.log("Quando a tecla direcional baixo e pressionada, x =")
        canvas.remove(ball_obj);
        newImage () ;
            }}

	function left()
	{
		if(ball_X >5)
		{
            function left()
            if(ball_y >5)
            
            ball_y-ball_y + block_image_height;
    
            console.log("Altura da imagem dobloco t = " + block_image_width);
            (" + ball x + " , Y - "+ball_y");
    
            console.log("Quando a tecla direcional esquerda e pressionada, x =")
            canvas.remove(ball_obj);
            newImage () ;
                }		}
	

	function right()
	{
		if(ball_X <=1050)
		{
            function right()
            if(ball_y <=0150)
            
            ball_y-ball_y + block_image_height;
    
            console.log("Altura da imagem dobloco t = " + block_image_width);
            (" + ball x + " , Y - "+ball_y");
    
            console.log("Quando a tecla direcional direita e pressionada, x =")
            canvas.remove(ball_obj);
            newImage () ;
                }		}
            }