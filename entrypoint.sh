#!/bin/bash

unset BUNDLE_PATH
unset BUNDLE_BIN

# Compile the assets
bundle exec rake assets:precompile

# Start the server
bundle exec rails server