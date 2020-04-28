$(document).ready(function() {

	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '50px',
		arrows: false,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false,
				centerMode: true,
				centerPadding: '50px'
			}
		}
		]
	});

	// Choice of options replacement select
	$(".screen7 .acord .box").click(function() {
		$(this).toggleClass("active");
		if ($(this).hasClass("active")) {
			$(this).siblings().removeClass("active");
			$(this).children(".descr").slideDown();
			$(this).siblings().children(".descr").slideUp();
		} else {
			$(this).children(".descr").slideUp();
		}
		return false;
	});

	// $(document).mouseup(function (e) {
	// 	var container = $(".screen7 .acord .box .item .");
	// 	if (container.has(e.target).length === 0){
	// 		container.removeClass("active");
	// 	}
	// });


	$('.box_logo .img').click(function(){
		$(".mnu_list").slideToggle();
	});


	// Inputmask
	$("input[type='tel']").inputmask("+7 (999) 999-99-99");


	$(document).ready(function () {
		$('input,textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input,textarea').blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	});


	//E-mail Ajax Send
	$(".top_form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.top_form').trigger('reset');
			$('#modal2').modal('show');
			setTimeout(function() {
				$('.blocker').hide();
			}, 1500);
		});
		return false;
	});

	//E-mail Ajax Send
	$(".modal_form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.modal_form').trigger('reset');
			$('#modal2').modal('show');
			setTimeout(function() {
				$('.blocker').hide();
			}, 1500);
			
		});
		return false;
	});



});