# flowcate.github.io

This package contains the latest generated official **DeepHub docu** for deployment towards docs.flowcate.io (which is a CNAME alias to flowcate.github.io, the "github page" of this repo). 

The prerequisites are:
* build deep-hub-docs as usually with python and sphinx
* copy every file and folder except "_sources" from the generated build/ sub folder of deep-hub-docs into the dist/ folder of this repo.
* actually deploy the content from dist with the following command: <code>npm run deploy</code>
