$(document).ready(function(){
	bodyHeight = $("body").innerHeight();
	bodyWidth = $("body").innerWidth();
	isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (isMobile.matches)
    {
    	blockWidth = 375;
    	recX = -50;
    	recY = -50;
    	recOffset = 50;
    }
    	
    
	$(".wrapper")
	.mousedown(function(event) {
	    isDragging = true;
	    isClick = true;
	    //zoomCanvas("out");
	})
	.mouseup(function(event) {
		isDragging = false;
		if(isClick)
		{
			globalMouseClickX = event.pageX;
			globalMouseClickY = event.pageY;
			isClick = false;
		}
		else
		{
			globalMouseClickX = -1500;
			globalMouseClickY = -1500;	
		}
	});
	
	jQuery(".wrapper").on('mousemove',function(event){
		//console.log(event.pageX + ' ' + event.pageY);
		isClick = false;
		if(oldX == null)
		{
			oldX = event.pageX;
		}
		if(oldY == null)
		{
			oldY = event.pageY;
		}
		
		var xScroll = event.pageX - oldX;
		var yScroll = event.pageY - oldY;
		globalMouseX = event.pageX;
		globalMouseY = event.pageY;

		if(isDragging)
		{
			moveBoxes(xScroll,0,15);
			moveBoxes(0,yScroll,15);
		}
		
		if(xScroll < 0)
			moveBoxes(1,0,15);
		else
			moveBoxes(-1,0,15);
			
		if(yScroll < 0)
			moveBoxes(0,1,15);
		else
			moveBoxes(0,-1,15);
		
		oldX = event.pageX;
		oldY = event.pageY;
	});
	
	var scrollEvent = function(e) {

		var x,y;
		var scrollspeed = 6;
	
		if(e.type == 'DOMMouseScroll') {
			
			if(e.axis == 1) {
				if(e.detail > 0)
					moveBoxes(-scrollspeed,0,15);	
				else
					moveBoxes(scrollspeed,0,15);
			} else if(e.axis == 2){
	       		if(e.detail > 0)
					moveBoxes(0,-scrollspeed,15);	
				else
					moveBoxes(0,scrollspeed,15);
			}
	
		} else {
			if(e.deltaY)
			{
				if(e.deltaY > 0)
					moveBoxes(0,-scrollspeed,15);	
				else
					moveBoxes(0,scrollspeed,15);
			}
	
	       	if(e.deltaX)
	       	{
	       		if(e.deltaX > 0)
					moveBoxes(-scrollspeed,0,15);	
				else
					moveBoxes(scrollspeed,0,15);
	       	}
	   	}
	};

	document.body.addEventListener("mousewheel", scrollEvent, false);
	document.body.addEventListener("DOMMouseScroll", scrollEvent, false);
	
	var canvas = document.getElementById("myCanvas");
	canvas.addEventListener("touchstart", doTouchStart, false);
	canvas.addEventListener("touchmove", doTouchMove, false);
	canvas.addEventListener("touchend", doTouchEnd, false);
	canvas.addEventListener("touchcancel", doTouchCancel, false);
});

function doTouchStart(event)
{
	event.preventDefault();
	isDragging = true;
	globalMouseX = event.targetTouches[0].pageX;
	globalMouseY = event.targetTouches[0].pageY;
	globalMouseClickX = event.targetTouches[0].pageX;
	globalMouseClickY = event.targetTouches[0].pageY;
	oldX = event.targetTouches[0].pageX;
	oldY = event.targetTouches[0].pageY;
	isClick = true;
}

function doTouchMove(event)
{
	event.preventDefault();
	//console.log(event.pageX + ' ' + event.pageY);
	isClick = false;
	globalMouseClickX = -1500;
	globalMouseClickY = -1500;
	
	if(oldX == null)
		oldX = event.targetTouches[0].pageX;
	if(oldY == null)
		oldY = event.targetTouches[0].pageY;
	
	var xScroll = event.targetTouches[0].pageX - oldX;
	var yScroll = event.targetTouches[0].pageY - oldY;

	if(isDragging)
	{
		moveBoxes(parseInt(xScroll/20),0,15);
		moveBoxes(0,parseInt(yScroll/20),15);
	}
}

function doTouchEnd(event)
{
	event.preventDefault();
	isDragging = false;
	if(isClick)
	{
		globalMouseClickX = event.targetTouches[0].pageX;
		globalMouseClickY = event.targetTouches[0].pageY;
		isClick = false;
	}
	else
	{
		globalMouseClickX = -1500;
		globalMouseClickY = -1500;	
	}
}

