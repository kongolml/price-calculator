<?php
/*
* Plugin Name: Price Calculator
* Description: Add shortcode on any page to display price calculator.
* Version: 1.0
* Author: Konstantin Golosov
* Author URI: mailto:kongol.ml@gmail.com
*/


function recent_posts_function($atts) {
    extract(shortcode_atts(array(
        'levels' => '',
        'types' => '',
        'skills' => ''
    ), $atts));

    $shortcodeData = new StdClass;
    $shortcodeData->levels = explode(",", $levels);
    $shortcodeData->types = explode(",", $types);
    $shortcodeData->skills = explode(",", $skills);
?>
    <script type="text/javascript">
        window.priceCalculatorData = <?php echo json_encode($shortcodeData); ?>
    </script>
    <div id="price-calculator-root"></div>
<?php
}
add_shortcode('price-calculator', 'recent_posts_function');


function register_button( $buttons ) {
    array_push( $buttons, "|", "price_calculator" );
    return $buttons;
}

function add_plugin( $plugin_array ) {
   $plugin_array['price_calculator'] = plugin_dir_url(__FILE__) . 'price-calculator.js';
   return $plugin_array;
}

function my_recent_posts_button() {
   if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') ) {
      return;
   }

   if ( get_user_option('rich_editing') == 'true' ) {
      add_filter( 'mce_external_plugins', 'add_plugin' );
      add_filter( 'mce_buttons', 'register_button' );
   }
}
add_action('init', 'my_recent_posts_button');




function addScriptBundle() {
    wp_deregister_script( 'calculator-bundle' );
    wp_register_script( 'calculator-bundle', plugin_dir_url(__FILE__) . 'calculator/bundle.js', array(), '1.0', true);
    wp_enqueue_script( 'calculator-bundle' );

    // send plugins url to JS bundle file:
    wp_localize_script('calculator-bundle', 'pluginData', array(
        'pluginsURL' => plugin_dir_url(__FILE__)
    ));

    // optional boostrap files:
    wp_register_style( 'bootstrap-css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
    wp_register_script( 'bootstrap-js', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js');

    wp_enqueue_style( 'bootstrap-css' );
    wp_enqueue_script( 'bootstrap-js' );
}    

add_action( 'wp_enqueue_scripts', 'addScriptBundle', 11 );

?>