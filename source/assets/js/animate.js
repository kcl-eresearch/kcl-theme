
// AnimCSS helper.
window.animateFadeOut = (element, animation = 'fadeOut', prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = $(element);

    node.addClass(`${prefix}animated ${animationName}`);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.addClass('zero-out');
      setTimeout(function() { node.remove() }, 100)
      resolve('Animation ended');
    }

    node.on('animationend', handleAnimationEnd);
  });

// AnimCSS helper.
window.animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = $(element);

    node.addClass(`${prefix}animated ${animationName}`);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.removeClass(`${prefix}animated ${animationName}`);
      resolve('Animation ended');
    }

    node.on('animationend', handleAnimationEnd);
  });

// Helper for AJAX buttons.
window.buttonWaiter = (element, prefix = 'animate__') =>
	new Promise((resolve, reject) => {
		const animationName = `${prefix}pulse`;
		const node = $(element);

    node.removeAttr('onclick')
		node.addClass(`${prefix}animated ${animationName} ${prefix}infinite`);

    var grpparenttest = $(element).parent();
    var grpparent = grpparenttest.parent();
    if (grpparent.hasClass('anim-btn-grp')) {
      // Drop anything else.
      grpparent.children().each(function(i, e) {
        if (!$(this).is(grpparenttest)) {
          animateFadeOut(this);
        }
      })
    }

		// Fade out existing content.
		animateCSS(element + " span", 'zoomOut')
		$(element + " span").fadeOut(500, function() {
			node.html('<span class="animate__animated animate__fadeIn"><i class="fa fa-spinner fa-spin"></i></span>')
		});

		// When the animation ends, we clean the classes and resolve the Promise
		function handleAnimationEnd(event) {
			event.stopPropagation();
			node.removeClass(`${prefix}animated ${animationName} ${prefix}infinite`);
			resolve('Animation ended');
		}

		node.on('animationended', handleAnimationEnd);
	});

window.buttonWaiterEnd = function(element, newIcon = 'check') {
  const node = document.querySelector(element);
  node.classList.remove('animate__infinite');
  node.style.setProperty('--animate-duration', '0.25s');
  setTimeout(function(node) {
    node.innerHTML = `<i class="fa fa-${newIcon} animate__animated animate__fadeIn"></i>`
  }, 250, node)
}