function doTouchCancel(event)
{
	event.preventDefault();
	isDragging = false;
	if(isClick)
	{
		globalMouseClickX = event.targetTouches[0].pageX;
		globalMouseClickY = event.targetTouches[0].pageY;
		isClick = false;
	}
	else
	{
		globalMouseClickX = -1500;
		globalMouseClickY = -1500;	
	}
}

//Class codes starts here
function BoomLinkedList(blocktype) {
	this.x = 0;
	this.y = 0;
	this.color = "green";
	this.top = null;
	this.bottom = null;
	this.left = null;
	this.right = null;
	this.img = null;
	this.type = blocktype;
	this.clicked = false;
	
	
};

function BoomFetch(){
	$('#loadloading').show();
	$.ajax({
		method: "POST",
  		url: "http://www.mosaic.kentando.com/promo_landing_canvas_block.php",
  		data: { type: ''},
  		dataType: "json"
	})
	.done(function( data ) {
		$.each(data,function(index,value){
			ultraBoomLinkStorage[index] = value;
			$.each(value,function(index2,value2){
				if(typeof globalImages[value2.src] === 'undefined')
				{
					var img2 = new Image;
					img2.src = value2.src;	
					globalImages[value2.src] = img2;
				}
			});	
		});
		initializeGrid();
  	})
  	.fail(function(){
  		for(var i = 0;i < 100;i++)
  			console.log("counting to retry");
  		BoomFetch();
  	});
};






// End Class codes
// General Code starts here
var isMobile = null;
var bodyHeight = window.innerHeight;
var bodyWidth = window.innerWidth;
var blockWidth = 750;
var oldX = null;
var oldY = null;
var globalMouseX = 0;
var globalMouseY = 0;
var globalMouseClickX = -150;
var globalMouseClickY = -150;
var isDragging = false;
var isClick = false;
var c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
var ctx = c.getContext("2d");
var recX = -500;
var recY = -500;
var recOffset = 500;
var firstBox = null;
var newRow = false;
var prevBox = null;
var veryFirstBox = null;
var veryFirstBoxCandidate = null;
var globalImages = [];
var ultraBoomLinkStorage = [];

var xNum = parseInt(bodyWidth / blockWidth) + 2;
var yNum = parseInt(bodyHeight / blockWidth) + 2;
var type = 'a';
var movingBoxes = false;

BoomFetch(); // initialize our boxes;

function initializeGrid()
{
	for(var i = 0;i < (xNum * yNum); i++)
	{
		if(newRow && firstBox != null)
		{
			switch(firstBox.type)
			{
				case 'a':
					type = 'b';
				break;
				case 'b':
					type = 'c';
				break;
				case 'c':
					type = 'a';
				break;
			}
		}
		else if(prevBox != null)
		{
			switch(prevBox.type)
			{
				case 'a':
					type = 'b';
				break;
				case 'b':
					type = 'c';
				break;
				case 'c':
					type = 'a';
				break;
			}
		}
		var box = new BoomLinkedList(type);
		box.img = ultraBoomLinkStorage[type + '' + Math.floor((Math.random() * 3) + 1)];
		box.x = recX;
		box.y = recY;
		
		if(i == 0)
		{
			veryFirstBox = box;
			firstBox = veryFirstBox;
		}
		
		if(prevBox == null)
		{
			prevBox = firstBox;
		}
		else if(prevBox != null && !newRow)
		{
			box.left = prevBox;
			if(prevBox.top != null && prevBox.top.right != null)
				box.top = prevBox.top.right;
			if(prevBox.bottom != null && prevBox.bottom.right != null)
				box.bottom = prevBox.bottom.right;
			
			prevBox.right = box;
			if(prevBox.top != null && prevBox.top.right != null)
				prevBox.top.right.bottom = prevBox.right;
			if(prevBox.bottom != null && prevBox.bottom.right != null)
				prevBox.bottom.right.top = prevBox.right;
			
			prevBox = prevBox.right;
			
		}
		else
		{
			prevBox = null;
		}
		
		if(newRow)
		{
			box.top = firstBox;
			firstBox.bottom = box;
			firstBox = firstBox.bottom;
			prevBox = firstBox;
			newRow = false;
		}
		
		recX += blockWidth;
		if(recX >= ((xNum) * blockWidth) - recOffset)
		{
			recX = -recOffset;
			recY += blockWidth;
			newRow = true;
		}
	}
	$('#loadloading').remove();
}

