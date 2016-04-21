$(function () {
	var elWrap = $('#slider'),
		el =  elWrap.find('img'),
		indexImg = 1,
		indexMax = el.length;
	
	function change () {
		el.fadeOut(500);
		el.filter(':nth-child('+indexImg+')').fadeIn(500);
	}	
		
	
	
	elWrap.append('<span class="next"></span><span class="prev"></span>');
	
	$('span.next').click(function() {
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}
		change ();
	});
	$('span.prev').click(function() {
		indexImg--;
		if(indexImg < 1) {
			indexImg = indexMax;
		}
		change ();
	});	
});

$(function() {
    
    
    var html = $('#test').html();
    var articles = [
      {
          title: 'Алина Лоскутова',
          position: 'Студентка ХНУРЭ',
          vk:'Мои контакты:',
          contacts: 'http://vk.com/id192667426',
          email: 'alina.loscutova@nure.ua',
          skype: 'alina.loscutova',
      }, 
  
    ];

    var content = tmpl(html, {
        data: articles
    });
    $('body').append(content);
});