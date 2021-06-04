How to push to a branch of a different name on Git

For example, if you want to push a branch called some-branch to my-feature:

(some-branch)$ git push origin some-branch:my-feature
Total 0 (delta 0), reused 0 (delta 0)
To github.com:johnmosesman/burner-repo.git
 + 728f0df...8bf04ea some-branch -> my-feature


How to push all local branches to the remote

(main)$ git branch
* main
  my-feature

(main)$ git push --all
...
To github.com:johnmosesman/burner-repo.git
   b7f661f..6e36148  main -> main
 * [new branch]      my-feature -> my-feature
