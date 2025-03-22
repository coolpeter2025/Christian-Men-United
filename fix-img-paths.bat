@echo off
echo Fixing image paths for Christian Men United website...

REM Create required directories
mkdir public\images-cmu 2>nul

REM Copy images with new names
copy "public\images\7W5A0119.jpg" "public\images-cmu\biblical-background.jpg"
copy "public\images\7W5A0336.jpg" "public\images-cmu\about-background.jpg" 
copy "public\images\7W5A1518.jpg" "public\images-cmu\events-background.jpg"
copy "public\images\Cart.jpg" "public\images-cmu\partners-background.jpg"
copy "public\images\Coffee on a Bench.jpg" "public\images-cmu\contact-background.jpg"
copy "public\images\Coffee Beans.jpg" "public\images-cmu\prayer-background.jpg"

copy "public\images\Delighfulbean.logo.png" "public\images-cmu\cmu-logo.png"
copy "public\images\Delighfulbean.logo.png" "public\images-cmu\moody-radio.png"
copy "public\images\Delighfulbean.logo.png" "public\images-cmu\choices.png"
copy "public\images\Delighfulbean.logo.png" "public\images-cmu\tampa-bay-steel.png"

copy "public\images\Person smiling holding a coffee cup outdoors.jpg" "public\images-cmu\bible-study.jpg"
copy "public\images\Person holding takeaway coffee cup with logo on wooden table, greenery background..jpg" "public\images-cmu\mens-breakfast.jpg"
copy "public\images\Coffee Beans.jpg" "public\images-cmu\leadership-workshop.jpg"
copy "public\images\Coffee cup with Delightful Bean logo on table, blurred background..jpg" "public\images-cmu\mens-retreat.jpg"
copy "public\images\Coffee on a Bench.jpg" "public\images-cmu\prayer-breakfast.jpg"
copy "public\images\Disposable coffee cup on wooden counter near espresso machine and coffee tools..jpg" "public\images-cmu\fishing-tournament.jpg"
copy "public\images\Person holding a coffee cup with Delightful Bean logo on a wooden bench..jpg" "public\images-cmu\winter-bible-study.jpg"

copy "public\images\Person smiling holding a coffee cup outdoors.jpg" "public\images-cmu\leadership-1.jpg"
copy "public\images\Woman drinking from a to-go coffee cup outdoors, wearing a white shirt, in front of a scenic lake background..jpg" "public\images-cmu\leadership-2.jpg"

echo Images successfully copied to public\images-cmu folder!
