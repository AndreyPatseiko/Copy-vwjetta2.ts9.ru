<?php get_header(); ?>

<?php get_sidebar(); ?>
			 <div class="content">
				<!-- <h2><?php the_title(); ?></h2> -->
				<?php the_content(); ?>

				<div id="postmeta" class="postmetadata">
								<div class="postleft"><?php _e('Категории&#58;'); ?> <?php the_category(', ') ?>.</br>
								<!--<?php _e('Автор&#58;'); ?> <?php  the_author(); ?>.</br>-->
								<?php _e('Дата публикации&#58;'); ?> <?php the_time('j F Y') ?>.</br>
								<?php comments_popup_link('нет коментариев &#187;', '1 коментарии &#187;', '% коментариев &#187;'); ?> <?php edit_post_link('Edit', ' &#124; ', ''); ?>
								</br></br>
								</div>
								<div class="postright"><p>Рейтинг статьи.</p><?php if(function_exists('the_ratings')) { the_ratings(); } ?></div>
								</div>							
		</div>
				
		<div class="comment">
		<?php// comment_form(); ?>
		<?php comments_template('', true); ?>		
		</div>
<?php get_footer(); ?>