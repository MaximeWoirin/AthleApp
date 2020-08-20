#!/bin/bash

echo -e "\e[1m"
echo -e "## Configuration des variables d'environement ##"
echo -e "\e[0m"
echo -e "Pour plus d'informations : https://gitlab.com/MaximeWoirin/bottest/-/blob/master/docs/env.md \n"

     
# conf_file="./.conf.json"

# if [ -e $conf_file ]
# then
#     echo -e "Voulez vous réutiliser les paramètres wit (token) et facebook (page + app secret + token) précédents ? (y/n)"
#     read choice
# fi

# if [ $choice = n ]
# then
#     $(unlink $conf_file)
# fi

# if [ -e $conf_file ] && [ -x $(command -v jq) ]
# then
#     page_Id=`cat $conf_file | jq '.FACEBOOK_PAGE_ID'`
#     page_Id=${page_Id//\"} 
#     app_secret=`cat $conf_file | jq '.FACEBOOK_APP_SECRET'`
#     app_secret=${app_secret//\"}  
#     facebook_token=`cat $conf_file | jq '.FACEBOOK_TOKEN'` 
#     facebook_token=${facebook_token//\"}  
#     wit_token=`cat $conf_file | jq '.WIT_TOKEN'` 
#     wit_token=${wit_token//\"}  
# else
#     echo "Facebook page id : "
#     read page_Id
#     echo "Facebook app secret : "
#     read app_secret
#     echo "Facebook token : "
#     read facebook_token
#     echo "Wit token : "
#     read wit_token
#     echo -e "{
#         \"FACEBOOK_PAGE_ID\":\"$page_Id\",
#         \"FACEBOOK_APP_SECRET\":\"$app_secret\",
#         \"FACEBOOK_TOKEN\":\"$facebook_token\",
#         \"WIT_TOKEN\":\"$wit_token\"
# }" >> $conf_file
# fi


envFile=./.env
> $envFile
echo -e "\n# Database configuration\n" >> $envFile
echo -e "MYSQL_DATABASE=athle" >> $envFile
mySql_root_pwd=`openssl rand -hex 16`
mySql_root_pwd="${mySql_root_pwd%?}"
echo -e "MYSQL_ROOT_PASSWORD=$mySql_root_pwd" >> $envFile

echo -e "\n# Backend configuration\n" >> $envFile
echo -e "BACKEND_PORT=80" >> $envFile

echo -e "MySQL Root Password : \e[1m"$mySql_root_pwd"\e[0m\n"
