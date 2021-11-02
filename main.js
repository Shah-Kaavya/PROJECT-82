var mouseevent="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width="4";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseevent="mousedown"
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseevent="mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    if(mouseevent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(currentX , currentY, 40, 0, 2*Math.PI);
        ctx.stroke();
    }
}
function ClearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}