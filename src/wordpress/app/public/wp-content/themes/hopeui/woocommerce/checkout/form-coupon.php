<?php

/**
 * Checkout coupon form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-coupon.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.4.4
 */

namespace HopeUI\Utility;

defined('ABSPATH') || exit;

if (!wc_coupons_enabled()) { // @codingStandardsIgnoreLine.
    return;
}

?>
<div class="woocommerce-form-coupon-toggle">
    <?php wc_print_notice(apply_filters('woocommerce_checkout_coupon_message', esc_html__('Have a coupon?', 'hopeui') . ' <a href="#" class="showcoupon">' . esc_html__('Click here to enter your code', 'hopeui') . '</a>'), 'notice'); ?>
</div>

<form class="checkout_coupon woocommerce-form-coupon" method="post" style="display:none">
    <p>
        <?php esc_html_e('If you have a coupon code, please apply it below.', 'hopeui'); ?>
    </p>
    <div class="hopeui_style-checkout-coupon">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input type="text" name="coupon_code" class="input-text" placeholder="<?php esc_attr_e('Coupon Code', 'hopeui'); ?>" id="coupon_code" value="" />
        <?php
        hopeui()->hopeui_php_common_style($tag = "button",  $label =  esc_html('Apply Coupon', 'hopeui'), $show_icon = false, $attr = array(
            'type' => 'submit',
            'name' => "apply_coupon",
            'class' => 'update-cart btn  ',
            'value' => esc_attr('Apply coupon', 'hopeui')
        ));
        ?>
    </div>


    <div class="clear"></div>
</form>