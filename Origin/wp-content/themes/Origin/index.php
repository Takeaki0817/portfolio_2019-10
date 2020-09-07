<?php
/*
Template Name: Origin
*/
 ?>

<?php get_header(); ?>

  <body>
    <div id="introduce">
      <img class="intro-heading" src="<?php echo get_template_directory_uri(); ?>/img/intro-heading.gif" alt="">
      <div class="intro-btn-wrapper">
        <span class="small-arrow right"></span>
        <span class="small-arrow left"></span>
        <span class="large-arrow right"></span>
        <span class="large-arrow left"></span>
        <div class="intro-btn">
          <div class="btn-inner">
            <img id="btn-switch" src="<?php echo get_template_directory_uri(); ?>/img/switch.svg" alt="">
            <span>start</span>
          </div>
        </div>
      </div>
    </div>

    <nav>
      <span class="nav-top">
        <div class="dec-L_1">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_2">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_3">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_4">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
      </span>
      <span class="nav-about">
        <div class="dec-L_1">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_2">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_3">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_4">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
      </span>
      <span class="nav-skill">
        <div class="dec-L_1">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_2">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_3">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_4">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
      </span>
      <span class="nav-contact">
        <div class="dec-L_1">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_2">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_3">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
        <div class="dec-L_4">
          <div class="dec-S_1"></div>
          <div class="dec-S_2"></div>
          <div class="dec-S_3"></div>
        </div>
      </span>
    </nav>

    <section id="top">
      <div class="box"></div>

      <div id="infomation">
        <h2>Infomation</h2>
        <div class="infomation-wrapper">
          <img id="arrow" src="<?php echo get_template_directory_uri(); ?>/img/infoScroll-arrow.svg" alt="">
          <div id="infomation-content">
            <ul>
              <?php
                $args = array(
                  'posts_per_page' => 20 // 表示件数の指定
                );
                $posts = get_posts( $args );
                foreach ( $posts as $post ): // ループスタート
                setup_postdata( $post ); // 記事データ
              ?>
              <?php if(empty($post->post_title)){ ?>
                <li>   <!-- remove_filterで自動整形をオフにする -->
                <?php remove_filter('the_content', 'wpautop'); ?><?php the_content(); ?>
              </li>
              <?php } else { ?>
              <li>
                <?php the_time( get_option( 'date_format' ) ); ?>&nbsp;&nbsp;&nbsp;<?php the_title(); ?>
              </li>
              <?php } ?>
              <?php
                endforeach; // ループ終わり
                wp_reset_postdata(); // 直前のクエリを復元する
              ?>
            </ul>
          </div>
        </div>
      </div>

      <div id="path">
        <div class="upper">
          <div id="to-about" class="anker">
            <h3>A<span>b</span>out</h3>
          </div>
          <div class="logo-wrapper">
            <img id="top-logo" src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="">
          </div>

        </div>
        <div class="lower">
          <div id="to-skill" class="anker">
            <h3>S<span>k</span>ill</h3>
          </div>
          <div id="to-contact" class="anker">
            <h3>C<span>o</span>ntact</h3>
          </div>
        </div>
      </div>

    </section>


    <section id="about">
      <div class="box"></div>

      <div class="photo-wrapper">
        <img class="myself_l" src="<?php echo get_template_directory_uri(); ?>/img/my-photo_l.svg" alt="">
        <img class="myself_r" src="<?php echo get_template_directory_uri(); ?>/img/my-photo_r.svg" alt="">
        <img class="myself" src="<?php echo get_template_directory_uri(); ?>/img/my-photo.svg" alt="">
        <div class="name">
          <h3>島<span>津</span>&emsp;岳明</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 575.707 126.707">
            <g id="グループ_6" data-name="グループ 6" transform="translate(-591.793 -609.793)">
              <line id="線_5" data-name="線 5" x2="125" y2="125" transform="translate(592.5 610.5)" fill="none" stroke="#fff" stroke-width="2"/>
              <path id="パス_234" data-name="パス 234" d="M0,0H450" transform="translate(717.5 735.5)" fill="none" stroke="#fff" stroke-width="2"/>
            </g>
          </svg>
          <h4>SHIMATSU&ensp;TAKEAKI</h4>
        </div>
      </div>

      <h2>About</h2>

      <p>1999年8月17日生まれ。
        <br>音楽とモノづくりとキャンプとお酒が好きで、信じているものは科学。
        <br>
        <br>この作品のコンセプトは「操作したくなるポートフォリオ」で、アニメーションを充分に魅せながら操作しにくさを感じさせないようにデザインをした。
        <br>配色や配置が特徴的だがレイアウトの4原則を意識して作った為、斬新ながら快適に過ごせる作品となっている。
        <br>
        <br>テーマである "Origin" は意味合いとして「起源」と言った意味合いがあるが、私の初めての作品集ということでこの言葉を選ばせてもらった。
        <br>派生語である "originality" ・「独創性」も私がたどり着きたいところではあるから、この作品の先にそれがあることに対しての願望も込めている。
      </p>

    </section>


    <section id="skill">
      <div class="box"></div>

      <div id="portfolio">
        <svg class="hexagon-wrapper" version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
        	 y="0px" viewBox="0 0 1257.4 835.5" style="enable-background:new 0 0 1257.4 835.5;" xml:space="preserve">
          <style type="text/css">
          	.st0{fill:#FFFFFF;stroke:#FFFFFF;stroke-miterlimit:10;}
          	.st1{fill:none;stroke:#FFFFFF;stroke-width:1;stroke-miterlimit:10;}
          	.st2{fill:#FFFFFF;stroke:#FFFFFF;stroke-width:1;stroke-miterlimit:10;}
          </style>
          <path class="st0" d="M547.3-222"/>
          <path class="st0" d="M1391.6,83.8"/>
          <g>
          	<g>
          		<path class="st1" d="M63.4,294.5"/>
          		<g class="object-frame">
                <!-- 小さいオブジェクト群 -->
          			<path class="st2 small-object_1" d="M893.6,44.1h9.1c-9.2-15.2-19.3-29.9-30.1-43.9h-9.7C873.8,14.2,884.1,28.8,893.6,44.1z"/>
          			<path class="st2 small-object_2" d="M923.8,66h8.7c-7.8-15.1-16.4-29.8-25.6-43.9h-9.2C907.2,36.2,915.9,50.9,923.8,66z"/>
          			<path class="st2 small-object_3" d="M951.6,88h8.4c-6.6-15-13.9-29.7-21.9-43.9h-8.8C937.5,58.3,944.9,72.9,951.6,88z"/>
          			<g>
                  <!-- 右側のオブジェクト -->
          				<path class="st2 right-object" d="M957.3,294.5c0-20.5-1.3-40.6-3.9-60.4h46.5c-4-34.1-11.4-67.2-21.7-99l-54.4-14.6
          					C906.2,76.7,882.3,36.2,853,0.1h-14.3c67.1,79.5,107.5,182.2,107.5,294.4s-40.4,214.8-107.5,294.4H853h57.7
          					c8.9-12.8,17.3-26,25-39.5h-54c7.5-11.4,14.4-23.3,20.8-35.4l77-64.6c9.6-30.4,16.4-61.9,20.2-94.5h-46.5
          					C956,335.2,957.3,315,957.3,294.5z"/>
                  <!-- 左側のオブジェクト -->
          				<path class="st2 left-object" d="M140,0.2h-14.3H68C39.1,41.5,16,87.3,0.2,136.4h48.7C31.2,185.8,21.5,239,21.5,294.5
          					c0,61.3,11.8,119.9,33.3,173.5H5.4c11.6,32.4,26.4,63.3,44,92.3h54.9c6.8,9.8,13.9,19.3,21.4,28.6H140
          					C72.9,509.4,32.5,406.7,32.5,294.5S72.9,79.7,140,0.2z"/>
          			</g>
          		</g>
              <!-- portfolioの下線のオブジェクト -->
          		<g>
          			<polygon class="st2 under-line" points="1369,323 995.1,323 989.9,318.7 1363.7,318.7 			"/>
          			<line class="st1 under-line" x1="1345.4" y1="303.3" x2="1369" y2="323"/>
          			<line class="st1 under-line" x1="989.9" y1="318.7" x2="1002.9" y2="329.6"/>
          		</g>
          	</g>
          	<g>
              <!-- 六角形左上のオブジェクト -->
          		<g>
          			<polygon class="st2 hex-top" points="453.2,27.9 465.5,35 416,63.6 358.6,30.4 204.5,119.4 266.1,154.9 420.1,66 469.6,37.4 498.1,20.9
          				481.7,11.5 			"/>
          		</g>
              <!-- 六角形真左のオブジェクト群 -->
          		<g class="hex-left">
          			<polygon class="st2" points="191.6,378 169.6,390.7 169.6,488.4 253.1,440.2 253.1,414 253.1,342.5 253.1,177.8 191.6,142.3
          				"/>
          			<polygon class="st2" points="187.2,338.4 187.2,373.6 169.6,383.7 169.6,348.6 			"/>
          		</g>
          	</g>
            <!-- 右下表示用のオブジェクト群 -->
          	<line class="st1 display" x1="932.5" y1="534.6" x2="1007.5" y2="534.6"/>
          	<path class="st2 display" d="M1084.3,612.9c-8.6,0-16.9,1-25,2.8l-6.5-11.3l0,0l-40.3-69.8h-5l33,57.1l-5.9,8.4l11.3,19.6
          		c-42.5,15.6-72.8,56.5-72.8,104.4c0,61.4,49.8,111.2,111.2,111.2s111.2-49.8,111.2-111.2S1145.7,612.9,1084.3,612.9z"/>
          	<circle class="st2 display" cx="926.5" cy="534.6" r="6"/>
          </g>
        </svg>
        <div class="hexagon">
          <div class="hexagon__inner-1">
            <div class="hexagon__inner-2">
              <div class="hexagon__inner-3">
                <ul class="hexagon__inner-image">
                  <li class="selected">
                    <h3>Profile</h3>
                    <a target="_blank" href="<?php echo content_url(); ?>/portfolio/profile/index.html"></a>
                  </li>
                  <li>
                    <h3>Blog</h3>
                    <a target="_blank" href="<?php echo content_url(); ?>/portfolio/blog/index.html"></a>
                  </li>
                  <li>
                    <h3>Outdoor<br>Shop</h3>
                    <a target="_blank" href="<?php echo content_url(); ?>/portfolio/outdoor shop/index.html"></a>
                  </li>
                  <li>
                    <img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="">
                    <a target="_blank" href=""></a>
                  </li>
                  <li>
                    <img src="<?php echo content_url(); ?>/portfolio/珈琲宅急便/logo-1.png" alt="">
                    <a target="_blank" href="<?php echo esc_url( home_url( '/Portfolio/' ) ); ?>#design-skills"></a>
                  </li>
                  <li>
                    <img src="<?php echo content_url(); ?>/portfolio/美容室 L/Introduce – 1.png" alt="">
                    <a target="_blank" href="<?php echo esc_url( home_url( '/Portfolio/' ) ); ?>#design-skills"></a>
                  </li>
                  <li>
                    <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20566.93%20170.04%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xml%3Aspace%3D%22preserve%22%20viewBox%3D%220%200%20566.93%20170.04%22%20version%3D%221.1%22%20y%3D%220px%22%20x%3D%220px%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20width%3D%22567%22%20height%3D%22171%22%20fill%3D%22%23FFF%22%3E%3Cpath%20d%3D%22m87.996%201.277c-46.249%200-83.743%2037.493-83.743%2083.742%200%2046.254%2037.494%2083.745%2083.743%2083.745%2046.251%200%2083.743-37.491%2083.743-83.745%200-46.246-37.49-83.738-83.744-83.738zm38.404%20120.78c-1.504%202.467-4.718%203.24-7.177%201.737-19.665-12.019-44.417-14.734-73.567-8.075-2.809%200.644-5.609-1.117-6.249-3.925-0.643-2.809%201.11-5.609%203.926-6.249%2031.9-7.293%2059.263-4.154%2081.336%209.334%202.46%201.51%203.24%204.72%201.73%207.18zm10.25-22.799c-1.894%203.073-5.912%204.037-8.981%202.15-22.505-13.834-56.822-17.841-83.447-9.759-3.453%201.043-7.1-0.903-8.148-4.35-1.04-3.453%200.907-7.093%204.354-8.143%2030.413-9.228%2068.221-4.758%2094.071%2011.127%203.07%201.89%204.04%205.91%202.15%208.976zm0.88-23.744c-26.994-16.031-71.52-17.505-97.289-9.684-4.138%201.255-8.514-1.081-9.768-5.219-1.254-4.14%201.08-8.513%205.221-9.771%2029.581-8.98%2078.756-7.245%20109.83%2011.202%203.722%202.209%204.943%207.016%202.737%2010.733-2.2%203.722-7.02%204.949-10.73%202.739z%22/%3E%3Cpath%20d%3D%22m232.09%2078.586c-14.459-3.448-17.033-5.868-17.033-10.953%200-4.804%204.523-8.037%2011.249-8.037%206.52%200%2012.985%202.455%2019.763%207.509%200.205%200.153%200.462%200.214%200.715%200.174%200.253-0.038%200.477-0.177%200.625-0.386l7.06-9.952c0.29-0.41%200.211-0.975-0.18-1.288-8.067-6.473-17.151-9.62-27.769-9.62-15.612%200-26.517%209.369-26.517%2022.774%200%2014.375%209.407%2019.465%2025.663%2023.394%2013.836%203.187%2016.171%205.857%2016.171%2010.63%200%205.289-4.722%208.577-12.321%208.577-8.44%200-15.324-2.843-23.025-9.512-0.191-0.165-0.453-0.24-0.695-0.226-0.255%200.021-0.488%200.139-0.65%200.334l-7.916%209.421c-0.332%200.391-0.29%200.975%200.094%201.313%208.96%207.999%2019.98%2012.224%2031.872%2012.224%2016.823%200%2027.694-9.192%2027.694-23.419%200.03-12.01-7.16-18.66-24.77-22.944z%22/%3E%3Cpath%20d%3D%22m294.95%2064.326c-7.292%200-13.273%202.872-18.205%208.757v-6.624c0-0.523-0.424-0.949-0.946-0.949h-12.947c-0.523%200-0.946%200.426-0.946%200.949v73.602c0%200.523%200.423%200.949%200.946%200.949h12.947c0.522%200%200.946-0.426%200.946-0.949v-23.233c4.933%205.536%2010.915%208.241%2018.205%208.241%2013.549%200%2027.265-10.43%2027.265-30.368%200.02-19.943-13.7-30.376-27.25-30.376zm12.21%2030.375c0%2010.153-6.254%2017.238-15.209%2017.238-8.853%200-15.531-7.407-15.531-17.238%200-9.83%206.678-17.238%2015.531-17.238%208.81-0.001%2015.21%207.247%2015.21%2017.237z%22/%3E%3Cpath%20d%3D%22m357.37%2064.326c-17.449%200-31.119%2013.436-31.119%2030.592%200%2016.969%2013.576%2030.264%2030.905%2030.264%2017.511%200%2031.223-13.391%2031.223-30.481%200-17.031-13.62-30.373-31.01-30.373zm0%2047.714c-9.281%200-16.278-7.457-16.278-17.344%200-9.929%206.755-17.134%2016.064-17.134%209.341%200%2016.385%207.457%2016.385%2017.351%200%209.927-6.8%2017.127-16.17%2017.127z%22/%3E%3Cpath%20d%3D%22m425.64%2065.51h-14.247v-14.566c0-0.522-0.422-0.948-0.945-0.948h-12.945c-0.524%200-0.949%200.426-0.949%200.948v14.566h-6.225c-0.521%200-0.943%200.426-0.943%200.949v11.127c0%200.522%200.422%200.949%200.943%200.949h6.225v28.791c0%2011.635%205.791%2017.534%2017.212%2017.534%204.644%200%208.497-0.959%2012.128-3.018%200.295-0.165%200.478-0.483%200.478-0.821v-10.596c0-0.327-0.17-0.636-0.45-0.807-0.282-0.177-0.633-0.186-0.922-0.043-2.494%201.255-4.905%201.834-7.6%201.834-4.154%200-6.007-1.886-6.007-6.113v-26.756h14.247c0.523%200%200.944-0.426%200.944-0.949v-11.126c0.02-0.523-0.4-0.949-0.93-0.949z%22/%3E%3Cpath%20d%3D%22m475.28%2065.567v-1.789c0-5.263%202.018-7.61%206.544-7.61%202.699%200%204.867%200.536%207.295%201.346%200.299%200.094%200.611%200.047%200.854-0.132%200.25-0.179%200.391-0.466%200.391-0.77v-10.91c0-0.417-0.268-0.786-0.67-0.909-2.565-0.763-5.847-1.546-10.761-1.546-11.958%200-18.279%206.734-18.279%2019.467v2.74h-6.22c-0.522%200-0.95%200.426-0.95%200.948v11.184c0%200.522%200.428%200.949%200.95%200.949h6.22v44.409c0%200.523%200.422%200.949%200.944%200.949h12.947c0.523%200%200.949-0.426%200.949-0.949v-44.406h12.088l18.517%2044.398c-2.102%204.665-4.169%205.593-6.991%205.593-2.281%200-4.683-0.681-7.139-2.025-0.231-0.127-0.505-0.148-0.754-0.071-0.247%200.087-0.455%200.271-0.56%200.511l-4.388%209.627c-0.209%200.455-0.03%200.989%200.408%201.225%204.581%202.481%208.716%203.54%2013.827%203.54%209.56%200%2014.844-4.453%2019.502-16.433l22.461-58.04c0.113-0.292%200.079-0.622-0.1-0.881-0.178-0.257-0.465-0.412-0.779-0.412h-13.478c-0.404%200-0.765%200.257-0.897%200.636l-13.807%2039.438-15.123-39.464c-0.138-0.367-0.492-0.61-0.884-0.61h-22.12z%22/%3E%3Cpath%20d%3D%22m446.5%2065.51h-12.947c-0.523%200-0.949%200.426-0.949%200.949v56.485c0%200.523%200.426%200.949%200.949%200.949h12.947c0.522%200%200.949-0.426%200.949-0.949v-56.481c0-0.523-0.42-0.949-0.95-0.949z%22/%3E%3Cpath%20d%3D%22m440.1%2039.791c-5.129%200-9.291%204.152-9.291%209.281%200%205.132%204.163%209.289%209.291%209.289%205.127%200%209.285-4.157%209.285-9.289%200-5.128-4.16-9.281-9.28-9.281z%22/%3E%3Cpath%20d%3D%22m553.52%2083.671c-5.124%200-9.111-4.115-9.111-9.112s4.039-9.159%209.159-9.159c5.124%200%209.111%204.114%209.111%209.107%200%204.997-4.04%209.164-9.16%209.164zm0.05-17.365c-4.667%200-8.198%203.71-8.198%208.253%200%204.541%203.506%208.201%208.151%208.201%204.666%200%208.201-3.707%208.201-8.253%200-4.541-3.51-8.201-8.15-8.201zm2.02%209.138l2.577%203.608h-2.173l-2.32-3.31h-1.995v3.31h-1.819v-9.564h4.265c2.222%200%203.683%201.137%203.683%203.051%200.01%201.568-0.9%202.526-2.21%202.905zm-1.54-4.315h-2.372v3.025h2.372c1.184%200%201.891-0.579%201.891-1.514%200-0.984-0.71-1.511-1.89-1.511z%22/%3E%3C/svg%3E" alt="">
                    <a target="_blank" href="<?php echo content_url(); ?>/portfolio/spotify 模写/index.html"></a>
                  </li>
                  <li>
                    <img src="https://isara.life/wp-content/themes/isara_v2/img/isaralogo.png" alt="">
                    <a target="_blank" href="<?php echo content_url(); ?>/portfolio/iSara 模写/index.html"></a>
                  </li>
                  <li>
                    <img src="https://nisekohakuunso.com/common/img/base/mod_logo01_wh.svg" alt="">
                    <a target="_blank" href="<?php echo content_url(); ?>/portfolio/ニセコ・白雲荘 模写/index.html"></a>
                  </li>
                  <li>
                    <img src="http://agtsmartphonedesign.com/wordpress/wp-content/themes/AGTsdg4.0/img_cmn/agt.svg" alt="">
                    <a target="_blank" href="<?php echo content_url(); ?>/portfolio/スマホサイト・AGT 模写/index.html"></a>
                  </li>
                  <li>
                    <img src="https://www-mercari-jp.akamaized.net/assets/img/common/common/logo.svg?3236810361" alt="">
                    <a target="_blank" href="<?php echo content_url(); ?>/portfolio/メルカリ 模写/index.html"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a class="portfolio-link" href="<?php echo esc_url( home_url( '/Portfolio/' ) ); ?>">P<span>o</span>rtfolio</a>
        <div class="display_inner">
          <span id="index-number">1</span>
          <span></span>
          <span>11</span>
          <div class="portfolio-arrow" id="index-next"></div>
          <div class="portfolio-arrow" id="index-prev"></div>
        </div>
      </div>

      <h2>Skill</h2>
    </section>


    <section id="contact">
      <div class="box"></div>

      <h2>Contact</h2>
      <div class="contact-arrow" id="prev">
        <span></span>
      </div>

      <div class="contact-arrow" id="next">
          <span></span>
        </div>

      <div id="contact-wrapper">

        <ul id="contact-means">
          <li class="panel" id="gmail">
            <a target="_blank" href="mailto:s.takeki0817@gmail.com">
              <img id="gmail_1" src="<?php echo get_template_directory_uri(); ?>/img/gmail_1.png" alt="">
              <img id="gmail_2" src="<?php echo get_template_directory_uri(); ?>/img/gmail_2.png" alt="">
            </a>
          </li>
          <li class="panel" id="twitter">
            <a target="_blank" href="https://twitter.com/iNform_rimo0817">
              <span id="twitter-icon" class="fab fa-twitter"></span>
              <div class="twitter_inner">
                <span id="twitter-good" class="fas fa-heart"></span>
                <span id="twitter-retweet" class="fas fa-retweet"></span>
              </div>
            </a>
          </li>
          <li class="panel" id="tell">
            <a href="tel:08041494533">
              <img id="screen_1" src="<?php echo get_template_directory_uri(); ?>/img/tell-screen_1.png" alt="">
              <img id="screen_2" src="<?php echo get_template_directory_uri(); ?>/img/tell-screen_2.png" alt="">
            </a>
          </li>
        </ul>
      </div>

      <div id="to-top">
        <span>top</span>
      </div>
    </section>

    <?php get_footer(); ?>
