<?php
$auth_swaggerfile = __DIR__."/../../openapi-specifications/rainbow_authent_portal/swagger.json";
$s2s_swaggerfile = __DIR__."/../../openapi-specifications/s2s/openapi.json";
if(!file_exists('./generated/rainbow_authent_portal') || !is_dir('./generated/rainbow_authent_portal')){
	shell_exec('mkdir -p ./generated/rainbow_authent_portal');
}
if(!file_exists('./generated/s2s') || !is_dir('./generated/s2s')){
	shell_exec('mkdir -p ./generated/s2s');
}
shell_exec('openapi-generator generate -i '.$auth_swaggerfile.' -g php -o generated/rainbow_authent_portal -c config-auth-portal.json');
shell_exec('openapi-generator generate -i '.$s2s_swaggerfile.' -g php -o generated/s2s -c config-s2s-portal.json');
