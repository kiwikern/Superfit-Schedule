#!/usr/bin/env bash
# variables
#PATH="/package/host/localhost/nodejs-8.9.1/bin:$PATH"
deploy=~/bin/sfs-deploy
www=/var/www/virtual/${USER}
now=$(date)

# helper functions
log() {
  echo "$now: $1" >> $deploy/deploy.log
}

# script
log "started deploying"

# remove old repo files and clone master branch
#cd $deploy
#rm -rf $deploy/Superfit-Schedule
#git clone https://github.com/kiwikern/Superfit-Schedule.git
#cd $deploy/Superfit-Schedule

# get newest version
git pull

# install and build
npm ci
error=$(npm run build 2>&1)
rc=$?
if [[ $rc != 0 ]]
then
  log "ng build errored"
  echo $error
  exit $rc
fi

# moving files
rm -rf $www/dist
mv $deploy/Superfit-Schedule/dist $www
rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi
rm -rf $www/sfs_old
mv $www/sfs.kimkern.de $www/sfs_old
mv $www/dist $www/sfs.kimkern.de

log "successfully deployed"
