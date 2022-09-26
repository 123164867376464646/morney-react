#!/usr/bin/env bash

yarn build &&
cd build/ &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:123164867376464646/morney-website-react.git &&
git push -u origin master -f
cd ..