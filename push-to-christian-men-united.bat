@echo off
echo Starting GitHub push process... > push-log.txt

cd /d %~dp0

echo Checking Git status... >> push-log.txt
git status >> push-log.txt 2>&1
echo. >> push-log.txt

echo Adding all files to Git... >> push-log.txt
git add . >> push-log.txt 2>&1
echo. >> push-log.txt

echo Committing changes... >> push-log.txt
git commit -m "Update website with modern teal and burgundy color scheme and design" >> push-log.txt 2>&1
echo. >> push-log.txt

echo Setting remote repository... >> push-log.txt
git remote set-url origin https://github.com/coolpeter2025/Christian-Men-United.git >> push-log.txt 2>&1
echo. >> push-log.txt

echo Pushing to GitHub master branch... >> push-log.txt
git push -u origin master >> push-log.txt 2>&1
echo. >> push-log.txt

echo If master branch fails, trying main branch... >> push-log.txt
git push -u origin main >> push-log.txt 2>&1
echo. >> push-log.txt

echo GitHub push process completed. Check push-log.txt for details. >> push-log.txt
echo GitHub push process completed. Check push-log.txt for details.
