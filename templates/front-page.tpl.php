<div id="content" class="column"><div class="section">

        <?php if ($mission): ?>
          <div id="mission"><?php print $mission; ?></div>
        <?php endif; ?>

        <?php print $highlight; ?>

        <?php print $breadcrumb; ?>
		
		<?php print $featured_posts; ?>
		<div style="clear:both"></div>
		<?php /*print $front_rotator_image; */ ?>
		<?php/* print $front_polling; */?>
		
        <?php print $messages; ?>

        <?php if ($tabs): ?>
          <div class="tabs"><?php print $tabs; ?></div>
        <?php endif; ?>
        <?php print $help; ?>

        <?php print $content_top; ?>

        <div id="content-area">
		
		  <?php print $content; ?>

        </div>

        <?php print $content_bottom; ?>

        <?php if ($feed_icons): ?>
          <div class="feed-icons"><?php print $feed_icons; ?></div>
        <?php endif; ?>

</div></div> <!-- /.section, /#content -->