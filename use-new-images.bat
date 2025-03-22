@echo off
echo Using new images for Christian Men United website...

REM Create required directories if they don't exist
mkdir public\images-cmu 2>nul

REM Copy new images with appropriate names
copy "public\images\2015-TopLogo.png" "public\images-cmu\cmu-logo.png"
copy "public\images\2015-WelcomePic.jpg" "public\images-cmu\biblical-background.jpg"
copy "public\images\78555_Banner1.jpg" "public\images-cmu\about-background.jpg"
copy "public\images\78555_Banner3.jpg" "public\images-cmu\events-background.jpg"
copy "public\images\2015-WelcomePic.jpg" "public\images-cmu\partners-background.jpg"
copy "public\images\78555_Banner1.jpg" "public\images-cmu\contact-background.jpg"
copy "public\images\78555_Banner3.jpg" "public\images-cmu\prayer-background.jpg"

REM Copy partner images
copy "public\images\2015-HP-Dir-Partners.jpg" "public\images-cmu\moody-radio.png"
copy "public\images\2015-HP-Dir-Donate.jpg" "public\images-cmu\choices.png"
copy "public\images\2015-HP-Dir-OnlineStore.jpg" "public\images-cmu\tampa-bay-steel.png"

REM Copy leadership/event images
copy "public\images\2015-WelcomePic.jpg" "public\images-cmu\bible-study.jpg"
copy "public\images\78555_Banner1.jpg" "public\images-cmu\mens-breakfast.jpg"
copy "public\images\78555_Banner3.jpg" "public\images-cmu\leadership-workshop.jpg"
copy "public\images\2015-WelcomePic.jpg" "public\images-cmu\mens-retreat.jpg"
copy "public\images\78555_Banner1.jpg" "public\images-cmu\prayer-breakfast.jpg"
copy "public\images\78555_Banner3.jpg" "public\images-cmu\fishing-tournament.jpg"
copy "public\images\2015-WelcomePic.jpg" "public\images-cmu\winter-bible-study.jpg"

copy "public\images\78555_Banner1.jpg" "public\images-cmu\leadership-1.jpg"
copy "public\images\78555_Banner3.jpg" "public\images-cmu\leadership-2.jpg"

echo Images successfully copied to public\images-cmu folder!
