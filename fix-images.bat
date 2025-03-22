@echo off
echo Fixing image paths for the Christian Men United website...

REM Create necessary directories
mkdir -p public\images 2>nul

REM Copy images from existing project for backgrounds
copy "public\images\7W5A0119.jpg" "public\images\biblical-background.jpg"
copy "public\images\7W5A0336.jpg" "public\images\about-background.jpg"
copy "public\images\7W5A1518.jpg" "public\images\events-background.jpg"
copy "public\images\7W5A0119.jpg" "public\images\partners-background.jpg"
copy "public\images\7W5A0336.jpg" "public\images\contact-background.jpg"
copy "public\images\7W5A1518.jpg" "public\images\prayer-background.jpg"

REM Copy logo
copy "public\images\Delighfulbean.logo.png" "public\images\cmu-logo.png"

REM Partner images
copy "public\images\Delighfulbean.logo.png" "public\images\moody-radio.png"
copy "public\images\Delighfulbean.logo.png" "public\images\choices.png"
copy "public\images\Delighfulbean.logo.png" "public\images\tampa-bay-steel.png"

REM Event images
copy "public\images\A person at an outdoor coffee stand receiving a drink from the barista.jpg" "public\images\bible-study.jpg"
copy "public\images\Barista smiling behind a coffee machine outdoors under a fringed umbrella.jpg" "public\images\mens-breakfast.jpg"
copy "public\images\Coffee Beans.jpg" "public\images\leadership-workshop.jpg"
copy "public\images\Coffee cup with Delightful Bean logo on table, blurred background..jpg" "public\images\mens-retreat.jpg"
copy "public\images\Coffee on a Bench.jpg" "public\images\prayer-breakfast.jpg"
copy "public\images\Disposable coffee cup on wooden counter near espresso machine and coffee tools..jpg" "public\images\fishing-tournament.jpg"
copy "public\images\Espresso machine setup with a coffee grinder, milk frother, and syrup bottles on a wooden counter..jpg" "public\images\winter-bible-study.jpg"

REM Leadership images
copy "public\images\Person smiling holding a coffee cup outdoors.jpg" "public\images\leadership-1.jpg"
copy "public\images\Woman drinking from a to-go coffee cup outdoors, wearing a white shirt, in front of a scenic lake background..jpg" "public\images\leadership-2.jpg"

echo Images have been successfully copied!
