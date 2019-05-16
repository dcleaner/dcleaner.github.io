## deploy

```
npm run build

git push origin :master

git add build -f

git commit -m 'deploy'

git subtree push --prefix build origin master

git reset HEAD^
```