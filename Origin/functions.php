<?php
/** タイトル読み込み */
add_theme_support('title-tag');

/* アイキャッチ画像の有効化 */
add_theme_support('post-thumbnails');

/** アイキャッチ画像 サイズ指定させない */
add_filter('wp_calculate_image_srcset_meta', '__return_null');

/* 管理バーの非表示 (margin-topがなくなる) */
add_filter('show_admin_bar', '__return_false');

/*
cdnからjquery読み込むため、
wordpress同梱jquery読み込み中止
*/
function load_script()
{
	if (!is_admin()) {
		/* jQueryを登録解除 */
		wp_deregister_script('jquery');

		/* リセットcss */
		wp_enqueue_style('reset', 'http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css', array(), '3.18.1');

		/* Google font */
		wp_enqueue_style('google-font', 'https://fonts.googleapis.com/css?family=Nunito+Sans:700%7CNunito:300,600"', array());

		/* bootstrap読み込み */
		wp_enqueue_style(
			'bootstrap',
			get_template_directory_uri() . '/bootstrap.min.css',
			array(),
			'3.3.7'
		);

		/* font-awesome読み込み */
		wp_enqueue_style(
			'fontawesome',
			get_template_directory_uri() . '/font-awesome.min.css',
			array(),
			'4.7.0'
		);

		wp_enqueue_style(
			'main',
			get_template_directory_uri() . '/style.css',
			array()
		);

		/* footerに読み込ませるcdn */
		wp_enqueue_script('cdn-jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', array(), null, true);

		/* bootstrap.min.js 読み込み */
		wp_enqueue_script(
			'bootstrap',
			get_template_directory_uri() . '/js/bootstrap.min.js',
			array(),
			'3.3.7'
		);

		/* main.js 読み込み */
		wp_enqueue_script(
			'main',
			get_template_directory_uri() . '/js/main.js',
			array('cdn-jquery')
		);
	}
}
add_action('init', 'load_script');

// contact-form7 email
function wpcf7_main_validation_filter($result, $tag)
{
	$type = $tag[' type '];
	$name = $tag[' name '];
	$_POST[$name] = trim(strtr((string)$_POST[$name], "\n", " "));
	if (' email ' == $type || ' email * ' == $type) {
		if (preg_match(' / (. *) _confirm $ / ', $name, $matches)) {
			$target_name = $matches[1];
			if ($_POST[$name] != $_POST[$target_name]) {
				if (method_exists($result, ' invalidate ')) {
					$result->invalidate($tag, "確認用のメールアドレスが一致していません");
				} else {
					$result[' valid '] = false;
					$result[' reason '][$name] = ' 確認用のメールアドレスが一致していません ';
				}
			}
		}
	}
	return $result;
}

add_filter(' wpcf7_validate_email ', ' wpcf7_main_validation_filter ', 11, 2);
add_filter(' wpcf7_validate_email * ', ' wpcf7_main_validation_filter', 11, 2);


function create_post_type()
{
	$exampleSupports = [
		'title',
		'editor',
		'thumbnail',
		'revisions'
	];
	// add post type
	register_post_type(
		'news',
		array(
			'label' => 'News',
			'public' => true,
			'has_archive' => true,
			'menu_position' => 5,
			'supports' => $exampleSupports
		)
	);
}
add_action('init', 'create_post_type');
