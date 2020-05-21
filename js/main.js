$(window).on('load', () => {
	$('#status').fadeOut(350, () => {
		/**Scrolling to the bottom*/
		//$(window).scrollTop(9712)
		$('#preloader').delay(150).fadeOut('slow',() => {
			// $('#pre').animate({
			// 	marginTop: '25%'
			// }, 1500)
			/**Scrolling to the top with animate*/
			// $("html, body").animate({ 
			//     scrollTop: 0
			// }, 2200) 
		})
	})
	/*GOOGLE MAP*/
	//Map Adress 
    let address = '3602 University Street, Seattle, US'
    //Lattitude & Longitude
    let myLatLng = {
    	lat: 47.611840,
    	lng: -122.326250
    } 
    // Render Map
    let map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 11,
    	center: myLatLng
    })
    //Add Marker
    let marker = new google.maps.Marker({
    	position: myLatLng, 
    	map: map,
    	title: 'Click to see Address'
    })
    //Info Windo
    let infowindow = new google.maps.InfoWindow({
    	content: address
    })
    //Show Info Window When Click
    marker.addListener('click', () => {
	    infowindow.open(map, marker)
	})
	/**Navigation Bar**/
	let showHide = () => {
		if($(window).scrollTop() > 50){
	        $("nav").addClass("white-nav")
	        $("#logo").addClass("white-logo")
	        $(".btn-go-top").fadeIn()
	    }else{
	        $("nav").removeClass("white-nav")
	        $("#logo").removeClass("white-logo")
	        $(".btn-go-top").fadeOut()
	    }
	}
	showHide()
	
	$(window).scroll(() => {
	    showHide()
	})
})
$(() => {
	/**Smoot Scroll**/
	$("a.smooth-scroll").click((evt) => {
		//Prevent the Link opening url
		evt.preventDefault()
		//Get section id ex. #home, #work etc
		let id = $(evt.currentTarget).attr("href")
		$("html, body").animate({
			scrollTop: $(id).offset().top - 51
		}, 1250, "easeInOutExpo")
	})
	/**Owl-Corousel Slider**/
	$("#t-members").owlCarousel({
		items: 2,
		autoplay: true,
		smartSpeed: 500,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: [
			'<i class="las la-caret-square-left"></i>',
			'<i class="las la-caret-square-right"></i>'
		],
		responsive : {
		    // breakpoint from 0 up
		    0 : {
		        items : 1
		    },
		    // breakpoint from 480 up
		    480 : {
		        items : 2
		    }
		}
	})
	/*PROGRESS-BAR*/
	$('#progress-bars').waypoint(function(){
		$('.progress-bar').each(function(){
			$(this).animate({
				width: $(this).attr('aria-valuenow') + '%'
			}, 1000)
		})
		this.destroy()
	}, {
		offset: 'bottom-in-view'
	});
	/*Responsive-Tabs*/
	$('#services-tabs').responsiveTabs({
    	animation: 'slide'
    })
    /**Isotope Buttons*/
	$(window).on('load', () => {
		$('#isotope-container').isotope({
    
		})
		$('#isotope-filters').on('click', 'button', (evt) => {
	    	/*get filter value*/
		    let filterValue = $(evt.currentTarget).attr('data-filter')
		    /*Filter Work Items*/
		    $('#isotope-container').isotope({
		    	filter: filterValue
			})
			/*Add & Remove Active Button Class*/
			$('#isotope-filters').find('.active').removeClass('active')
			$(evt.currentTarget).addClass('active')
		})
	})
	/**Magnific Popup**/
	$('#work-wrapper').magnificPopup({
	    /*Select 'a' tag*/
	    delegate: 'a',
	    type: 'image',
	    gallery: {
	    	enabled: true
	    }
	})
	/**Testemonials Slider*/
	$("#testimonials-slider").owlCarousel({
		items: 1,
		autoplay: true,
		smartSpeed: 500,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: [
			'<i class="las la-caret-square-left"></i>',
			'<i class="las la-caret-square-right"></i>'
		]

	})
	/*Counter*/
	$('.counter').counterUp({
	    delay: 10,
	    time: 2000
	});
	/**Clients Slider*/
	$("#clients-list").owlCarousel({
		items: 6,
		autoplay: false,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		dots: false,
		navText: [
			'<i class="las la-caret-square-left"></i>',
			'<i class="las la-caret-square-right"></i>'
		]
	})
	if($(window).width() >= 768 && $(window).width() <= 991){
	   $("footer a").addClass("md-hidden")
	}
})







