// Плавная прокрутка
$(document).ready(function() {
    $("a[href*='#']").on("click", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });    
// КОНЕЦ планой прокрутки

//change langvig
var arrEng = ["Hello! It's Me.",'My name is Andrey, 29 years old. I live in the city of Minsk. Higher Education: National Technical University EF.',
'Previous experience is associated with activity in the industrial / energy sector. As the duties had acquired experience in negotiating with the customer, work planning and team management, automation of those. processes. My responsibilities included the entire range of works, ranging from the design and choice of electrical products, ending with the delivery and assembly of cabinets with PLCs, controllers EATON programming.',
'At the same time I was always interested in the sphere of information technologies, in particular the development of web-applications, and self-studied material in this direction.',
'As you learn HTML and CSS, with a view to the practical application of knowledge, I decided to try to create a <a href="http://vwjetta2.ts9.ru/" target="_blank">website</a> on the WordPress CMS, which posted articles about the repair of the car. The site has undergone a number of radical changes later. In addition, you can meet other examples of my work in my <a href="#portfolio">portfolio</a>.',
'To acquire and improve skills engaged in the study of technical literature, view webinars, visit thematic meetings, courses "Development of web-applications on the HTML5" in BelHard.',
'At the moment, I can implement HTML-layout with PSD-template to your TK, make changes to existing pages, create small projects, including websites, business cards, etc. Landing I am able to run Adobe Photoshop, with WordPress platform; I have basic knowledge of JavaScript, PHP, Node.js, Ajax, jQuery, Bootstrap.',
'Very responsibly approach the implementation of any job, and doing all the maximum quality.',
'I would like to apply their knowledge in "combat conditions" and not to invent work for "fictional client."',
'Currently interested in employment for the position of Junior Frontend Developer (HTML Coder). Remote operation capability.',
'Layout template for Wordpress and the content of the site.<br><span>HTML/CSS/Wordpress</span>',
'Page-proofs<br><span>HTML/CSS/JS(JQ)</span>',
'Page-proofs<br><span>HTML/CSS/JS(JQ)</span>',
'Page-proofs<br><span>HTML/CSS/JS(JQ)</span>',
'Page-proofs<br><span>HTML/CSS/JS(JQ)</span>',
'Page-proofs<br><span>HTML/CSS/JS(JQ)/@media</span>','','','','','','',
'Contact number: +375 29 56 57 666 (МТС);<br> Email: <a href="mailto:a.patseiko@gmail.com">a.patseiko@gmail.com;</a><br> Skype: <a href="skype:Andrey Patseiko?chat">Andrey Patseiko</a>;<br> <a href="https://jobs.tut.by/applicant/resumes/view?resume=7fb3ac1cff023146fc0039ed1f427667793973" target="_blank">My resume</a>;<br> With all respect, Andrew!'];

var arrRu = ["Hello! It's Me.",'Меня зовут Андрей, 29 лет. Проживаю в г. Минске. Образование высшее: ЭФ БНТУ.',
'Предыдущий опыт работы связан с деятельностью в промышленной/энергетической сфере. По мере выполнения обязанностей был приобретен опыт ведения переговоров с заказчиком, планирования работ и управления командой, автоматизации тех. процессов. В мои обязанности входил весь комплекс работ, начиная от проектирования и выбора электротехнической продукции, заканчивая сдачей и сборкой шкафов с применением логических контроллеров, программирование контроллеров EATON.',
'Параллельно я постоянно интересовался сферой информационных технологий, в частности разработкой web-приложений, и самостоятельно изучал материалы в данном направлении.',
'По мере изучения HTML и CSS, в целях практического применения знаний, решил попробовать создать свой <a href="http://vwjetta2.ts9.ru/" target="_blank">сайт</a> на WordPress CMS, на котором разместил статьи про ремонт своего автомобиля. Сайт претерпел впоследствии ряд кардинальных изменений. Кроме того, вы можете познакомиться с другими примерами моих работ в моем <a href="#portfolio">портфолио</a>.',
'Для приобретения и повышения навыков занимаюсь изучением технической литературы, просмотром вебинаров, посещаю тематические встречи, курсы “Разработка web-приложений на HTML5” в БелХард.',
'На данный момент могу осуществлять HTML-верстку с PSD-шаблона по Вашему ТЗ, вносить правки в существующие страницы, создавать небольшие проекты, включая сайты-визитки, лендинги и т.п. Умею работать Adobe Photoshop, с платформой WordPress; имею базовые знания JavaScript, PHP, Node.js, Ajax, jQuery, Bootstrap.',
'Очень ответственно подхожу к выполнению любой работы, и делаю все максимально качественно.',
'Хотелось бы применять свои знания в "боевых условиях", а не выдумывать работу для "вымышленного клиента".',
'На настоящий момент интересует трудоустройство на должность Junior Frontend Developer (HTML Coder). Возможна удаленная работа.',
'Верстка шаблона для Wodpress и наполнение сайта.<br><span>HTML/CSS/Wordpress</span>',
'Верстка<br><span>HTML/CSS/JS(JQ)</span>',
'Верстка<br><span>HTML/CSS/JS(JQ)</span>',
'Верстка<br><span>HTML/CSS/JS(JQ)</span>',
'Верстка<br><span>HTML/CSS/JS(JQ)</span>',
'Верстка<br><span>HTML/CSS/JS(JQ)/@media</span>','','','','','','',
'Контактный телефон: +375 29 56 57 666 (МТС);<br> Email: <a href="mailto:a.patseiko@gmail.com">a.patseiko@gmail.com;</a><br> Skype: <a href="skype:Andrey Patseiko?chat">Andrey Patseiko</a>;<br> <a href="https://jobs.tut.by/applicant/resumes/view?resume=7fb3ac1cff023146fc0039ed1f427667793973" target="_blank">Мое резюме</a>;<br> C уважением Андрей!'
]; 
var aRu = ['Обо мне','Портфолио','Контакты'];
var aEng = ['about me','portfolio','My contact'];
$('.ru').on('click',function(){
	$(this).addClass('active');
	$('.eng').removeClass('active');
	$('.about h2').html('<a class="akor" id="about_me"></a>обо мне');
	$('body p').each(function(index, element){
		return $(element).html(arrRu[index]);		
	});
	$('.portfolio h2').html('<a class="akor" id="portfolio"></a>Портфолио');
	$('.after h2').text('Мои контактные данные.');
	$('ul a').each(function(index, element){
		return $(element).html(aRu[index]);		
	});
	
});

$('.eng').on('click',function(){
	$(this).addClass('active');
	$('.ru').removeClass('active');
	$('.about h2').html('<a class="akor" id="about_me"></a>about me');
	$('body p').each(function(index, element){
		return $(element).html(arrEng[index]);		
	});
	$('.portfolio h2').html('<a class="akor" id="portfolio"></a>portfolio');
	$('.after h2').text('My contact details.');
	$('ul a').each(function(index, element){
		return $(element).html(aEng[index]);		
	});
})
//End coding
});

