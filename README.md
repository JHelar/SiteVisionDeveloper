# SV_PROJECT_NAME
A boilerplate for developing in SiteVision.
Contains watcher setup for direct compiling and deployment to a remote SiteVision webdav enviroment.

## Prerequisite
Recomended IDE is Microsoft VisualCode.

1)	Copy or clone the repo (make sure to change the git remote if you clone!)
2) 	Download and install Node js (if you dont have allready)

## Installation
1) 	In cmd run 'npm install -g gulp'
2) 	Inside the project folder in cmd run 'npm install'
3) 	In gulpfile.js change paths to correspond to your developer file structure inside SiteVision.
	Change webdav baseURL and username / password.
4) 	In tsconfig.json - change to correct path to ts files.
5) 	Inside IDE or cmd run gulp task 'main:watcher'
6) 	Get coding!

## FAQ
Q)	Deploy throws error on save.

A)	Common reason is due to the folder structure inside SiteVision does not correspond to the one you have locally.
	If structure locally is PROJECT_NAME/ROOT/Js then the structure in SiteVision should be /webdav/files/ROOT/Js and make sure that you have the folder structure allready setup in SiteVision, the task cannot create folders by it self.