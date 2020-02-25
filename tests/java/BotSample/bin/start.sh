#!/bin/bash
#=========================================================================#
# (C)           : ALE
# Author	: J.Ouedje
# File          :
# Description   : Generate Rainbow client APi using openapi-generator and
#               : swagger definition files.
#=========================================================================#
SUCCESS_CODE=0
ERROR_CODE=-1
JAVA_CMD="java"
JAVA_OPTS="-verbose"
SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ $SOURCE != /* ]] && SOURCE="$DIR/$SOURCE" # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR="$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )"

SCRIPT_DIR=$DIR
cd ${SCRIPT_DIR}

FOUND_JAVA_HOME=$(update-alternatives --query java | grep 'Value: ' | grep -o '/.*/jre')
if [ -z "$FOUND_JAVA_HOME" ];then
        FOUND_JAVA_HOME=$(update-alternatives --query java | grep 'Value: ' | grep -o '/.*/java')
fi
FOUND_JAVA_HOME=${FOUND_JAVA_HOME%/bin*}
CLASSPATH=$CLASSPATH:$(find $FOUND_JAVA_HOME -name '*.jar')
FOUND_CLASSPATH=$CLASSPATH
JARS_FILES=$(find ./ -name '*.jar')
for JAR in $JARS_FILES; do
	FOUND_CLASSPATH=$FOUND_CLASSPATH:$JAR
done
FOUND_CLASSPATH=${FOUND_CLASSPATH//::/:}
ECHO_BOT_JAR=$(find ./ -name 'echo-bot*.jar')
export JAVA_HOME=$FOUND_JAVA_HOME
if [ $# -ne 1 -a  ! -r /tmp/s2s/s2s_callback_url.json ];then
	echo "Missing argument or callback_url not found in /tmp/s2s/s2s_callback_url.json"
	echo "Usage bash start.sh [callback_url]"
	echo "	[callback_url] : The url that will be used for webhook"
	echo "	if callback_url not provided as parameter, it must have been writtent by rainbow-s2s-starterkit-nodejs in /tmp/s2s/s2s_callback_url.json"
	echo "	if not, something wrong append"
	exit $ERROR_CODE
fi

CALLBAK_URL=$1
JAVA_OPTS="-verbose -Dlog4j.configurationFile=${SCRIPT_DIR}/config/log4j2.xml"
echo "$JAVA_CMD $JAVA_OPTS -cp "${FOUND_CLASSPATH}" -jar ${ECHO_BOT_JAR} com.ale.rainbow.s2s.App ${CALLBAK_URL}"
$JAVA_CMD $JAVA_OPTS -cp "${FOUND_CLASSPATH}" -jar ${ECHO_BOT_JAR} com.ale.rainbow.s2s.App ${CALLBAK_URL}
exit $SUCCESS_CODE
