console.log('first');
		$(document).ready(function () { //페이지 로딩 제일 마지막에 실행됨. first->third->second 순서로 콘솔에 찍힘.
			console.log('second');
			console.log(document.getElementById('food_1').childNodes[1].childNodes[0].nodeValue); //우리가 지금까지 사용하던 방식.
			console.log($('#food_1').children().eq(0).html()); //jQuery 표현식.
			$('#food_1> ul > li').eq(0).css('background', 'red');
			$('#food_1> ul > li').eq(1).html('bulgogi');
		});
		console.log('third');