@echo off
setlocal enabledelayedexpansion

REM --- STEP 1: Get next version folder ---
call :getNextVersion NEXT_VERSION
echo Next Version: %NEXT_VERSION%
mkdir Public\%NEXT_VERSION%

if not exist "..\LaundryUiV1\" (
    echo LaundryUiV1 folder not found. Cloning...
    git clone https://github.com/keshavsoft/LaundryUiV1 ..\LaundryUiV1
)
if not exist "..\LaundryUiV1\node_modules" (
    echo node_modules folder not found. Running npm install...
    pushd ..\LaundryUiV1
    call npm i
    popd
)

    echo Processing %%~nxf

    REM Go to LaundryUiV1 and build
    pushd ..\LaundryUiV1
    call npm run NewOrders
    call npm run BranchToday
    popd

    REM Create target folder and copy built files
    xcopy "..\LaundryUiV1\publicDir\NewOrders" "Public\%NEXT_VERSION%\Branch\NewOrders" /h /i /c /k /e /r /y >nul
    xcopy "..\LaundryUiV1\publicDir\BranchToday" "Public\%NEXT_VERSION%\Branch\BranchToday" /h /i /c /k /e /r /y >nul

    echo Done with %%~nxf

exit /b

:getNextVersion
setlocal enabledelayedexpansion
set "max=0"
for /d %%G in (Public\V*) do (
    set "folder=%%~nxG"
    set "ver=!folder:V=!"
    REM Check if numeric
    for /f "delims=0123456789" %%a in ("!ver!") do set "ver=0"
    if !ver! gtr !max! set "max=!ver!"
)
set /a NEXT_VERSION=max+1
endlocal & set "%1=V%NEXT_VERSION%"
exit /b
