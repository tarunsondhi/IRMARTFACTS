#!/bin/bash

echo "let's reset the network"

sh ~/fabric-dev-servers/stopFabric.sh
sh ~/fabric-dev-servers/teardownFabric.sh

docker container prune -f

echo "\nNETWORK TORN DOWN!---------------------------------\n"

sh ~/fabric-dev-servers/startFabric.sh
sh ~/fabric-dev-servers/createPeerAdminCard.sh

echo "\nNETWORK READY!-------------------------------------\n"
