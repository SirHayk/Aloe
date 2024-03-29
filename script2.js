var App = {
    numberOfDroplets: 40
  }

//-------------------------------------

  App.spawnDroplet = function(input) {

    	$('body').append('<div class="droplet"><div class="flying"></div><div class="splashing"></div></div>')
			
      var $droplet = $('body .droplet').last()
      var $flying = $droplet.find('.flying')
      var $splashing = $droplet.find('.splashing')
      
      $droplet.css({
          left: input.left + '%',
        	top: input.top + '%',
        	transform: 'scale(' + input.scale + ')',
        	opacity: input.opacity
      })
      $flying.css({
        	animation: input.duration + 's flying infinite linear',
        	'animation-delay': input.delay + 's',
      })
      $splashing.css({
        	animation: input.duration + 's splashing infinite linear',
	        'animation-delay': (input.duration+input.delay) + 's',
      })

  }
  
//-------------------------------------
  var i = 0
  while( i < App.numberOfDroplets ) {
    
    var opacity = Math.random().toFixed(1)
    var scale = opacity * 3
    var y = 65 + ( opacity * 35 )
    var duration = 1 + parseFloat(Math.random().toFixed(2))
    
    App.spawnDroplet({
      left: parseInt( Math.random() * 100 ),
      top: y,
      opacity: opacity,
      scale: scale,
      duration: duration,
      delay: duration
    })
    
    i++
  }
  
//-------------------------------------