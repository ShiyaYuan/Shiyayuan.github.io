window.addEventListener('load', init);

function init() {
  // $('.grid').addClass('border');

  function calculateGrid() {
    // var menuHeight = document.getElementById('alphabet-menu-wrapper').offsetHeight - 10;
    var w = window.innerWidth;
    var h = window.innerHeight;

    var totalNum = Math.trunc(w / 25) * Math.trunc(h / 25);

    function randomInRange(from, to) {
      let x = Math.random() * (to - from);
      return x + from;
    };
    var vworpx = [
      "vw",
      "px"
    ];
    vworpx[Math.floor(Math.random() * vworpx.length)]

    for (var i = 0; i < totalNum; i++) {
      var div = document.createElement('div');
      div.setAttribute('class', 'grid border');
      // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      // div.style.backgroundColor = "#" + randomColor;
      // div.style.width = randomInRange(0.4, 5) + vworpx[Math.floor(Math.random() * vworpx.length)];
      // div.style.height = randomInRange(0.5, 5) + vworpx[Math.floor(Math.random() * vworpx.length)];
      div.style.width = randomInRange(10, 50) + 'px';
      div.style.height = randomInRange(10, 50) + 'px';
      // div.style.width = randomInRange(0.5, 4) + 'vw';
      // div.style.height = randomInRange(0.5, 6) + 'vh';
      // div.style.borderRadius = randomInRange(0, 50) + vworpx[Math.floor(Math.random() * vworpx.length)];
      div.style.borderRadius = randomInRange(0, 50) + 'px';
      //optional overlap
      div.style.margin = randomInRange(-10, 0) + 'px';
      document.getElementById('container1').appendChild(div);
    }

    // var rows = Math.trunc(w / 25);
    // var columns = Math.trunc(h / 25);
    //
    // for(var i = 0, top=0; i<rows; i++,top-=25){
    //   for(var j = 0, left=0; j<columns; j++,left-=25){
    //     var div = document.createElement('div');
    //     // div.innerHTML=divNum;
    //     div.style.backgroundPosition = left+ 'px ' + top + 'px';
    //     div.setAttribute('class', 'grid');
    //     document.getElementById('container').appendChild(div);
    //   }
    // }


    // auto numbering the grids
    // var nodes = document.getElementById('container').childNodes;
    // // n=0;
    // for(var i=0; i<nodes.length; i++) {
    //   if (nodes[i].nodeName.toLowerCase() == 'div') {
    //    nodes[i].innerHTML=i;
    //    // n++;
    //  }
    // }

  };
  //END Calculate Grid

  //Handle Grid Clicks
  // function handleGridClick(e) {
  //   let elms = document.elementsFromPoint(e.clientX, e.clientY);
  //   Array.from(elms).forEach(elm => {
  //     if (elm.classList.contains('grid'))
  //       elm.classList.add('selected');
  //   });
  // }

  //Call functions
  calculateGrid();
  // var wrapper = document.getElementById('wrapper');
  // wrapper.addEventListener('click', handleGridClick);

  window.addEventListener('resize', calculateGrid);

  //INTERACTIONS, buttons
  // click on grid to make selection
  $(".grid").click(function() {
    $(this).toggleClass('selected');
  });

  // click on line-fill button
  function lineFillClicked() {
    $('.selected').each(function() {
      $(this).css({
        "background-color": "white",
        "border": "1px solid black",
        "box-shadow": "none"
      });
    });
    $(".grid").click(function() {
      $(this).css({
        "background-color": "white",
        "border": "1px solid black",
        "box-shadow": "none"
      });
    });
  };
  document.getElementById('line-fill-btn').addEventListener('click', lineFillClicked);

  // click on black-fill button
  function blackFillClicked() {
    $('.selected').each(function() {
      $(this).css({
        "background-color": "black",
        "box-shadow": "none"
      });
    });
    $(".grid").click(function() {
      $(this).css({
        "background-color": "black",
        "box-shadow": "none"
      });
    });
  };
  document.getElementById('black-fill-btn').addEventListener('click', blackFillClicked);

  // click on mix-fill button
  var bgColor = [
    "white",
    "black"
  ];

  function mixFillClicked() {
    $('.selected').each(function() {
      $(this).css({
        "background-color": bgColor[Math.floor(Math.random() * bgColor.length)],
        "border-left": "1px solid black",
        "box-shadow": "none"
      });
    });
    $(".grid").click(function() {
      $(this).css({
        "background-color": bgColor[Math.floor(Math.random() * bgColor.length)],
        "border-left": "1px solid black",
        "box-shadow": "none"
      });
    });
  };
  document.getElementById('mix-fill-btn').addEventListener('click', mixFillClicked);

  // click on shadow-fill button
  function shadowFillClicked() {
    $('.selected').each(function() {
      $(this).css({
        "background-color": "white",
        "box-shadow": "inset 0 0 10px #000000"
      });
    });
    $(".grid").click(function() {
      $(this).css({
        "background-color": "white",
        "box-shadow": "inset 0 0 10px #000000"
      });
    });
  };
  document.getElementById('shadow-fill-btn').addEventListener('click', shadowFillClicked);

  // click to remove all
  function removeAll() {
    $('.grid').removeClass('selected');
  };
  document.getElementById('remove-btn').addEventListener('click', removeAll);

  // click to toggle grid
  function toggleGrid() {
    $('.grid').toggleClass('border');
  };
  document.getElementById('grid-btn').addEventListener('click', toggleGrid);

  // END buttons, interactions

};
