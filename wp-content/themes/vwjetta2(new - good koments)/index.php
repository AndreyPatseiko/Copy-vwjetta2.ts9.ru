<?php get_header(); ?>

<?php get_sidebar(); ?>

<div class="content_glav_page">
			
						
			<h2>О чем данный сайт.</h2>
		
			<p><img class="index" src="<?php bloginfo('template_directory'); ?>/img_fon/vw3.jpg" alt="pic_1">Данный сайт написан как дополнительная помощь для тех, кто хочет своими силами производить ремонт автомобиля серии Фольксваген Джэта2\Гольф2.</br>Помимо того, что здесь описываются основы ремонта, здесь также размещаються стати по модернизации данного автомобиля.</p>
			</div>

			<div class="last_news">
			
			
				<h3> Последние обновления</h3>

				

					<?php if(have_posts()) : ?>
				<?php while(have_posts()) : the_post(); ?>
					<div class="post">
						<div class="entry">
						<h2><?php the_title();?></h2>
						<?php the_post_thumbnail() ?>
						<?php the_excerpt(); ?>
							<!--<?php the_content();?>-->
							<p class="read_more">
								<a  href="<?php the_permalink(); ?>" title="<?php the_title();?>"> Читать продолжение...</a>
								</p>
							<div id="postmeta" class="postmetadata">
								<div class="postleft"><?php _e('Категории&#58;'); ?> <?php the_category(', ') ?>.</br>
								<?php _e('Дата публикации&#58;'); ?> <?php the_time('j F Y') ?>.</br>
								<?php comments_popup_link('нет коментариев &#187;', '1 коментарии &#187;', '% коментариев &#187;'); ?> <?php edit_post_link('Edit', ' &#124; ', ''); ?>
								<br><br>
								</div>
								<div class="postright"><p>Рейтинг статьи.</p><?php if(function_exists('the_ratings')) { the_ratings(); } ?></div>
								</div>			
<hr>
						</div>
					</div>
				<?php endwhile; ?>
				<div class="navigation">
					<?php wp_pagenavi(); ?>
				</div>
			<?php else : ?>
				<div class="post" id="post-<?php the_ID(); ?>">
					<h2><?php _e('Не найдено ('); ?></h2>
				</div>
			<?php endif; ?>
		</div>

	

<?php comments_template('', true); ?>
<?php get_footer(); ?>