<?php
/*
Template Name: Portfolio
*/
 ?>

<?php get_header(); ?>

<body id="portfolio-ditail">
    <div id="modal">
      <div class="modal-window">
        <div class="modal-close">
          <span></span>
          <span></span>
        </div>
        <div class="image-wrapper">
          <img src="<?php echo content_url(); ?>/portfolio/珈琲宅急便/coffee_takkyubin.png" alt="">
          <img src="<?php echo content_url(); ?>/portfolio/美容室 L/L-disign.png" alt="">
        </div>
      </div>
    </div>

    <div class="return-top">
      <a href="<?php echo home_url(); ?>">back</a> <!-- topへ -->
    </div>

    <h1>P<span>o</span>rtfolio</h1>

    <div class="portfolio-content">
      <div class="part-title">
        <h3>Original</h3>
        <img src="<?php echo get_template_directory_uri(); ?>/img/title-decoration.svg" alt="">
      </div>
      <ul id="original-skills">

        <li>
          <div class="hexagon-wrapper">
            <a class="hexagon" target="_blank" href="<?php echo content_url(); ?>/portfolio/profile/index.html">
              <div class="hexagon__inner-1">
                <div class="hexagon__inner-2">
                  <div class="hexagon__inner-3">
                    <div class="hexagon__inner-image">
                      <h3>Profile</h3>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <ul>
            <li>
              <h5>Name : </h5><p>プロフィール</p>
            </li>
            <li>
              <h5>Skills : </h5><p>html / css / JavaScript / jQuery</p>
            </li>
            <li>
              <h5>Span : </h5><p>2019/4/22 ~ 4/28</p>
            </li>
            <li>
              <h5>Comment : </h5><p>プログラミングを勉強し始めて、１ヶ月目で初めて作った成果物。それまで独学で得た知識を使って作ったものだから拙くはあるけれども、それなりの思い入れのあるもの。</p>
            </li>
          </ul>
        </li>

        <li>
          <div class="hexagon-wrapper">
            <a class="hexagon" target="_blank" href="<?php echo content_url(); ?>/portfolio/blog/index.html">
              <div class="hexagon__inner-1">
                <div class="hexagon__inner-2">
                  <div class="hexagon__inner-3">
                    <div class="hexagon__inner-image">
                      <h3>Blog</h3>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <ul>
            <li>
              <h5>Name : </h5><p>キャンプのblog擬き</p>
            </li>
            <li>
              <h5>Skills : </h5><p>html / css / JavaScript / jQuery</p>
            </li>
            <li>
              <h5>Span : </h5><p>2019/4/28 ~ 5/7</p>
            </li>
            <li>
              <h5>Comment : </h5><p>プロフィールを作って次に作ったもの。スクールで作成ものから着想を得てデザイン含め、クリックでスクロールトップさせるためだけに作った。あと暇だったから。</p>
            </li>
          </ul>
        </li>

        <li>
          <div class="hexagon-wrapper">
            <a class="hexagon" target="_blank" href="<?php echo content_url(); ?>/portfolio/outdoor shop/index.html">
              <div class="hexagon__inner-1">
                <div class="hexagon__inner-2">
                  <div class="hexagon__inner-3">
                    <div class="hexagon__inner-image">
                      <h3>Outdoor<br>Shop</h3>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <ul>
            <li>
              <h5>Name : </h5><p>アウトドアショップのホームページのトップページ擬き</p>
            </li>
            <li>
              <h5>Skills : </h5><p>html / css / JavaScript / jQuery</p>
            </li>
            <li>
              <h5>Span : </h5><p>2019/7/3 ~ 7/10</p>
            </li>
            <li>
              <h5>Comment : </h5><p>カルーセルパネルを練習したくて作った。最後の要素に行ってもそのまま次に進めるようにすることに苦戦したけれども、プラグインなしでカルーセルパネルを実装することができるようになった。</p>
            </li>
          </ul>
        </li>

        <li>
          <div class="hexagon-wrapper">
            <a class="hexagon" target="_blank" href="#">
              <div class="hexagon__inner-1">
                <div class="hexagon__inner-2">
                  <div class="hexagon__inner-3">
                    <div class="hexagon__inner-image">
                      <img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <ul>
            <li>
              <h5>Name : </h5><p>Origin (ポートフォリオ)</p>
            </li>
            <li>
              <h5>Skills : </h5><p>html / Sass / css / JavaScript / jQuery<br>Adobe Illustrator / Adobe XD / wordpress</p>
            </li>
            <li>
              <h5>Span : </h5><p>2019/9/1 ~ 10/11</p>
            </li>
            <li>
              <h5>Comment : </h5><p>プログラミングスクールに半年通って得たものを総動員して作ったもの。ポートフォリオそのものが作品として恥ずかしくないようにその時の最大を尽くした。デザインは凝りつつ、デザインの基本にそうように作ることが難しく感じた。</p>
            </li>
          </ul>
        </li>

      </ul>
    </div>

    <div class="portfolio-content">
      <div class="part-title">
        <h3>Design</h3>
        <img src="<?php echo get_template_directory_uri(); ?>/img/title-decoration.svg" alt="">
      </div>
      <ul id="design-skills">

        <li>
          <div class="hexagon-wrapper">
            <div class="hexagon">
              <div class="hexagon__inner-1">
                <div class="hexagon__inner-2">
                  <div class="hexagon__inner-3">
                    <div class="hexagon__inner-image">
                      <img src="<?php echo content_url(); ?>/portfolio/珈琲宅急便/logo-1.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <h5>Name : </h5><p>珈琲宅急便(仮)</p>
            </li>
            <li>
              <h5>Skills : </h5><p>Adobe Illustrator / Adobe XD</p>
            </li>
            <li>
              <h5>Span : </h5><p> 2019/7/20 ~ 8/7</p>
            </li>
            <li>
              <h5>Comment : </h5><p>Illustratorの練習にテーマを決めて、作ったホームページ。スクールの授業で扱ったもの。テーマは「移動販売のコーヒーショップ」</p>
            </li>
          </ul>
        </li>

        <li>
          <div class="hexagon-wrapper">
            <div class="hexagon">
              <div class="hexagon__inner-1">
                <div class="hexagon__inner-2">
                  <div class="hexagon__inner-3">
                    <div class="hexagon__inner-image">
                      <img src="<?php echo content_url(); ?>/portfolio/美容室 L/Introduce – 1.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <h5>Name : </h5><p>美容室 L </p>
            </li>
            <li>
              <h5>Skills : </h5><p>Adobe Illustrator / Adobe XD</p>
            </li>
            <li>
              <h5>Span : </h5><p>2019/8/9 ~ /8/17</p>
            </li>
            <li>
              <h5>Comment : </h5><p>初めて携わった実践案件。友達が取ってきた案件でデザインを担当した。未熟ながら、勉強しながら作っていった。</p>
            </li>
          </ul>
        </li>

      </ul>
    </div>

    <div class="portfolio-content">
      <div class="part-title">
        <h3>Reproduction</h3>
        <img src="<?php echo get_template_directory_uri(); ?>/img/title-decoration.svg" alt="">
      </div>
      <ul id="reproduction-skills">

        <li>
          <div class="hexagon-wrapper">
            <a class="hexagon" target="_blank" href="<?php echo content_url(); ?>/portfolio/spotify 模写/index.html">
              <div class="hexagon__inner-1">
                <div class="hexagon__inner-2">
                  <div class="hexagon__inner-3">
                    <div class="hexagon__inner-image">
                      <img src="data:image/svg+xml;charset=utf-8,%3Csvg%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20566.93%20170.04%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xml%3Aspace%3D%22preserve%22%20viewBox%3D%220%200%20566.93%20170.04%22%20version%3D%221.1%22%20y%3D%220px%22%20x%3D%220px%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20width%3D%22567%22%20height%3D%22171%22%20fill%3D%22%23FFF%22%3E%3Cpath%20d%3D%22m87.996%201.277c-46.249%200-83.743%2037.493-83.743%2083.742%200%2046.254%2037.494%2083.745%2083.743%2083.745%2046.251%200%2083.743-37.491%2083.743-83.745%200-46.246-37.49-83.738-83.744-83.738zm38.404%20120.78c-1.504%202.467-4.718%203.24-7.177%201.737-19.665-12.019-44.417-14.734-73.567-8.075-2.809%200.644-5.609-1.117-6.249-3.925-0.643-2.809%201.11-5.609%203.926-6.249%2031.9-7.293%2059.263-4.154%2081.336%209.334%202.46%201.51%203.24%204.72%201.73%207.18zm10.25-22.799c-1.894%203.073-5.912%204.037-8.981%202.15-22.505-13.834-56.822-17.841-83.447-9.759-3.453%201.043-7.1-0.903-8.148-4.35-1.04-3.453%200.907-7.093%204.354-8.143%2030.413-9.228%2068.221-4.758%2094.071%2011.127%203.07%201.89%204.04%205.91%202.15%208.976zm0.88-23.744c-26.994-16.031-71.52-17.505-97.289-9.684-4.138%201.255-8.514-1.081-9.768-5.219-1.254-4.14%201.08-8.513%205.221-9.771%2029.581-8.98%2078.756-7.245%20109.83%2011.202%203.722%202.209%204.943%207.016%202.737%2010.733-2.2%203.722-7.02%204.949-10.73%202.739z%22/%3E%3Cpath%20d%3D%22m232.09%2078.586c-14.459-3.448-17.033-5.868-17.033-10.953%200-4.804%204.523-8.037%2011.249-8.037%206.52%200%2012.985%202.455%2019.763%207.509%200.205%200.153%200.462%200.214%200.715%200.174%200.253-0.038%200.477-0.177%200.625-0.386l7.06-9.952c0.29-0.41%200.211-0.975-0.18-1.288-8.067-6.473-17.151-9.62-27.769-9.62-15.612%200-26.517%209.369-26.517%2022.774%200%2014.375%209.407%2019.465%2025.663%2023.394%2013.836%203.187%2016.171%205.857%2016.171%2010.63%200%205.289-4.722%208.577-12.321%208.577-8.44%200-15.324-2.843-23.025-9.512-0.191-0.165-0.453-0.24-0.695-0.226-0.255%200.021-0.488%200.139-0.65%200.334l-7.916%209.421c-0.332%200.391-0.29%200.975%200.094%201.313%208.96%207.999%2019.98%2012.224%2031.872%2012.224%2016.823%200%2027.694-9.192%2027.694-23.419%200.03-12.01-7.16-18.66-24.77-22.944z%22/%3E%3Cpath%20d%3D%22m294.95%2064.326c-7.292%200-13.273%202.872-18.205%208.757v-6.624c0-0.523-0.424-0.949-0.946-0.949h-12.947c-0.523%200-0.946%200.426-0.946%200.949v73.602c0%200.523%200.423%200.949%200.946%200.949h12.947c0.522%200%200.946-0.426%200.946-0.949v-23.233c4.933%205.536%2010.915%208.241%2018.205%208.241%2013.549%200%2027.265-10.43%2027.265-30.368%200.02-19.943-13.7-30.376-27.25-30.376zm12.21%2030.375c0%2010.153-6.254%2017.238-15.209%2017.238-8.853%200-15.531-7.407-15.531-17.238%200-9.83%206.678-17.238%2015.531-17.238%208.81-0.001%2015.21%207.247%2015.21%2017.237z%22/%3E%3Cpath%20d%3D%22m357.37%2064.326c-17.449%200-31.119%2013.436-31.119%2030.592%200%2016.969%2013.576%2030.264%2030.905%2030.264%2017.511%200%2031.223-13.391%2031.223-30.481%200-17.031-13.62-30.373-31.01-30.373zm0%2047.714c-9.281%200-16.278-7.457-16.278-17.344%200-9.929%206.755-17.134%2016.064-17.134%209.341%200%2016.385%207.457%2016.385%2017.351%200%209.927-6.8%2017.127-16.17%2017.127z%22/%3E%3Cpath%20d%3D%22m425.64%2065.51h-14.247v-14.566c0-0.522-0.422-0.948-0.945-0.948h-12.945c-0.524%200-0.949%200.426-0.949%200.948v14.566h-6.225c-0.521%200-0.943%200.426-0.943%200.949v11.127c0%200.522%200.422%200.949%200.943%200.949h6.225v28.791c0%2011.635%205.791%2017.534%2017.212%2017.534%204.644%200%208.497-0.959%2012.128-3.018%200.295-0.165%200.478-0.483%200.478-0.821v-10.596c0-0.327-0.17-0.636-0.45-0.807-0.282-0.177-0.633-0.186-0.922-0.043-2.494%201.255-4.905%201.834-7.6%201.834-4.154%200-6.007-1.886-6.007-6.113v-26.756h14.247c0.523%200%200.944-0.426%200.944-0.949v-11.126c0.02-0.523-0.4-0.949-0.93-0.949z%22/%3E%3Cpath%20d%3D%22m475.28%2065.567v-1.789c0-5.263%202.018-7.61%206.544-7.61%202.699%200%204.867%200.536%207.295%201.346%200.299%200.094%200.611%200.047%200.854-0.132%200.25-0.179%200.391-0.466%200.391-0.77v-10.91c0-0.417-0.268-0.786-0.67-0.909-2.565-0.763-5.847-1.546-10.761-1.546-11.958%200-18.279%206.734-18.279%2019.467v2.74h-6.22c-0.522%200-0.95%200.426-0.95%200.948v11.184c0%200.522%200.428%200.949%200.95%200.949h6.22v44.409c0%200.523%200.422%200.949%200.944%200.949h12.947c0.523%200%200.949-0.426%200.949-0.949v-44.406h12.088l18.517%2044.398c-2.102%204.665-4.169%205.593-6.991%205.593-2.281%200-4.683-0.681-7.139-2.025-0.231-0.127-0.505-0.148-0.754-0.071-0.247%200.087-0.455%200.271-0.56%200.511l-4.388%209.627c-0.209%200.455-0.03%200.989%200.408%201.225%204.581%202.481%208.716%203.54%2013.827%203.54%209.56%200%2014.844-4.453%2019.502-16.433l22.461-58.04c0.113-0.292%200.079-0.622-0.1-0.881-0.178-0.257-0.465-0.412-0.779-0.412h-13.478c-0.404%200-0.765%200.257-0.897%200.636l-13.807%2039.438-15.123-39.464c-0.138-0.367-0.492-0.61-0.884-0.61h-22.12z%22/%3E%3Cpath%20d%3D%22m446.5%2065.51h-12.947c-0.523%200-0.949%200.426-0.949%200.949v56.485c0%200.523%200.426%200.949%200.949%200.949h12.947c0.522%200%200.949-0.426%200.949-0.949v-56.481c0-0.523-0.42-0.949-0.95-0.949z%22/%3E%3Cpath%20d%3D%22m440.1%2039.791c-5.129%200-9.291%204.152-9.291%209.281%200%205.132%204.163%209.289%209.291%209.289%205.127%200%209.285-4.157%209.285-9.289%200-5.128-4.16-9.281-9.28-9.281z%22/%3E%3Cpath%20d%3D%22m553.52%2083.671c-5.124%200-9.111-4.115-9.111-9.112s4.039-9.159%209.159-9.159c5.124%200%209.111%204.114%209.111%209.107%200%204.997-4.04%209.164-9.16%209.164zm0.05-17.365c-4.667%200-8.198%203.71-8.198%208.253%200%204.541%203.506%208.201%208.151%208.201%204.666%200%208.201-3.707%208.201-8.253%200-4.541-3.51-8.201-8.15-8.201zm2.02%209.138l2.577%203.608h-2.173l-2.32-3.31h-1.995v3.31h-1.819v-9.564h4.265c2.222%200%203.683%201.137%203.683%203.051%200.01%201.568-0.9%202.526-2.21%202.905zm-1.54-4.315h-2.372v3.025h2.372c1.184%200%201.891-0.579%201.891-1.514%200-0.984-0.71-1.511-1.89-1.511z%22/%3E%3C/svg%3E" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <ul>
            <li>
              <h5>Name : </h5><p> Spotify</p>
            </li>
            <li>
              <h5>Skills : </h5><p>html / css / JavaScript / jQuery</p>
            </li>
            <li>
              <h5>Span : </h5><p>2019/5/8 ~ 5/12</p>
            </li>
            <li>
              <h5>Comment : </h5><p>初めて作った模写。かなり実りの多い練習になった。カルーセルパネルの存在を知って、プラグインを利用して何とか作った。</p>
            </li>
          </ul>
        </li>

        <li>
          <div class="hexagon-wrapper">
            <a class="hexagon" target="_blank" href="<?php echo content_url(); ?>/portfolio/iSara 模写/index.html">
              <div class="hexagon__inner-1">
                <div class="hexagon__inner-2">
                  <div class="hexagon__inner-3">
                    <div class="hexagon__inner-image">
                      <img src="https://isara.life/wp-content/themes/isara_v2/img/isaralogo.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <ul>
            <li>
              <h5>Name : </h5><p>iSara</p>
            </li>
            <li>
              <h5>Skills : </h5><p>html / css / JavaScript / jQuery</p>
            </li>
            <li>
              <h5>Span : </h5><p>2019/5/14 ~ 5/21</p>
            </li>
            <li>
              <h5>Comment : </h5><p>とにかく長いLPだったけど、とてもいい訓練になった。アコーディオン機能を初めて実装した。</p>
            </li>
          </ul>
        </li>

        <li>
          <div class="hexagon-wrapper">
            <a class="hexagon" target="_blank" href="<?php echo content_url(); ?>/portfolio/ニセコ・白雲荘 模写/index.html">
              <div class="hexagon__inner-1">
                <div class="hexagon__inner-2">
                  <div class="hexagon__inner-3">
                    <div class="hexagon__inner-image">
                      <img src="https://nisekohakuunso.com/common/img/base/mod_logo01_wh.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <ul>
            <li>
              <h5>Name : </h5><p>ニセコ　白雲荘</p>
            </li>
            <li>
              <h5>Skills : </h5><p>html / css / JavaScript / jQuery</p>
            </li>
            <li>
              <h5>Span : </h5><p>2019/5/27 ~ 6/5</p>
            </li>
            <li>
              <h5>Comment : </h5><p>スライドショーを自力で実装できた作品。そのほかにも、擬似要素を使ってボタンをのアニメーションをつくれた。</p>
            </li>
          </ul>
        </li>

        <li>
          <div class="hexagon-wrapper">
            <a class="hexagon" target="_blank" href="<?php echo content_url(); ?>/portfolio/スマホサイト・AGT 模写/index.html">
              <div class="hexagon__inner-1">
                <div class="hexagon__inner-2">
                  <div class="hexagon__inner-3">
                    <div class="hexagon__inner-image">
                      <img src="http://agtsmartphonedesign.com/wordpress/wp-content/themes/AGTsdg4.0/img_cmn/agt.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <ul>
            <li>
              <h5>Name : </h5><p>スマホサイト WEBデザイン AGT</p>
            </li>
            <li>
              <h5>Skills : </h5><p>html / css / JavaScript / jQuery</p>
            </li>
            <li>
              <h5>Span : </h5><p>2019/6/1 ~ 6/5</p>
            </li>
            <li>
              <h5>Comment : </h5><p>画像のホバーしたらスクロールする機能のロジックを自分でくめた。そのほかがあまり完成度高くは無いけれども、ロジックを組めたことで満足。</p>
            </li>
          </ul>
        </li>

        <li>
          <div class="hexagon-wrapper">
            <a class="hexagon" target="_blank" href="<?php echo content_url(); ?>/portfolio/メルカリ 模写/index.html">
              <div class="hexagon__inner-1">
                <div class="hexagon__inner-2">
                  <div class="hexagon__inner-3">
                    <div class="hexagon__inner-image">
                      <img src="https://www-mercari-jp.akamaized.net/assets/img/common/common/logo.svg?3236810361" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <ul>
            <li>
              <h5>Name : </h5><p>メルカリ</p>
            </li>
            <li>
              <h5>Skills : </h5><p>html / css / JavaScript / jQuery</p>
            </li>
            <li>
              <h5>Span : </h5><p>2019/7/22 ~ 8/7</p>
            </li>
            <li>
              <h5>Comment : </h5><p>当時の技術を投入して作ったと思う。今見直すとやっぱりまだ拙いけど、カルーセルパネル・レスポンシブ対応に力を注いだ。プルダウンメニューも機能としてはできた。</p>
            </li>
          </ul>
        </li>

      </ul>
    </div>

    <?php get_footer(); ?>
