## Git: checkout files or directories from another branch

#### Checking out a file:
```
# First switch to the master branch
$ git checkout master

# Then grab the needed file
$ git checkout feature-branch -- src/js/some-file.js

# checkout from the current branch
$ git checkout HEAD name_of_file

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

#### git stash apply
If one is on a Windows machine and in PowerShell, one needs to quote the argument such as:
```
git stash apply "stash@{0}"
```
#### setup upstream
https://gist.github.com/CristinaSolana/1885435

#### amend
git commit --amend -m "New and correct message"

#### cherry-pick
git cherry-pick commit_id

## Git: Checking Out GitHub Pull Requests Locally
let us say PR No is 1234
step 1:
```
git fetch origin pull/1234/head:pr-1234
```
step 2:
```
git checkout pr-1234
```
### Reference: https://blog.scottlowe.org/2015/09/04/checking-out-github-pull-requests-locally/

