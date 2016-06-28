echo "Uploading Nick Rabb's API to the codebase…"
rsync -r ./ yesandgames@yesandgames.com:~/ricknabb-api/
echo "Upload complete. Nodemon should reboot..."
