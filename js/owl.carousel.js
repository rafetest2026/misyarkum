/* Owl Carousel v2.3.4 - Minimal implementation for GitHub Pages compatibility */
(function(jQuery){
  "use strict";
  
  var Carousel = function(element, options) {
    this.$element = jQuery(element);
    this.options = jQuery.extend({}, Carousel.DEFAULTS, options);
    this.init();
  };
  
  Carousel.DEFAULTS = {
    items: 3,
    loop: false,
    margin: 0,
    stagePadding: 0,
    merge: false,
    mergeFit: true,
    autoWidth: false,
    startPosition: 0,
    rtl: false,
    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    fallbackEasing: 'swing',
    slideTransition: 'linear',
    info: false,
    nestedItemSelector: false,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab'
  };
  
  Carousel.prototype.init = function() {
    this.$element.addClass(this.options.loadedClass);
  };
  
  jQuery.fn.owlCarousel = function(options) {
    return this.each(function() {
      var $this = jQuery(this);
      var carousel = $this.data('owlCarousel');
      
      if (!carousel) {
        carousel = new Carousel(this, options);
        $this.data('owlCarousel', carousel);
      }
      
      if (typeof options === 'string') {
        if (carousel[options]) {
          carousel[options]();
        }
      }
    });
  };
  
})(jQuery);
