window.onload = (function(loader) {
  return function() {
    require.config({
      urlArgs: '_=' + (new Date()).getTime()
    });

    setTimeout(function() {
      var i,
          spec_re = /_spec$/,
          specs = [];

      for (i in require.s.contexts._.registry) {
        if (i.match(spec_re)) {
          specs.push(i);
        }
      }

      require(specs, loader);
    });
  };
}(window.onload));
