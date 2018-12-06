## Git: checkout files or directories from another branch

#### Checking out a file:
```
# First switch to the master branch
$ git checkout master

# Then grab the needed file
$ git checkout feature-branch -- src/js/some-file.js

# The thee is now dirty
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   src/js/some-file.js

# Then commit in normal fashion
$ git commit -m "Get a file from the feature branch"
```
#### Checking out a directory:
```
$ git checkout feature-branch -- src/js/
```

#### Checking out a file from a different branch
```
$ git checkout feature/excel-validation -- src/utils/excel/parser.ts
```
