var canvas =document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouse_event = "";
var last_position_x = 0;
var last_position_y = 0;
canvas.addEventListener("mousedown",mymousedown);
 function mymousedown(e)
{
   mouse_event="mousedown";

   
}
canvas.addEventListener("mouseup",mymouseup);
 function mymouseup(e)
{
   mouse_event="mouseup";

   
}
canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e)
{
   mouse_event="mouseleave";
   
   
}
canvas.addEventListener("mousemove",mymousemove);
 function mymousemove(e)
{
   current_Position_Of_X=e.clientX-canvas.offsetLeft;
   current_Position_Of_Y=e.clientY-canvas.offsetTop;
   if (mouse_event=="mousedown" )
   {
       ctx.beginPath();
       ctx.strokeStyle="black";
       ctx.lineWidth=3;
       ctx.moveTo(last_position_x,last_position_y);
       ctx.lineTo(current_Position_Of_X,current_Position_Of_Y);
       ctx.stroke();
       
   }
   last_position_x=current_Position_Of_X;
   last_position_y=current_Position_Of_Y;
}
