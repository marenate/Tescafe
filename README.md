# Testcafe

## What do you need to have?
```bash
1- A text editor like a Visual Studio Code or Sublime or any of your preference
2- Git installed
3- npm installed.  Should a version 6.14.5 or superior
4- node installed. Should a version v12.17.0 or superior
5- Have 2 or more browser installed,  like chrome, firefox, edge, safari, etc
```

## What do you need to know?
```bash
1- Basic programming javascript language
2- know commons git commands. Like as:
- Create branch
- Stage and record your changes 
- Get the latest version of a repository
- Send your local commits to the remote repository
- Shows the chronological commit history
- compare files changes
- Remove files
```

## Install Testcafe
```bash
# After clone this project
npm install -g testcafe
# Check the version
testcafe -v
#  version 1.9.4 or superior
```

## To get reporst and videos
```bash
# For videos
npm install --save @ffmpeg-installer/ffmpeg
# For reports
npm install -g testcafe-reporter-html@latest 

```

## Run test testcafe
```bash
# List your browser that you have:
testcafe -b
# Run your test script with a specific browser:
testcafe chrome  TheTestScript.js
# Run a specific test:
testcafe chrome  TheTestScript.js -t "TheTestName"
# Run a suite test incognito mode:
testcafe "chrome -incognito" TheTestScript.js
# Run a suit test to get a report with 2 browsers:
testcafe chrome,firefox: TheTestScript.js --reporter html:reportes/mi_cuenta_reporte.html
# Run a suit test to get a report with 1 browsers:
testcafe chrome TheTestScript.js --reporter html:reportes/mi_cuenta_reporte.html
# Run a suit test with a velocity determinate in an specific test:
testcafe chrome TheTestScript.js -t "TheTestName" --speed 0.1
# Run a test and take screenshot when test fails and in an specific test :
testcafe chrome TheTestScript.js -t "TheTestName" --screenshots-on-fails
# Run a suit and take the video:
tetscafe chrome TheTestScript.js --video Video
# Run a test and take the video:
testcafe chrome TheTestScript.js --video video -t "TheTestName"
# Run a suit test with concurrence mode, this case 2 nro concurrence:
testcafe -c 2 chrome TheTestScript.js
# Run a specific test with concurrence mode, this case 2 nro concurrence:
testcafe -c 2 chrome TheTestScript.js -t "TheTestName"
# Run a suit test with concurrence and incognito mode, this case 2 nro concurrence:
testcafe -c 2 "chrome -incognito" TheTestScript.js
# Run a suit test remote mode:
testcafe remote TheTestScript.js
# Run a suit test remote mode but with qr in order the device can read the qr code:
testcafe remote TheTestScript.js --qr-code
# Run a suit test using emulation you can check the "Toogle devide toolbar" of google chrom:
testcafe "chrome:emulation:device=iphone X" TheTestScript.js
testcafe "chrome:emulation:device=Galaxy S5" TheTestScript.js
testcafe "chrome:emulation:device=iPad" TheTestScript.js
```

## To get reporst and videos
```bash
# For videos
npm install --save @ffmpeg-installer/ffmpeg
# For reports
npm install -g testcafe-reporter-html@latest 
```

## This project contains helpers, page_object_model and suites folders and also the test plan and the test suits 
```bash
# helpers folder
data.js : This contains the input data for our test
helpers.js : This contains the url our system
# page_object_model folder
page_home.js: This contains te elements from home page
page_mi_cuenta.js: This contains the elements from mi_cuenta page
# suites folder
- failed folder: inside has the test failed and report
- reports folder: inside has the test report in html
- screenshots folder: inside has the evidence of the test run for each test

# Test plan and Test suits
TestCases.xlsx file here is our list of test cases 
TestPlan.xlsx file here is our test plan document
```


