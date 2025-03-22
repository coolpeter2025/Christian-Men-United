@echo off
REM Create directories if they don't exist
mkdir public\images 2>nul

REM Copy and rename existing images for backgrounds
copy "public\images\7W5A0119.jpg" "public\images\biblical-background.jpg"
copy "public\images\7W5A0336.jpg" "public\images\about-background.jpg"
copy "public\images\7W5A1518.jpg" "public\images\events-background.jpg"
copy "public\images\Coffee Beans.jpg" "public\images\partners-background.jpg"
copy "public\images\Coffee on a Bench.jpg" "public\images\contact-background.jpg"
copy "public\images\Coffee on a Bench.jpg" "public\images\prayer-background.jpg"

REM Copy logo and partner images
copy "public\images\Delighfulbean.logo.png" "public\images\cmu-logo.png"
copy "public\images\Delighfulbean.logo.png" "public\images\moody-radio.png"
copy "public\images\Delighfulbean.logo.png" "public\images\choices.png"
copy "public\images\Delighfulbean.logo.png" "public\images\tampa-bay-steel.png"

REM Copy event images
copy "public\images\Family portrait on wooden path with trees and pink grass background.jpg" "public\images\bible-study.jpg"
copy "public\images\Two people standing behind coffee equipment outdoors with trees in the background..jpg" "public\images\mens-breakfast.jpg"
copy "public\images\Two people holding coffee cups in front of a coffee machine; cups have Delightful Beans logo..jpg" "public\images\leadership-workshop.jpg"
copy "public\images\Mobile coffee cart with umbrella in outdoor setting, man and woman standing behind, coffee machine and syrups on cart.jpg" "public\images\mens-retreat.jpg"
copy "public\images\Coffee cup with Delightful Bean logo on table, blurred background..jpg" "public\images\prayer-breakfast.jpg"
copy "public\images\Hand holding a coffee cup with logo in a natural setting.jpg" "public\images\fishing-tournament.jpg"
copy "public\images\Person smiling holding a coffee cup outdoors.jpg" "public\images\winter-bible-study.jpg"

REM Copy leadership images
copy "public\images\Person holding takeaway coffee cup with logo on wooden table, greenery background..jpg" "public\images\leadership-1.jpg"
copy "public\images\Person holding a coffee cup with Delightful Bean logo on a wooden bench..jpg" "public\images\leadership-2.jpg"

echo Image copying completed
