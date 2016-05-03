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
var arrEng = ["Hello! It's Me.",'My name is Andrey, 29 years old. I live in Minsk. I graduated from National Technical University, EF.',
'My previous experience is closely related to industrial / energy sphere. Among my working responsibilities were: negotiating with customers, daily planning and team management, processes automation. On the whole, I was responsible for a wide range of activities,  including designing and selecting of electrical and technical environment, assembling of cabinets with PLCs, as well as programming of EATON controllers.',
'At the same time I was always interested in the sphere of information technologies. My paticular interest was in web applications development, and I studied all related materials on this topic.',
'As I learned more and more about HTML and CSS, I decided to create my own <a href="http://vwjetta2.ts9.ru/" target="_blank">website</a> on WordPress CMS to apply gained knowledge, where I posted articles about my experience with repairing my car. The site has undergone afterwards a number of radical changes. You can also see some more examples of websites I created in my <a href="#portfolio">portfolio</a>.',
'In order to acquire new knowledge and improve my skills, I regularly study technical literature, watch webinars and visit IT events. I also took the course "Development of HTML5 web appications" in BelHard.',
'At the moment, I can develop HTML layout from PSD in accordance with a technical specification, fix frontend issues in existing pages, create small projects including websites and landing pages. I have experience with Adobe Photoshop, WordPress platform, have basic knowledge of JavaScript, PHP, Node.js, Ajax, jQuery, Bootstrap.',
'I always do my best to perform any task in due time and with maximum quality.',
'Currently I am looking for Junior Frontend Developer (HTML Coder) job opportunities.',
'',
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
	$('.after h2').text('My contacts.');
	$('ul a').each(function(index, element){
		return $(element).html(aEng[index]);		
	});
})
//End coding
});

