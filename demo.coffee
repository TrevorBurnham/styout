out = (require './src/styout').instance 'styout demo'

out.verbosity = out.DEBUG_VERBOSITY
out 'This calls for <u>default</u> output!'
out.debug 'You will only see this if you have <b>debug</b> verbosity set.'
out.info 'But you will see this unless you are weird.'
out.warn 'Uh-ohhhhhhhh! Relax.'
out.error 'Everything is perfectly <green>fine</green>!'