function renderCanvas(){
	// draw all boxes
    if(veryFirstBox.right != null)
		rightRenderer(veryFirstBox,veryFirstBox.x,veryFirstBox.y);
	if(veryFirstBox.bottom != null)
		bottomRenderer(veryFirstBox.bottom,veryFirstBox.x,veryFirstBox.y+blockWidth);
}

function rightRenderer(rowBox,x,y)
{
	var localX = 0;
	var localY = 0;
	rowBox.x = x;
	rowBox.y = y;
	
	if(rowBox.img != null)
	{
		$.each(rowBox.img,function(index,value){
			if(isMobile.matches)
			{
				localX = x + (parseInt(value.x)/2);
				localY = y + (parseInt(value.y)/2);
			}
			else
			{
				localX = x + parseInt(value.x);
				localY = y + parseInt(value.y);	
			}
			
			drawPromoImage(value,localX,localY);
			calculateAlphaValue(rowBox,value,localX,localY,parseInt(value.w),parseInt(value.h));
		    	
		});
			
	}

    if(rowBox.right != null)
    	rightRenderer(rowBox.right,x+blockWidth,y);
}

function bottomRenderer(rowBox,x,y)
{
	//if(rowBox.right != null)
		rightRenderer(rowBox,x,y);
	if(rowBox.bottom != null && rowBox.left == null)
		bottomRenderer(rowBox.bottom,x,y+blockWidth);
}

function rightMover(rowBox,x,y)
{
	var rowBoxDelete = false;
	var type = 'a';
	rowBox.x += x;
	rowBox.y += y;
	
	switch(rowBox.type)
	{
		case 'a':
			type = 'b';
		break;
		case 'b':
			type = 'c';
		break;
		case 'c':
			type = 'a';
		break;
	}
	
	if(rowBox.y > -250 && rowBox.top == null)
	{
		var box = new BoomLinkedList(type);
		box.img = ultraBoomLinkStorage[type + '' + Math.floor((Math.random() * 3) + 1)];
		box.x = rowBox.x; // this is not being used anymore
		box.y = rowBox.y - blockWidth;
		box.bottom = rowBox;
		if(rowBox.right != null && rowBox.right.top != null)
			box.right = rowBox.right.top;
		if(rowBox.left != null && rowBox.left.top != null)
			box.left = rowBox.left.top;
		rowBox.top = box;
		if(rowBox.right != null && rowBox.right.top != null)
			rowBox.right.top.left = rowBox.top;
		if(rowBox.left != null && rowBox.left.top != null)
			rowBox.left.top.right = rowBox.top;
		if(rowBox.top.left == null)
			veryFirstBox = rowBox.top;
	}
	
	if(rowBox.y < ((yNum * blockWidth) - blockWidth) && rowBox.bottom == null)
	{
		var box = new BoomLinkedList(type);
		box.img = ultraBoomLinkStorage[type + '' + Math.floor((Math.random() * 3) + 1)];
		box.x = rowBox.x;
		box.y = rowBox.y + blockWidth; // this is not being used anymore
		box.top = rowBox;
		if(rowBox.right != null && rowBox.right.bottom != null)
			box.right = rowBox.right.bottom;
		if(rowBox.left != null && rowBox.left.bottom != null)
			box.left = rowBox.left.bottom;
		rowBox.bottom = box;
		if(rowBox.right != null && rowBox.right.bottom != null)
			rowBox.right.bottom.left = rowBox.bottom;
		if(rowBox.left != null && rowBox.left.bottom != null)
			rowBox.left.bottom.right = rowBox.bottom;
	}
	
	if(rowBox.x > -250 && rowBox.left == null)
	{
		var box = new BoomLinkedList(type);
		box.img = ultraBoomLinkStorage[type + '' + Math.floor((Math.random() * 3) + 1)];
		box.x = rowBox.x - blockWidth; // this is not being used anymore
		box.y = rowBox.y;
		box.right = rowBox;
		if(rowBox.top != null && rowBox.top.left != null)
			box.top = rowBox.top.left;
		if(rowBox.bottom != null && rowBox.bottom.left != null)
			box.bottom = rowBox.bottom.left;
		rowBox.left = box;
		if(rowBox.top != null && rowBox.top.left != null)
			rowBox.top.left.bottom = rowBox.left;
		if(rowBox.bottom != null && rowBox.bottom.left != null)
			rowBox.bottom.left.top = rowBox.left;
		if(rowBox.left.top == null)
			veryFirstBox = rowBox.left;
	}
	
	if(rowBox.x < ((xNum * blockWidth) - blockWidth) && rowBox.right == null)
	{
		var box = new BoomLinkedList(type);
		box.img = ultraBoomLinkStorage[type + '' + Math.floor((Math.random() * 3) + 1)];
		box.x = rowBox.x + blockWidth; // this is not being used anymore
		box.y = rowBox.y;
		box.left = rowBox;
		if(rowBox.top != null && rowBox.top.right != null)
			box.top = rowBox.top.right;
		if(rowBox.bottom != null && rowBox.bottom.right != null)
			box.bottom = rowBox.bottom.right;
		rowBox.right = box;
		if(rowBox.top != null && rowBox.top.right != null)
			rowBox.top.right.bottom = rowBox.right;
		if(rowBox.bottom != null && rowBox.bottom.right != null)
			rowBox.bottom.right.top = rowBox.right;
	}
	
	if(rowBox != null && rowBox.right != null)
		rightMover(rowBox.right,x,y);
	if(rowBox.right == null && rowBox.bottom == null) // We are done moving Boxes
		movingBoxes = false;
}

