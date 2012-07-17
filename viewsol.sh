#!/bin/bash

#echo "Wow $1"
# curl -X POST http://localhost:5984/gpiisolutions/_design/gpii-solutions/_rewrite/solutions/fluid.uiOptions.linux -d '{"_id":"26d534bd9b3b3080a7233d94cf00969b","_rev":"1-9b94f8a0a5fa48b458ced75c45c8580f","name":"UI 2 Options","id":"fluid.uiOptions.linux","contexts":{"OS":[{"id":"linux","version":">=2.6.26"}]},"settingsHandlers":[{"type":"gpii.settingsHandlers.noSettings","capabilities":["display"]}],"lifecycleManager":{"start":[{"type":"gpii.launch.exec","command":"firefox http://ec2-107-21-143-113.compute-1.amazonaws.com:443/demos/Mammals.html?token=${{userToken}}"}],"stop":[{"type":"gpii.launch.exec","command":"pkill firefox"}]}}'

#curl -X GET http://localhost:5984/gpiisolutions/_design/gpii-solutions/_rewrite/solutions/fluid.uiOptions.linux

#curl -X POST http://localhost:5984/gpiisolutions/_design/gpii-solutions/_update/updateSolution/ -d '{"name":"UI 2 Options","id":"fluid.uiOptions.linux","contexts":{"OS":[{"id":"linux","version":">=2.6.26"}]},"settingsHandlers":[{"type":"gpii.settingsHandlers.noSettings","capabilities":["display"]}],"lifecycleManager":{"start":[{"type":"gpii.launch.exec","command":"firefox http://ec2-107-21-143-113.compute-1.amazonaws.com:443/demos/Mammals.html?token=${{userToken}}"}],"stop":[{"type":"gpii.launch.exec","command":"pkill firefox"}]}}'

# '{"_id":"26d534bd9b3b3080a7233d94cf0086a3", "stuff":"wow"}'

curl -X POST http://localhost:5984/gpiisolutions/_design/gpii-solutions/_update/updateSolution/26d534bd9b3b3080a7233d94cf0086a3 -d '{"_id":"26d534bd9b3b3080a7233d94cf0086a3", "stuff":"wow"}'
