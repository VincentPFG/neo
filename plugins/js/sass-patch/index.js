// Generated by CoffeeScript 2.5.0
(function() {
  module.exports = function({configureWebpack}) {
    return configureWebpack(function(config) {
      var i, j, k, len, len1, len2, loader, one, ref, ref1, ref2, rule;
      ref = config.module.rules;
      for (i = 0, len = ref.length; i < len; i++) {
        rule = ref[i];
        if ((String(rule.test)) === String(/\.sass$/)) {
          ref1 = rule.oneOf;
          for (j = 0, len1 = ref1.length; j < len1; j++) {
            one = ref1[j];
            ref2 = one.use;
            for (k = 0, len2 = ref2.length; k < len2; k++) {
              loader = ref2[k];
              if (loader.loader === 'sass-loader') {
                loader.options = {
                  sassOptions: {
                    indentedSyntax: true
                  }
                };
              }
            }
          }
        }
      }
      // console.log JSON.stringify rule, null, '\t'
      return config;
    });
  };

}).call(this);
