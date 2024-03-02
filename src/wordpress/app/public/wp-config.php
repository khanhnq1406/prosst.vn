<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'NC6D*jjrJ;FK@?<0ajWJTP2~)<#<U]bkk.$Aq2LB4MVw}dP=ss3_!E[xbn~:tz9k' );
define( 'SECURE_AUTH_KEY',   'Z`CL4h{:>aH>~)oYFb+j.TcV7lX`u8)r`Sz+5#Cn-L[=3yV<sdt+FR9A]%QBRk$o' );
define( 'LOGGED_IN_KEY',     '+!V4)!)s&c/gALAy=]}xk+)8eH7*[I]y;6sf!I>0?T;0sdcpZMe aU*Luyue(ZlQ' );
define( 'NONCE_KEY',         '1o`%10{/a5HSZ=AnM!djrqAa.5_sMxVr8CWu[IF0~,5(8f$S;IfBm`cL{xAcz#gu' );
define( 'AUTH_SALT',         'O6l9=ZWD8TM&<H=4LTw12-F<&%Z}Tl<|cMt79oW{}^5)tHl`T>Kw;BV+2N.8*Pvb' );
define( 'SECURE_AUTH_SALT',  'rs3?Z]PVh&~hyelVkxq_*)n3757W2hF[N-uNaqO}%;CA5jDvsC+u>|~U]3su3H4)' );
define( 'LOGGED_IN_SALT',    ';jI^*WnAoEPYyMtXP_UCH;RIFhJ$I0;opG,c]}v~6`By0~Lmzi$j5e,fKV3`HIp.' );
define( 'NONCE_SALT',        '5w[}iqZkKo,_+_4;m!<$w$TGEV7Iw5nuwt.MAsuLC_Y}K0ueDL5!n4^*z8JZKMB}' );
define( 'WP_CACHE_KEY_SALT', 'p&i9N`s*Tj*(8[!=.!:iZBX,(/gqn~,jh9S-$WofFf/w<PDWN5?_$Wi&q_|Xi::7' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
