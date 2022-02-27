# api
API tutorial
# GIT 
https://github.com/AbayReushenov
1. Создать в GitHub репозиторий: api
2. Инициализировать git в корневой папке проекта
 - git init
 - git add -A
 - git commit -m "Мой новый проект"
 - git remote add origin https://github.com/AbayReushenov/api.git
 - git push --set-upstream origin master
 - git push (Необязательно)


# merge from master to main
# https://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories-on-rebase
1. git checkout master
2. git pull origin main --allow-unrelated-histories
3. git merge master origin/main
4. git add -A
5. git commit -m"KIKI"
6. git push origin main
