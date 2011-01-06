(function() {
  var Styout, instances, out, sty, _;
  var __slice = Array.prototype.slice;
  sty = require('sty');
  _ = require('underscore');
  Styout = (function() {
    function Styout(id) {
      this.id = id;
      this.ERROR_VERBOSITY = 0;
      this.WARN_VERBOSITY = 1;
      this.INFO_VERBOSITY = 2;
      this.DEBUG_VERBOSITY = 3;
      this.verbosity = this.INFO_VERBOSITY;
      this.defaultPrefix = '';
      this.debugPrefix = '[<blue>DEBUG</blue>]';
      this.infoPrefix = '[<yellow>INFO</yellow>]';
      this.warnPrefix = '[<red>WARNING</red>]';
      this.errorPrefix = '[<red>ERROR</red>]';
      this.allPrefix = '';
    }
    Styout.prototype.debug = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.verbosity >= this.DEBUG_VERBOSITY) {
        args.unshift(this.allPrefix);
        args.unshift(this.debugPrefix);
        return out.apply(null, args);
      }
    };
    Styout.prototype.info = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.verbosity >= this.INFO_VERBOSITY) {
        args.unshift(this.allPrefix);
        args.unshift(this.infoPrefix);
        return out.apply(null, args);
      }
    };
    Styout.prototype.warn = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.verbosity >= this.WARN_VERBOSITY) {
        args.unshift(this.allPrefix);
        args.unshift(this.warnPrefix);
        return out.apply(null, args);
      }
    };
    Styout.prototype.error = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (this.verbosity >= this.ERROR_VERBOSITY) {
        args.unshift(this.allPrefix);
        args.unshift(this.errorPrefix);
        return out.apply(null, args);
      }
    };
    Styout.prototype.parse = function() {
      var args, index, o, _len;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (index = 0, _len = args.length; index < _len; index++) {
        o = args[index];
        if (typeof o === 'string') {
          args[index] = sty.parse(o);
        }
      }
      return __slice.call(args);
    };
    return Styout;
  })();
  out = function() {
    var args, index, o, _len;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    for (index = 0, _len = args.length; index < _len; index++) {
      o = args[index];
      if (typeof o === 'string') {
        args[index] = sty.parse(o);
      }
    }
    console.log.apply(console, args);
    return __slice.call(args);
  };
  instances = {};
  exports.instance = function(id) {
    if (instances[id]) {
      return instances[id];
    }
    return instances[id] = _.extend((function() {
      return out.apply(this, arguments);
    }), new Styout(id));
  };
}).call(this);
