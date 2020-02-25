#!/bin/bash
#=========================================================================#
# (C)		: ALE
# File		:
# Description	: Build BotSample
#=========================================================================#
export JAVA_POST_PROCESS_FILE="/usr/local/bin/clang-format -i"
# change JAVA_HOME to your jdk home path
MY_JAVA_HOME=$(update-alternatives --query java | grep 'Value: ' | grep -o '/.*/jre')
if [ -z "$MY_JAVA_HOME" ];then
	MY_JAVA_HOME=$(update-alternatives --query java | grep 'Value: ' | grep -o '/.*/java')
fi
MY_JAVA_HOME=${MY_JAVA_HOME%/bin*}
export JAVA_HOME=$MY_JAVA_HOME
PROJECT_BASE_DIR="../BotSample"
SAVED_DIR=$(pwd)
cd $PROJECT_BASE_DIR
find ./ -name 'target' -exec rm -rf {} \;
mvn clean install
cd $SAVED_DIR
