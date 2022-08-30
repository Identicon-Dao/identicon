#!/bin/bash
# Deploy docs site to server

# first build it in ./site
mkdocs build

# just rsync to server (#identicon.near must be setup)
rsync -arv ./site/ identicon.near:/var/www/identicon.network/docs/