function bottomMover(rowBox,x,y)
{
	//if(rowBox.right != null)
		rightMover(rowBox,x,y);
	if(rowBox.bottom != null && rowBox.left == null)
		bottomMover(rowBox.bottom,x,y);
}

function moveBoxes(x,y,vel)
{
	if(x > 1 || y > 1)
	{
		movingBoxes = true;
		globalMouseClickX = 0;
		globalMouseClickY = 0;
	}
	else
	{
		globalMouseClickX += x;
		globalMouseClickY += y;
	}
		
	ctx.clearRect(0, 0, c.width, c.height);
	
   	if(veryFirstBox.right != null)
		rightMover(veryFirstBox,x,y);
	if(veryFirstBox.bottom != null)
		bottomMover(veryFirstBox.bottom,x,y);
}

function calculateAlphaValue(rowBox,imgObj,x,y,w,h)
{
	if(isMobile.matches)
	{
		w = parseInt(w/2);
		h = parseInt(h/2);
	}
	var clicked = false;
	if(globalMouseClickX >= x && globalMouseClickX <= (x+w) && globalMouseClickY >= y && globalMouseClickY <= (y+h))
		clicked = true;
	
	if((globalMouseX >= x && globalMouseX <= (x+w) && globalMouseY >= y && globalMouseY <= (y+h)) || clicked)
	{
		ctx.fillStyle =  "rgba(0, 0, 0, 0.5)";
		ctx.fillRect(x, y, w,h);
		var boxCenterX = 0;
		var boxCenterY = 0;
		var boxWidth = 0;
		
			
		if(w == 500)
		{
			boxCenterX = x + 250;
			boxCenterY = y + 60;
			boxWidth = 300;
			if(!clicked)
				wrapText(imgObj.pname, boxCenterX, boxCenterY, boxWidth, 18,6);
			else
				wrapText(imgObj.pname, boxCenterX, boxCenterY, boxWidth, 18,0);
			
			boxCenterX = x + 250;
			boxCenterY = y + 140;
			boxWidth = 250;
			wrapText(imgObj.bname, boxCenterX, boxCenterY, boxWidth, 20,0);
			
			boxCenterX = x + 250;
			boxCenterY = y + 200;
			if(!clicked)
				drawButton("See More",boxCenterX,boxCenterY,15,imgObj.promotion);
			else
				drawButton("View Deal",boxCenterX,boxCenterY,15,imgObj.promotion);
		}
		
		if(w == 250 && h == 250)
		{
			boxCenterX = x + 125;
			boxCenterY = y + 50;
			boxWidth = 200;
			if(!clicked)
				wrapText(imgObj.pname, boxCenterX, boxCenterY, boxWidth, 17,6);
			else
				wrapText(imgObj.pname, boxCenterX, boxCenterY, boxWidth, 17,0);
			
			boxCenterX = x + 125;
			boxCenterY = y + 140;
			boxWidth = 200;
			wrapText(imgObj.bname, boxCenterX, boxCenterY, boxWidth, 19,0);
			
			boxCenterX = x + 125;
			boxCenterY = y + 200;
			if(!clicked)
				drawButton("See More",boxCenterX,boxCenterY,15,imgObj.promotion);
			else
				drawButton("View Deal",boxCenterX,boxCenterY,15,imgObj.promotion);
		}
		
		if(w == 125 && h == 125)
		{
			boxCenterX = x + 70;
			boxCenterY = y + 10;
			boxWidth = 100;
			if(!clicked)
				wrapText(imgObj.pname, boxCenterX, boxCenterY, boxWidth, 12,6);
			else
				wrapText(imgObj.pname, boxCenterX, boxCenterY, boxWidth, 12,0);
			
			boxCenterX = x + 70;
			boxCenterY = y + 60;
			boxWidth = 100;
			wrapText(imgObj.bname, boxCenterX, boxCenterY, boxWidth, 14,0);
			
			boxCenterX = x + 70;
			boxCenterY = y + 100;
			if(!clicked)
				drawButton("See More",boxCenterX,boxCenterY,10,imgObj.promotion);
			else
				drawButton("View Deal",boxCenterX,boxCenterY,10,imgObj.promotion);
		}
		
		if(w == 250 && h == 125)
		{
			boxCenterX = x + 125;
			boxCenterY = y + 20;
			boxWidth = 200;
			if(!clicked)
				wrapText(imgObj.pname, boxCenterX, boxCenterY, boxWidth, 15,6);
			else
				wrapText(imgObj.pname, boxCenterX, boxCenterY, boxWidth, 15,0);
			
			boxCenterX = x + 125;
			boxCenterY = y + 60;
			boxWidth = 200;
			wrapText(imgObj.bname, boxCenterX, boxCenterY, boxWidth, 16,0);
			
			boxCenterX = x + 125;
			boxCenterY = y + 110;
			if(!clicked)
				drawButton("See More",boxCenterX,boxCenterY,15,imgObj.promotion);
			else
				drawButton("View Deal",boxCenterX,boxCenterY,15,imgObj.promotion);
		}
		
		if(w == 125 && h == 62)
		{
			boxCenterX = x + 60;
			boxCenterY = y + 10;
			boxWidth = 100;
			if(!clicked)
				wrapText(imgObj.pname, boxCenterX, boxCenterY, boxWidth, 9,6);
			else
				wrapText(imgObj.pname, boxCenterX, boxCenterY, boxWidth, 9,0);
			
			boxCenterX = x + 60;
			boxCenterY = y + 35;
			boxWidth = 100;
			wrapText(imgObj.bname, boxCenterX, boxCenterY, boxWidth, 12,0);
			
			boxCenterX = x + 60;
			boxCenterY = y + 50;
			if(!clicked)
				drawButton("See More",boxCenterX,boxCenterY,8,imgObj.promotion);
			else
				drawButton("View Deal",boxCenterX,boxCenterY,8,imgObj.promotion);
		}
			
		return 0.5;	
	}
	else
		return 1;
}

