@echo off
start cmd /k "cd websocket-server && node server.js"
start cmd /k "cd react-app1 && npm run dev"
start cmd /k "cd react-app2 && npm run dev"