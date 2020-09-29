https://edstem.org/courses/4296/lessons/5245/slides/38808


What is forking workflow? Have our own copy of the repo (e.g. Github repo, "server side copy") into own account. Contributions go to own fork. Push contribution to fork on own branch, then merge back to other/original repo. Still a branching workflow, one branch per feature. 

Git clone automatically makes a connection - any other time we need to manually make it. 
Commiting - makes a snapshot in your local repo, need to push for others to see it. 
lots of time between 1-6, may need to do 4 multiple times. 

git (whatever) -h gives options available

"pull request" is me requesting that master (eg) pulls from my branch

ALWAYS START BY SYNCING WITH MASTER
set upstream
git remote add upstream url_here

1. Synch with central project repo
   Git pull upstream master - if changes present, merge into my own fork (fetch instead of master appropriate in other cases, here should be safe)master. Must create the connection. git remote add upstream url_here
2. Create feature branch
    git checkout -b feature_name
    Commit before updating a feature branch
3. Implement, test, commit (on branch)
4. make sure still in synch with the central project master (so no merge conflicts in case someone else's feature has been integrated)
    git checkout master
    git pull upstream master ()
    git checkout feature_name
    git merge master (if changes from master needed to be merged - if you do then test before continuing/merging the feature)

5. push to fork (on branch)
    git push origin feature_name
6. Raise pull request on central project repo from fork
raise pull request
7. Request is r/ves and merged into central project repo
merge pull request
8. Delete feature branch (optional)))

review
test the fork (from pull request)
git remote add shelby (name you asign) url (of their repo)
(have to fetch first) git fetch shelby
git checkout -b add-shelby-mel (what she called her branch) shelby/add-shelby-mel
 
https://www.youtube.com/watch?v=oDCKHJq3CvA&feature=youtu.be
Part 1 - Git Collaboration Intro


https://www.youtube.com/watch?v=reXtOVpTBZM#action=share
Part 2 -

https://www.youtube.com/watch?v=FC_R0L43wfo&feature=youtu.be
Part 3 - 



git remote - shows what connections we have. In forking, should have 2 server side repos (own copy and master repo).
Additional resources

Forking workflow

Atlassian's documentation on the forking workflow

GitHub Guidedocumentation on forking

Code Reviews

Atlassian's documentation on code review

April Wensel's amazing talk on compassionate code review - watch it.

Clean history

There are a lot of options when it comes to merging branches, and sometimes it is desirable to use some of those options to create a clean commit history.

Read through this medium post to learn about how you can create a clean commit history with rebase, interactive rebase, commit ammends, squash merging, and other techniques.

Note that these are advanced actions that can create great confusion and trouble, so proceed carefully. It's a good idea to try out some of these scenarios in a test repository.