function drawPromoImage(imgObjc,x,y)
{
	var here_w = imgObjc.w;
	var here_h = imgObjc.h;
	if(typeof globalImages[imgObjc.src] === 'undefined')
	{
		var img = new Image;
		img.src = imgObjc.src;	
		globalImages[imgObjc.src] = img;
	}
	else
	{
		var img = globalImages[imgObjc.src];
	}
	if(isMobile.matches)
	{
		here_w = here_w/2;
		here_h = here_h/2;
	}
	ctx.drawImage(img,x,y,here_w,here_h); // Or at whatever offset you like	
}

function setVeryFirstBox(rowBox,direction)
{
	if(direction == 'down')
	{
		rowBox.left = null;
		if(rowBox.bottom != null)
			setVeryFirstBox(rowBox.bottom,'down');
	}
	else if(direction == 'right')
	{
		rowBox.top = null;
		if(rowBox.right != null)
			setVeryFirstBox(rowBox.right,'right');
	}
	else if(direction == 'first')
	{
		rowBox.top = null;
		rowBox.left = null;
		if(rowBox.bottom != null)
			setVeryFirstBox(rowBox.bottom,'down');
		if(rowBox.right != null)
			setVeryFirstBox(rowBox.right,'right');
		veryFirstBox = rowBox;
	}
}

function checkBoxes()
{
	if(!movingBoxes)
	{
		if(veryFirstBox.right != null)
			checkRightBoxes(veryFirstBox);
		if(veryFirstBox.bottom != null)
			checkDownBoxes(veryFirstBox.bottom);
	}
	
}

