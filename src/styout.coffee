sty = require 'sty'
_ = require 'underscore'

class Styout
  
  constructor: (@id) ->
    @ERROR_VERBOSITY = 0
    @WARN_VERBOSITY = 1
    @INFO_VERBOSITY = 2
    @DEBUG_VERBOSITY = 3
    @verbosity = @INFO_VERBOSITY
    @defaultPrefix = ''
    @debugPrefix = '[<blue>DEBUG</blue>]'
    @infoPrefix = '[<yellow>INFO</yellow>]'
    @warnPrefix = '[<red>WARNING</red>]'
    @errorPrefix = '[<red>ERROR</red>]'
    @allPrefix = ''
  
  debug: (args...) ->
    if @verbosity >= @DEBUG_VERBOSITY
      args.unshift @allPrefix
      args.unshift @debugPrefix
      out args...
  info: (args...) ->
    if @verbosity >= @INFO_VERBOSITY
      args.unshift @allPrefix
      args.unshift @infoPrefix
      out args...
  warn: (args...) ->
    if @verbosity >= @WARN_VERBOSITY
      args.unshift @allPrefix
      args.unshift @warnPrefix
      out args...
  error: (args...) ->
    if @verbosity >= @ERROR_VERBOSITY
      args.unshift @allPrefix
      args.unshift @errorPrefix
      out args...
  
  parse: (args...) ->
    for o, index in args
      args[index] = sty.parse(o) if typeof o is 'string'
    [args...]

out = (args...) ->
  for o, index in args
    args[index] = sty.parse(o) if typeof o is 'string'
  console.log args...
  [args...]

instances = {}
exports.instance = (id) ->
  return instances[id] if instances[id]
  instances[id] = _.extend (-> out.apply this, arguments), new Styout(id)