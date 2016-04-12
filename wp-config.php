<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'vwjetta2617');

/** MySQL database username */
define('DB_USER', 'vwjetta2617');

/** MySQL database password */
define('DB_PASSWORD', 's2iep4q070');

/** MySQL hostname */
define('DB_HOST', 'sql-4.radyx.ru');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'j3Z&P}$BYf4alJi{$&-m*Y+(6$/ydG(*RUrbK.GG1?Jrv-5Lg<M/+.kZmVj{ &U9');
define('SECURE_AUTH_KEY',  'f%Glv/6vwbT{0 Zzw|=_BnVyl-+l!Ek|^-xQ,o/[yf|#6q:nUR(qz|+]|$AuONQ>');
define('LOGGED_IN_KEY',    '{3eVy>QGh&8B{&dliD&Afm%)%KV]3olV(U7y:/H6:z~>nM:=MgQ^Hk;M+@k0?EqY');
define('NONCE_KEY',        '}CQ++-?@mQ_XVdP5enkeZzEz|QNh]O2i_g0-]t9<q]<z-UO%7ES!UBgTq[72t8GH');
define('AUTH_SALT',        '+9A$q&KJUoEKrS=j~#<RS%o4$TQW=6fZ*!ac-|*:5YaeheEr: kZ6_HE`.]qCBiq');
define('SECURE_AUTH_SALT', 'j7qW,-$m%fD4Vi$I&`.s?MFmYr`E-3Y>SV(>4P|c6(10t*c3uaw:v?~#YYktyn?u');
define('LOGGED_IN_SALT',   '73||w+|&!Kj/!*B&8VR3K{-k:Cv&_QXG]b1*Al(@H.M;$}_Z6<ErW7 U1+|;QA-[');
define('NONCE_SALT',       'l[+D>]5-i:6lN H=,~[4I{3lyZb*KnzbnbU=N}OMR-ENF@Z-I*S 1yYg.(RCyRQ)');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