function checkDownBoxes(rowBox)
{
	checkRightBoxes(rowBox);
	if(rowBox.bottom != null && rowBox.left == null)
		checkDownBoxes(rowBox.bottom);
}

function checkRightBoxes(rowBox)
{
	if(rowBox != null && (rowBox.y < -1000 || rowBox.x < -1000))
	{
		if(rowBox.top == null && rowBox.left == null)
		{
			if(rowBox.right != null && rowBox.right.bottom != null)
			{
				setVeryFirstBox(rowBox.right.bottom,'first');	
			}
		}
		if(rowBox.top == null && rowBox.bottom != null)
			rowBox.bottom.top = null;
		if(rowBox.left == null && rowBox.right != null)
			rowBox.right.left = null;
	}
	
	if(rowBox != null && rowBox.y > ((yNum * blockWidth)))
	{
		if(rowBox.bottom == null)
		{
			if(rowBox.top != null)
				rowBox.top.bottom = null;
		}
	}
	
	if(rowBox != null && rowBox.x > ((xNum * blockWidth)))
	{
		if(rowBox.right == null)
		{
			if(rowBox.left != null)
				rowBox.left.right = null;
		}
	}
}

function wrapText(text, x, y, maxWidth, lineHeight, wordsPerLine)
{
	var words = text.split(' ');
	var line = '';
	var addDot = false;
	if(wordsPerLine == 0 || (wordsPerLine > 0 && wordsPerLine > words.length))
		wordsPerLine = words.length;
	else
		addDot = true;
	ctx.fillStyle = 'rgba(255,255,255,0.8)';
	ctx.font = lineHeight+'px Helvetica Neue Thin';
	ctx.textAlign = 'center';
	
	for(var n = 0; n < wordsPerLine; n++)
	{
	  var testLine = line + words[n] + ' ';
	  var metrics = ctx.measureText(testLine);
	  var testWidth = metrics.width;
	  if (testWidth > maxWidth && n > 0)
	  {
	    ctx.fillText(line, x, y);
	    line = words[n] + ' ';
	    y += lineHeight;
	  }
	  else
	  {
	    line = testLine;
	  }
	}
	if(addDot)
		ctx.fillText(line+'...', x, y);
	else	
		ctx.fillText(line, x, y);
	ctx.textAlign = 'left';
}

function drawButton(label,x,y,size,promotion)
{
	ctx.textAlign = 'center';
	ctx.fillStyle = 'rgba(255,255,255,0.5)';
	ctx.font = size+'px Helvetica';
	var metrics = ctx.measureText(label);
	var testWidth = metrics.width;
	ctx.fillText(label, x, y);
	var buttonX = x-parseInt(testWidth/2)-10;
	var buttonY = y-size-5;
	var buttonW = testWidth+20;
	var buttonH = size+15;
	if(globalMouseClickX > 0 && globalMouseClickY > 0 && globalMouseClickX >= (buttonX) && globalMouseClickX <= (buttonX + buttonW) && globalMouseClickY >= (buttonY) && globalMouseClickY <= (buttonY+buttonH))
	{
		alert('Everyone CALL THE LANDING PAGE!');
		globalMouseClickX = 0;
		globalMouseClickY = 0;
		isDragging = false;
		isClick = false;
	}
	
	if(globalMouseX >= (buttonX) && globalMouseX <= (buttonX + buttonW) && globalMouseY >= (buttonY) && globalMouseY <= (buttonY+buttonH))
	{
		ctx.fillStyle = 'rgba(255,255,255,0.5)';
		ctx.fillRect(buttonX,buttonY,buttonW,buttonH);
	}
	else
	{
		ctx.strokeStyle = 'rgba(255,255,255,0.8)';
		ctx.strokeRect(buttonX,buttonY,buttonW,buttonH);	
	}
	ctx.textAlign = 'left';
}

//window.setInterval(function(){moveBoxes(-1,1,1)}, 5);
window.setInterval(function(){checkBoxes()}, 5);

// Get a regular interval for drawing to the screen
window.requestAnimFrame = (function (callback) {
        return window.requestAnimationFrame || 
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.oRequestAnimationFrame ||
           window.msRequestAnimaitonFrame ||
           function (callback) {
        	window.setTimeout(callback, 1000/60);
           };
})();

// Allow for animation
(function drawLoop () {
  requestAnimFrame(drawLoop);
  renderCanvas();
  
})();