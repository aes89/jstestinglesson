https://edstem.org/courses/4296/lessons/5486/slides/41032


git repo allows for automated testing. needs to be visible


Create a project : contains package.json and gitignore (can use Node template)tests
Create a remote repo
Push your code to GitHub
testing - https://jestjs.io/
npm install --save-dev jest (can be installed globally, but then doesn't auto list in package.json and it needs to be there) 


unit testing
testing a function or specific part
source and test code separate



do not upload node modules in git because they are huge
module.exports = {
    repeatMessage
}
// need to export whatever we're going to test, function is repeatMessage