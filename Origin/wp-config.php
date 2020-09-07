<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.osdn.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'LAA1107499-ztx6rn');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'LAA1107499');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'L0XjHTnC');

/** MySQL のホスト名 */
define('DB_HOST', 'mysql140.phy.lolipop.lan');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'ahL0R>neN)e|-nSG%S_K_d`bMSUnbFIl*`fk$u!:#td}ow:q?K]MrA@6zR`kEvj3');
define('SECURE_AUTH_KEY', 'CTKI-a$sR-jw`^VgK|!wm^9X8W%5F`Ae,[w(F$!^}Q?A^iw:tTo]tI)ccbMMG<pQ');
define('LOGGED_IN_KEY', '<$uP4;:k6N1S{F))JKVB"+bFHP|1|-kg].oaf"cW]|1A,8w;WyHaOHdP+?S}|S_r');
define('NONCE_KEY', 'L*ZD}FToSM8>yo2x@Sexxol.M3C7$Mi_u%DW;.vgGRuWQ8*_WAm?G6`)o/JkBDBi');
define('AUTH_SALT', 'b@mJD7rK^}]d-pey+<N)9-n4-~?>*xT-w~jSE%>`0EW_ZYffn+9a6cAu0k[}.bu0');
define('SECURE_AUTH_SALT', 'w5u|~bX]S@,c+nzj2/>c=pu#(ZFx/3%.|79TevEBw;6@0/h%vBpyXc,-Z,T"c(5I');
define('LOGGED_IN_SALT', '4:#MRBrf;Mg2m=!**uaIDKHLvk?lWO{HJxHAmf*bG0Kyo`A:wbKm,Y4)S%td-9em');
define('NONCE_SALT', 'T`,+t#oL)(J5<=Qzjv6g}#P+nLuM/D7,-pJ"hag{&U033xsc:$y&*HTCeLec;{yV');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp9_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
  define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
