/* 
	I've created a function here that is a simple d3 chart.
	This could be anthing that has discrete steps, as simple as changing
	the background color, or playing/pausing a video.
	The important part is that it exposes and update function that
	calls a new thing on a scroll trigger.
*/
window.createGraphic = function(graphicSelector) {
	var graphicEl = d3.select('.graphic')
	var graphicVisEl = graphicEl.select('.graphic__vis')
	var graphicProseEl = graphicEl.select('.graphic__prose')
	
	// actions to take on each step of our scroll-driven story
	var steps = [
		function step0() {
			var img = document.createElement("IMG");
            img.src = "/img/spec_fic_pg_1.png";
            img.width = "100%";
            img.height = "auto";
            var oldImg = document.getElementById('oldImg');
            document.getElementsByClassName('graphic__vis').replaceChild(img, oldImg);
		},

		function step1() {
			var img = document.createElement("IMG");
            img.src = "/img/spec_fic-02.png";
            img.width = "100%";
            img.height = "auto";
            var oldImg = document.getElementById('oldImg');
            document.getElementsByClassName('graphic__vis').replaceChild(img, oldImg);
		},
	]

	// update our chart
	function update(step) {
		steps[step].call()
	}
	
	// little helper for string concat if using es5
	function translate(x, y) {
		return 'translate(' + x + ',' + y + ')'
	}

	function setupProse() {
		var height = window.innerHeight * 0.5
		graphicProseEl.selectAll('.trigger')
			.style('height', height + 'px')
	}

	function init() {
		setupProse()
		update(0)
	}
	
	init()
	
	return {
		update: update,
	}
}