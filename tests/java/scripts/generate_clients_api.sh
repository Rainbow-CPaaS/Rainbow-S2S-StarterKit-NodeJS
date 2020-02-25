#!/bin/bash
#=========================================================================#
# (C)		: ALE
# File		:
# Description	: Generate Rainbow client APi using openapi-generator and
#		: swagger definition files.
#=========================================================================#
export JAVA_POST_PROCESS_FILE="/usr/local/bin/clang-format -i"
# change JAVA_HOME to your jdk home path
MY_JAVA_HOME=$(update-alternatives --query java | grep 'Value: ' | grep -o '/.*/jre')
if [ -z "$MY_JAVA_HOME" ];then
	MY_JAVA_HOME=$(update-alternatives --query java | grep 'Value: ' | grep -o '/.*/java')
fi
MY_JAVA_HOME=${MY_JAVA_HOME%/bin*}
export JAVA_HOME=$MY_JAVA_HOME
SWAGGER_DIR="../../../openapi-specifications"
SWAGGER_PORTAIL="rainbow_authent_portal s2s"
PROJECT_BASE_DIR="../BotSample"
SAVED_DIR=(pwd)
find ./ -name 'target' -exec rm -rf {} \;
for PORTAIL in $SWAGGER_PORTAIL; do
	OUTPUT_DIR="../generated/${PORTAIL}"
	[ -d $OUTPUT_DIR ] || mkdir -p $OUTPUT_DIR
	SWAGGER=$(find $SWAGGER_DIR/$PORTAIL -name '*.json')
	echo "processing ${SWAGGER}..."
	rm -rf $OUTPUT_DIR/*
	openapi-generator generate -i ${SWAGGER} -g java -o $OUTPUT_DIR -c ${PORTAIL}_config.json > $PORTAIL.log
	if [ $? -eq 0 ];then
		SAVED_DIR=$(pwd)
		#cd $OUTPUT_DIR
		/bin/cp -rf $OUTPUT_DIR $PROJECT_BASE_DIR/
		FILE2EDIT=$PROJECT_BASE_DIR/$PORTAIL/pom.xml
		echo $FILE2EDIT
		ed -s $FILE2EDIT << EOF
/maven-javadoc-plugin
+1
.,.s/2.10.4/3.1.1/
w
q
EOF
	fi
done
cd $PROJECT_BASE_DIR
OUTPUT_DIR=$PROJECT_BASE_DIR/../output
mvn clean install
[ -d $OUTPUT_DIR ] && rm -rf $OUTPUT_DIR
mkdir $OUTPUT_DIR
find ./dist/target -name '*.tgz' -exec cp {} $OUTPUT_DIR \;
cd $OUTPUT_DIR
ECHOBOT=$(ls *.tgz)
tar xvzf ${ECHOBOT}

cd $SAVED_DIR
