@echo off
cd ..\LaundryUiV2
git pull

call npm run Login

xcopy .\publicDir\LoginUsers ..\LaundryBEBranchV4\public\V4\LoginUsers /h /i /c /k /e /r /y

cd ..\LaundryBEBranchV4