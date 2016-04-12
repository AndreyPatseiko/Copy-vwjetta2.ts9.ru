<?php wp_footer(); ?>
<div class="footer">
	<div class="fot_content">
		<div class="info">
			<ul>
				<?php if ( function_exists('dynamic_sidebar') && dynamic_sidebar(2) ) : else : ?>
				<?php endif;?>
			</ul>
		</div>
	</div>	
</div>

</div>
</div>

</body>
</html>