<?php

/**
 * Template part for displaying the Messages
 *
 * @package hopeui
 */
?>
<div class="dropdown dropdown-user-cart">
	<button class="dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target=".dropdown-menu-mini-cart" aria-expanded="false">
		<svg class="icon-24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
		</svg>
		<div class="basket-item-count" style="display: inline;">
			<?php if (WC()->cart && (WC()->cart->get_cart_contents_count() > 0)) : ?>
				<span class="cart-items-count count" id="mini-cart-count">
					<?php echo (WC()->cart) ? WC()->cart->get_cart_contents_count() : ''; ?>
				</span>
			<?php endif; ?>
		</div>
	</button>

	<div class="dropdown-menu dropdown-menu-mini-cart" id="hopeui_style_minicart">
		<div class="item-heading">
			<h5 class="heading-title"><?php esc_html_e('Shopping Cart', 'hopeui'); ?></h5>
		</div>
		<div class="widget_shopping_cart_content">
			<?php
			if (function_exists("woocommerce_mini_cart") && WC()->cart) {
				woocommerce_mini_cart();
			}
			?>
		</div>
	</div>
</div>