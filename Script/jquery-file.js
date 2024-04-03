// Events



$("#submit").hide();
// ToTal Cost to buy items
const usernameValue = $("#myNumber").val()*20;
$("#textcontent-output").text("$"+usernameValue+".00");
$("#myNumber").on("input", function(){
    const usernameValue = $("#myNumber").val()*20;
    $("#textcontent-output").text("$"+usernameValue+".00");
});
// Selection of Colors of the Shirts
$("#redShirt").hide();
$("#greyShirt").hide();
$("#textcontent-output1").text("Black");
$("#black").click("radio",function(){
    var src=($(this).attr('src')==='images/product-images/t-shirt-black-no-model.jpg')?'images/product-images/t-shirt-black-front.jpg':'images/product-images/t-shirt-black-back.jpg';
    $(this).attr('src',src);
    $("#textcontent-output1").text("Black");
    $("#redShirt").hide();
    $("#greyShirt").hide();
    $("#blackShirt").show();
  
  
});
$("#red").click("radio",function(){
    var src=($(this).attr('src')==='images/product-images/t-shirt-red-no-model.jpg')?'images/product-images/t-shirt-red-front.jpg':'images/product-images/t-shirt-red-back.jpg.jpg';
    
    $("#textcontent-output1").text("Red");
    $("#redShirt").show();
    $("#greyShirt").hide();
    $("#blackShirt").hide();
   $(this).attr('src',src);
   
});
$("#grey").click("radio",function(){
    var src=($(this).attr('src')==='images/product-images/t-shirt-grey-no-model.jpg')?'images/product-images/t-shirt-grey-front.jpg':'images/product-images/t-shirt-grey-back.jpg';
    
    $("#textcontent-output1").text("Grey");
    $("#redShirt").hide();
    $("#greyShirt").show();
    $("#blackShirt").hide();
     $(this).attr('src',src);
});
// Choose Size
$("#small").click("radio",function(){
$("#submit").show();
$("input:disabled").hide();
});

$("#medium").click("radio",function(){
    $("#submit").show();
    $("input:disabled").hide();
    });

$("#large").click("radio",function(){
        $("#submit").show();
        $("input:disabled").hide();
        });
// Slide to show other picture

// This function for black to show picture on a big frame
$(document).ready(function(){
    $("#small-img-roll img").on({
        mouseover:function(){
            $(this).css({
                'cursor':'pointer',
                'border-Color':'red'
            });
        },
        mouseout:function(){
            $(this).css({
                'cursor':'default',
                'border-Color':'grey'
            });
        },
        click:function(){
            var imageUrl = $(this).attr('src')
            console.log(imageUrl);
            $("#show-img").fadeOut(300,function(){
                $(this).attr('src',imageUrl);
            }).fadeIn(300);
            return imageUrl;
        }
    });
});
// This function for Red to show picture on a big frame
$(document).ready(function(){
    $("#small-img-roll1 img").on({
        mouseover:function(){
            $(this).css({
                'cursor':'pointer',
                'border-Color':'red'
            });
        },
        mouseout:function(){
            $(this).css({
                'cursor':'default',
                'border-Color':'grey'
            });
        },
        click:function(){
            var imageUrl = $(this).attr('src');
            $("#show-img1").fadeOut(300,function(){
                $(this).attr('src',imageUrl);
            }).fadeIn(300);
            return imageUrl;
        }
    });
});
// This function for grey to show picture on a big frame
$(document).ready(function(){
    $("#small-img-roll2 img").on({
        mouseover:function(){
            $(this).css({
                'cursor':'pointer',
                'border-Color':'red'
            });
        },
        mouseout:function(){
            $(this).css({
                'cursor':'default',
                'border-Color':'grey'
            });
        },
        click:function(){
            var imageUrl = $(this).attr('src');
            $("#show-img2").fadeOut(300,function(){
                $(this).attr('src',imageUrl);
            }).fadeIn(300);
            return imageUrl;
        }
    });
});
$("input:disabled").val("Chosse A Size......");




/*
---------------------------------------
mouse events
---------------------------------------
*/
// Mouse Smiley with Mouse Movements
// HTML Elements

/*
apply event directly to th element
    element.event( function(e){} );
*/


/*
---------------------------------------
form events
---------------------------------------
*/
//try altering the event detection from
//  "input" - detect each character added/removed
//    to
//  "change" - detect when the input loses :focus
// $("#username").on("input", function(){
//     const usernameValue = $("#username").val();
//     $("#form-input-value").text(usernameValue);
// });
$("form").submit(function(){
    $( "input[name=size]" ).prop( "checked", false );
});

// $("form").on("submit",function(e){
//     e.preventDefault();
// });

/*
---------------------------------------
preventDefault()
---------------------------------------
*/
// Kitten Gallery
// Using event filtering and multiple events
// Tip: Set "pointer-events" to "none" in the CSS
// on the thumb "img" elements to prevent them from registering
// as the target element

