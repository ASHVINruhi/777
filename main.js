var canvas = new fabric.canvas("myCanvas");
block_img_width = 30;
block_img_height = 30;

player_x = 10;
player_y = 10;

var player_object= "";
var block_image_object= "";



function player_update()
{     
   fabric.Image.fromURL("player.Png"), function(Img)     {
    player_object=Img;

    player_object.ScaleToWidth(150);
    player_object.ScaleToHeight(140);
    player_object.Set({
    top:player_y,
    left:player_y
    });
       canvas.add(player_object);
    
   };


   function new_image(get_image)
   {     
      fabric.Image.fromURL(get_image), function(Img)     {
        block_image_object = Img;
   
        block_image_object.ScaleToWidth(150);
        block_image_object.ScaleToHeight(140);
        block_image_object.Set({
       top:player_y,
       left:player_y
       });
          canvas.add(block_image_object);
       
      }};
        window.addEventListener("keydown", my_keydown);

        function my_keydown(e) 
        {
         keyPressed = e.keyCode;
         console.log(keyPressed);
         if(e.shiftKey == true && keyPressed == '80')
            {
                console.log("p and shift pressed together");
                block_img_width = block_img_width + 10;
                block_img_height = block_img_height + 10;
                document.getElementById("current_width").innerHTML = block_img_width;
                document.getElementById("current_height").innerHTML = block_img_height;
            }
        if(e.shiftKey == true && keyPressed == '77')
            {
                console.log("m and shift pressed together");
                block_img_width = block_img_width - 10;
                block_img_height = block_img_height - 10;
                document.getElementById("current_width").innerHTML = block_img_width;
                document.getElementById("current_height").innerHTML = block_img_height;
            }
         
        }
            
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
         if(keyPressed == '87')
             {
               new_image('wall.jpg');
               console.log("w");
             }
         if(keyPressed == '71')
             {
               new_image('ground.png');
               console.log("g");
             }  
             
         if(keyPressed == '76')
             {
               new_image('light_green.png');
               console.log("l");
             } 
             
         if(keyPressed == '84')
             {
               new_image('trunk.jpg');
               console.log("t");
             }  
             
         if(keyPressed == '82')
             {
               new_image('roof.jpg');
               console.log("r");
             }
         if(keyPressed == '89')
             {
               new_image('yellow_wall.png');
               console.log("y");
             }
         if(keyPressed == '68')
             {
               new_image('dark_green.png');
               console.log("d");
             }  
             
         if(keyPressed == '85')
             {
               new_image('unique.png');
               console.log("u");
             } 
         if(keyPressed == '67')
             {
               new_image('cloud.jpg');
               console.log("c");
             }
             function up() 
	{
		if(Player_y >=0) 
	 {
        Player_y = Player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("when up arrow Key is pressed,X = " + Player_x + ",Y = "+Player_y);
		canvas.remove(Player_object);
		Player_update();

	 }
	} 
	function down() 
	{
		if(Player_y <=500) 
	 {
        Player_y = Player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("when down arrow Key is pressed,X = " + Player_x + ",Y = "+Player_y);
		canvas.remove(Player_object);
		Player_update();

	 }
	} 
	function left() 
	{
		if(Player_x >0) 
	 {
        Player_x = Player_x - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("when left arrow Key is pressed,X = " + Player_x + ",Y = "+Player_y);
		canvas.remove(Player_object);
		Player_update();

	 }
	

	}
	function right() 
	{
		if(Player_x <=850) 
	 {
        Player_x = Player_x - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("when right arrow Key is pressed,X = " + Player_x + ",Y = "+Player_y);
		canvas.remove(Player_object);
		Player_update();

	 }
	}  
}



             