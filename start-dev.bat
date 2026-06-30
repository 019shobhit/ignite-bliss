@echo off
title Ignite & Bliss — Installing & Starting Dev Server
color 0A

echo.
echo  =========================================
echo   IGNITE ^& BLISS — Luxury Candle Website
echo  =========================================
echo.
echo  [1/2] Installing dependencies...
echo.

call npm install

echo.
echo  [2/2] Starting development server...
echo.
echo  Site will open at: http://localhost:3000
echo.

call npm run dev
