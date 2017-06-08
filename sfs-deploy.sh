# variables
PATH="/package/host/localhost/nodejs-7/bin:$PATH"
deploy=~/bin/sfs-deploy
www=/var/www/virtual/${USER}
now=$(date)

# helper functions
log() {
  echo "$now: $1" >> $deploy/deploy.log
}

# script
log "started deploying"
exit 0

# remove old repo files and clone release branch
cd $deploy
rm -rf $deploy/Superfit-Schedule
git clone https://github.com/kiwikern/Superfit-Schedule.git -b release
cd $deploy/Superfit-Schedule

# install and build
npm install
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
