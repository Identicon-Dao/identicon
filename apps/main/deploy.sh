#!/bin/bash
# Deploy the app to identicon server 
# @maz - 2022-08-16

# IMPORTANT: 'identicon.near' access MUST be defined in '~/.ssh/config' as: 
#
# Host identicon.near
#   Hostname 38.242.216.233	
#   IdentityFile /home/{my-home-folder}/.ssh/id_rsa
#   User ubuntu

# The place where it was created the build
# after doing 'yarn build'
BUILD=./.next

# The place where we will copy the files
TARGET=identicon.near:/opt/identicon/apps/fedevida

export NODE_ENV="production"
yarn build

# We move the files using rsync to avoid copying already existent files
echo ""
echo "---"
echo "Deploying to: $TARGET"
rsync -arv ./next.config.js  $TARGET/
rsync -arv ./package.json  $TARGET/
rsync -arv ./public/ $TARGET/public/
rsync -arv $BUILD/ $TARGET/.next/
rsync -arv $BUILD/standalone/ $TARGET/

# Using pm2 process manager for Node 
# don't need to restart because using watch mode
