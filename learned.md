# What I have learned

* path node core module   ==> **require('path');**
	* to solve absolute and relative path problems in apps
	* the path module provides utilities for working with file and directory paths.
	* see Documentation
	
* Use **res.sendFile(..path..'file.html');** to serve a static web page.
* if the project is a static website, there is a much better way to server static files using express:
	* don't use **res.sendFile()**
	* use the **static()** express middleware. 
		* **app.use(express.static());**
		* then point to the directory that contains the static files and index page and the static middleware will do the job 
		* **..static(path.join(__dirname, 'public'));**
	
* in the package.json file, if you put an asterist ** * ** instead of the version number of a module or package, it will install the latest version
*  Use **  res.json('data.json');** to send a raw json file 
* use ** res.download(path.join(__dirname, relative/path/to/file.ext)); ** to downlaod a file to the computer.
* ** name ** attribute in form inputs is what is used as value retrieved by the server in post requests.