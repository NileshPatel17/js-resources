### Editing a commit durint rebasing

let us assume we have following rebase items

edit d343434
squash d34342

run ``` git reset HEAD~```
now add/remove/undo files
commit the changes
continue with rebasing
run ```git rebase --continue```