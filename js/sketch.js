
// p5 can not be executed the normal "global" way
// Instead a sketch instance has to be manually created
// This is done with the closure below
console.log("Executing");



/* p5 Object Constructor */
var sketch = function(p5) {

  /* Setup Function */
  p5.setup = function() {

    /* Canvas */
    var c = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    c.position(0,0);
    c.style('z-index:999');
    p5.clear();

    p5.fill(0);
    p5.ellipse(100,100,10,10);


    /*/ Variable /*/

    var imgs = document.getElementsByTagName("img");
    //var img1 = p5.select(img);

    for (var i = 0; i < imgs.length ; i++) {
       document.imgs[i].style.width = '300';

    }

    // if (imgs.length > 0 ) {

    //   changeCSS();

    // }

    function changeCSS() {

      console.log('img1');

      //imgs.style("background-color", #000000);


      //document.getElementsByTagName("img").style.visibility='hidden';
    }

  }
}

/* The above function closure is passed into a p5 object constructor. this starts the sketch. */
var myp5 = new p5(sketch);


