@echo off

set /p str= Input Keyword :

call set TAG=%str%
call npm run example
