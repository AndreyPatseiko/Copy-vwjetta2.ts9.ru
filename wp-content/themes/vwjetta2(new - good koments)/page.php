<?php get_header(); ?>

<?php get_sidebar(); ?>
			<div class="last_news">
				<h2><?php the_title(); ?></h2>
				<?php the_content(); ?>
				<p class="postmetadata">
								<?php _e('Категории&#58;'); ?> <?php the_category(', ') ?>. <?php _e('Автор'); ?> <?php  the_author(); ?><br />
								<?php comments_popup_link('нет коментариев &#187;', '1 коментарии &#187;', '% коментариев &#187;'); ?> <?php edit_post_link('Edit', ' &#124; ', ''); ?>
							</p>
							<div><?php the_time('j.M.Y') ?></div>
		</div>
		
<?php get_footer(); ?>