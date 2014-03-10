<?php

get_header(); ?>

<div id="index" class="main">


		<?php
			if ( have_posts() ) :
				// Start the Loop.
				while ( have_posts() ) : the_post(); ?>

					<div class="post <?php echo get_post_meta(get_the_ID(), 'class', true); ?>">
						<div class="wrap">
							<h2><?php the_title(); ?></h2>
							<div class="content">
								<?php the_content(); ?>
							</div>
						</div>
					</div>

				<?php endwhile;

			endif;
		?>

</div>

<?php get_footer(); ?>
