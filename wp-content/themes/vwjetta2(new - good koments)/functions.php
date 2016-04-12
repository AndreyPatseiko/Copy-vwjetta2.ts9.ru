<?php 
if ( function_exists('register_sidebar') )
	register_sidebar(1);
	register_sidebar(2);
 // добовляем миниатюры для постов
 		add_theme_support('post-thumbnails');
// Редактируем страницу регистрации login.php 
		function custom_login_css() {
			echo '<link rel="stylesheet" type="text/css" href="'.get_stylesheet_directory_uri().'/login/login-styles.css" />';
		}
		add_action('login_head', 'custom_login_css');
// Устанавливаем ссылку с логотипа на свою
		add_filter( 'login_headerurl', 'custom_login_header_url' );

function custom_login_header_url($url) {
return 'http://lockalhost/vwjetta2';
}
?>