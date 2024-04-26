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
    var dv = document.getElementById('image')
    var img = document.createElement("IMG")
	
	// actions to take on each step of our scroll-driven story
	var steps = [
		function step0() {
            // remove all child nodes
            while (dv.hasChildNodes()) { 
                dv.removeChild(dv.lastChild); 
            } 

            img.src = "./img/spec_fic_pg_1.png";
            img.width = "100%";
            img.height = "auto";
            dv.appendChild(img);
		},

		function step1() {
            // remove all child nodes
            while (dv.hasChildNodes()) { 
                dv.removeChild(dv.lastChild); 
            } 

            img.src = "./img/spec_fic-02.png";
            img.width = "100%";
            img.height = "auto";
            dv.appendChild(img);
		},

        function step2() {
            // remove all child nodes
            while (dv.hasChildNodes()) { 
                dv.removeChild(dv.lastChild); 
            } 

            img.src = "./img/spec_fic-03.png";
            img.width = "100%";
            img.height = "auto";
            dv.appendChild(img);
		},

        function step3() {
            // remove all child nodes
            while (dv.hasChildNodes()) { 
                dv.removeChild(dv.lastChild); 
            } 

            img.src = "./img/spec_fic-04.png";
            img.width = "100%";
            img.height = "auto";
            dv.appendChild(img);
		},

        function step4() {
            // remove all child nodes
            while (dv.hasChildNodes()) { 
                dv.removeChild(dv.lastChild); 
            } 

            img.src = "./img/spec_fic-05.png";
            img.width = "100%";
            img.height = "auto";
            dv.appendChild(img);
		},

        function step5() {
            // remove all child nodes
            while (dv.hasChildNodes()) { 
                dv.removeChild(dv.lastChild); 
            } 

            img.src = "./img/spec_fic-06.png";
            img.width = "100%";
            img.height = "auto";
            dv.appendChild(img);
		},

        function step6() {
            // remove all child nodes
            while (dv.hasChildNodes()) { 
                dv.removeChild(dv.lastChild); 
            } 

            img.src = "./img/spec_fic-07.png";
            img.width = "100%";
            img.height = "auto";
            dv.appendChild(img);
		},

        function step7() {
            // remove all child nodes
            while (dv.hasChildNodes()) { 
                dv.removeChild(dv.lastChild); 
            } 

            img.src = "./img/spec_fic-08.png";
            img.width = "100%";
            img.height = "auto";
            dv.appendChild(img);
		},

        function step8() {
            // remove all child nodes
            while (dv.hasChildNodes()) { 
                dv.removeChild(dv.lastChild); 
            } 

            img.src = "./img/spec_fic_pg_1.png";
            img.width = "100%";
            img.height = "auto";
            dv.appendChild(img);
		},
	]

	// update our img
	function update(step) {
        console.log(steps[step]);
		steps[step]();
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