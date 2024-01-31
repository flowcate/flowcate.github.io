"use strict";(self.webpackChunkdeephub_doc=self.webpackChunkdeephub_doc||[]).push([[887],{43479:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(85893),t=n(11151),s=n(70387);const a={sidebar_label:"Running the DeepHub\xae Locally",title:"Running the DeepHub\xae Locally",sidebar_position:2},r=void 0,l={id:"testing-deephub/running_dh_locally",title:"Running the DeepHub\xae Locally",description:"Getting Started",source:"@site/versioned_docs/version-DeepHub 2023 R2 - 2.4.2/testing-deephub/running_dh_locally.mdx",sourceDirName:"testing-deephub",slug:"/testing-deephub/running_dh_locally",permalink:"/docs/DeepHub 2023 R2 - 2.4.2/testing-deephub/running_dh_locally",draft:!1,unlisted:!1,tags:[],version:"DeepHub 2023 R2 - 2.4.2",sidebarPosition:2,frontMatter:{sidebar_label:"Running the DeepHub\xae Locally",title:"Running the DeepHub\xae Locally",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Trial Instances in the Cloud",permalink:"/docs/DeepHub 2023 R2 - 2.4.2/testing-deephub/demo_access"},next:{title:"Changelog",permalink:"/docs/DeepHub 2023 R2 - 2.4.2/release-note"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"System Prerequisites",id:"system-prerequisites",level:2},{value:"Docker",id:"docker",level:3},{value:"Windows PowerShell or Command Prompt",id:"windows-powershell-or-command-prompt",level:3},{value:"Terminal for Linux &amp; macOS",id:"terminal-for-linux--macos",level:3},{value:"Docker and Docker Compose",id:"docker-and-docker-compose",level:2},{value:"Using Docker or Docker Compose",id:"using-docker-or-docker-compose",level:3},{value:"Getting the Latest Docker Compose File",id:"getting-the-latest-docker-compose-file",level:3},{value:"Explanation of the Docker Compose File",id:"explanation-of-the-docker-compose-file",level:3},{value:"Start a DeepHub\xae",id:"start-a-deephub",level:3},{value:"Stop a running DeepHub\xae",id:"stop-a-running-deephub",level:3},{value:"Install Specific Version",id:"install-specific-version",level:2},{value:"Pulling Specific Containers",id:"pulling-specific-containers",level:3},{value:"DeepHub\xae UI Configuration",id:"deephub-ui-configuration",level:2},{value:"Adding a Floorplan Image to the Map",id:"adding-a-floorplan-image-to-the-map",level:3},{value:"Displaying a Floorplan Image by Itself",id:"displaying-a-floorplan-image-by-itself",level:3},{value:"Displaying a Floorplan Image over a Basemap",id:"displaying-a-floorplan-image-over-a-basemap",level:3},{value:"Multi-Level Floorplans",id:"multi-level-floorplans",level:3}];function h(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(o.h2,{id:"getting-started",children:"Getting Started"}),(0,i.jsx)(o.p,{children:"This tutorial is designed for partners and customers as a step-by-step guide when working with the DeepHub\xae.\nIt includes the following sections:"}),(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"System Prerequisites for the DeepHub\xae"})," - This section provides information on prerequisites of the system in terms of the software tools and technical knowledge needed for the DeepHub\xae installation."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Install the DeepHub\xae"})," - This section provides step-by-step instructions on how to install the DeepHub\xae."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"User Instructions for the DeepHub\xae"})," - This section provides essential information on how to operate the DeepHub\xae from the end user perspective."]}),"\n"]})]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(o.h2,{id:"system-prerequisites",children:"System Prerequisites"}),(0,i.jsx)(o.h3,{id:"docker",children:"Docker"}),(0,i.jsx)(o.p,{children:"Docker is an open-source project for automating the deployment of applications as portable, self-sufficient containers that can run on the cloud or on-premises.\nDocker image containers can run natively on Linux and Windows. Developers can use development environments on Windows, Linux, or macOS. On the development computer, the developer may run a Docker host where Docker images are deployed."}),(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"Image: A Docker image is a file, comprised of multiple layers, that is used to execute code in a Docker container. It is a package that contains all necessary files for a containerized application to run. When the Docker user runs an image, it can become one or multiple instances of the container."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"Container: An instance of a Docker image. A container represents the execution of a single application, process, or service. It consists of the contents of a Docker image, an execution environment, and a standard set of instructions."}),"\n"]}),"\n",(0,i.jsxs)(o.li,{children:["\n",(0,i.jsx)(o.p,{children:"Docker Compose: A tool for defining and running multi-container Docker applications."}),"\n"]}),"\n"]}),(0,i.jsxs)(o.p,{children:["Based on your operating system, you can download and install Docker Desktop here: ",(0,i.jsx)(o.a,{href:"https://docs.docker.com/desktop/",children:"Docker Desktop"}),".\nWhile installing Docker on your machine, ensure you allow the installation to bypass any firewall settings (if prompted). Once the installation process is complete, your machine will restart."]}),(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"When Docker Desktop is installed on Windows, the entire package is installed (including Docker Compose). With Ubuntu, the user needs to install Docker and Docker Compose separately."})}),(0,i.jsx)(o.h3,{id:"windows-powershell-or-command-prompt",children:"Windows PowerShell or Command Prompt"}),(0,i.jsxs)(o.p,{children:["A shell is a user interface that gives you access to various services of an operating system.\nA shell can be command-line based, or it can include a graphical user interface (GUI).\nWindows PowerShell is a shell developed by Microsoft for task automation and configuration management.\nIt is cross-platform and consists of a command-line shell and scripting language.\nPowerShell capabilities allow users to simplify and automate repetitive tasks by creating scripts and combining multiple commands.\nThe Windows operating system comes with Windows PowerShell pre-installed. However, Windows PowerShell can be installed for other operating systems here: ",(0,i.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7",children:"Windows PowerShell"}),".\nAside from Windows PowerShell, the classic Windows Command Prompt is also pre-installed and can be used."]}),(0,i.jsx)(o.h3,{id:"terminal-for-linux--macos",children:"Terminal for Linux & macOS"}),(0,i.jsxs)(o.p,{children:["A terminal is a program that allows the use of the command-line in a graphical environment.\nIn a Linux system, the shell is a command-line interface that interprets a user\u2019s commands and script files, and notifies the server\u2019s operating system what to do with them.\nTerminal is pre-installed on Linux and macOS. For more information, please read ",(0,i.jsx)(o.a,{href:"https://ubuntu.com/tutorials/command-line-for-beginners#1-overview",children:"Ubuntu Tutorials"}),"."]})]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(o.h2,{id:"docker-and-docker-compose",children:"Docker and Docker Compose"}),(0,i.jsxs)(o.p,{children:["Using Docker or Docker Compose on Windows and Linux is done via a command line shell and is almost identical on both platforms. You can use PowerShell or Command Prompt on Windows and a shell like bash or zsh on Linux.\nRefer to ",(0,i.jsx)(o.a,{href:"#system-prerequisites",children:"DeepHub System Prerequisites"})," for details."]}),(0,i.jsx)(o.h3,{id:"using-docker-or-docker-compose",children:"Using Docker or Docker Compose"}),(0,i.jsx)(o.p,{children:'We recommend using Docker Compose because this way you will get a completely configured "system" consisting of the DeepHub\xae, the DeepHub\xae UI and a containerized web server, acting as a reverse proxy, to simplify\nthe overall usage and interaction of these components.'}),(0,i.jsx)(o.p,{children:"We provide a Docker Compose file that configures the necessary orchestration between these containers. Refer to the next section for more details."}),(0,i.jsx)(o.p,{children:"Nevertheless, you are able to pull just the Docker container that you need instead of all of them."}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"docker pull flowcate/deephub:<tag of release you want to pull>\n"})}),(0,i.jsx)(o.admonition,{type:"info",children:(0,i.jsxs)(o.p,{children:["The DeepHub\xae itself, as well as the corresponding DeepHub\xae UI, are available at Docker Hub: ",(0,i.jsx)(o.a,{href:"https://hub.docker.com/u/flowcate",children:"Flowcate@docker"}),"."]})}),(0,i.jsx)(o.h3,{id:"getting-the-latest-docker-compose-file",children:"Getting the Latest Docker Compose File"}),(0,i.jsxs)(o.p,{children:["We provide a docker-compose.yml file and additional configuration files for orchestration of the DeepHub\xae itself, as well as the corresponding DeepHub\xae UI, in our GitHub repository: ",(0,i.jsx)(o.a,{href:"https://github.com/flowcate/deephub-basic-setup",children:"deephub-basic-setup by Flowcate@github"}),"."]}),(0,i.jsxs)(o.p,{children:["We recommend creating a dedicated local directory on your filesystem where you store the docker-compose.yml and the aforementioned configuration files. This happens automatically if you use ",(0,i.jsx)(o.code,{children:"git clone"})," to pull the complete repository."]}),(0,i.jsx)(o.p,{children:"The DeepHub\xae needs to create some additional files during operations and writes them to directories mounted from your host filesystem. This is done relative to the location of the docker-compose.yml file and will therefore happen within some of the directories that are part of the deephub-basic-setup repository."}),(0,i.jsx)(o.h3,{id:"explanation-of-the-docker-compose-file",children:"Explanation of the Docker Compose File"}),(0,i.jsx)(o.p,{children:'Our Docker Compose file consists of four "services":'}),(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:'"deephub"'}),"\n",(0,i.jsx)(o.li,{children:'"deephub-admin-ui"'}),"\n",(0,i.jsx)(o.li,{children:'"deephub-kiosk-ui"'}),"\n",(0,i.jsx)(o.li,{children:'"deephub-apache"'}),"\n"]}),(0,i.jsx)(o.p,{children:"Each corresponds to one Docker container (indicated by the name).\nWithin each service section, Docker-specific details can be configured as well as environment variables for the processes running within a container. Let's pick an example section:"}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-yaml",children:"deephub:\n  image: flowcate/deephub:latest\n  container_name: 8081-deephub\n  restart: unless-stopped\n  read_only: true\n  logging:\n    driver: 'json-file'\n    options:\n      max-file: '2'\n      max-size: '10m'\n  environment:\n    - DEEPHUB_PORT=7081\n    - DEEPHUB_CORS=true\n    - DEEPHUB_LICENSE_KEY=50f7eb6d-4b4c-4a7b-8d60-0c439328214c\n    - SQLITE_TMPDIR=/data\n  ports:\n    - '7081'\n  volumes:\n    - './hub-data/:/data'\n  networks:\n    - deephub-net\n"})}),(0,i.jsx)(o.p,{children:'First of all, there is the service name. In this case, it is "deephub". Next are Docker-specific parameters, such as the image name and tag, the name of the container built from the image, the restart policy, and whether the container should run in read-only mode. If the latter is set to "true", no process running within the container is allowed to write to the Docker container\'s own filesystem. After this comes Docker parameters for logging.'}),(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.strong,{children:"environment"})," key begins the section containing the environment variables that are made available within the Docker container. You'll notice DeepHub-specific ones, such as the port on which the DeepHub should listen. ",(0,i.jsx)(o.strong,{children:"All DeepHub-specific environment variables start with DEEPHUB, and are followed by an underscore and the capital spelling of the parameter"})," as specified in ",(0,i.jsx)(o.a,{href:"/docs/DeepHub%202023%20R2%20-%202.4.2/deephub/ServerConfiguration",children:"Server Configuration"}),"."]}),(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.code,{children:"SQLITE_TMPDIR"})," variable specifies a path to which the SQlite DB can write temporary information. The path has to be a known path from the point of view of the container and has to be writable."]}),(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"DEEPHUB_PORT"})," refers to the port number within the Docker container. However, it is not necessarily identical to the port on which the process is reachable from outside the container. It is the following section, ",(0,i.jsx)(o.strong,{children:"ports"}),', that makes this port available from the outside. In this particular case, it is the same port the DeepHub process uses within the container. Instead of that simple entry, a "port mapping" could have been specified - including the outside port number and the corresponding inside port number to which it should be mapped.']}),(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.strong,{children:"volumes"}),' section presents the mapping/mounting of external directories to internal directories within containers. In the example above, the external/host directory called "hub-data", relative to the location of the docker-compose.yml file, is mapped to the absolute path /data within the container. ',(0,i.jsx)(o.strong,{children:"The read-only container can write to this external directory if the user and group permissions on the host filesystem are set appropriately."})]}),(0,i.jsx)(o.h3,{id:"start-a-deephub",children:"Start a DeepHub\xae"}),(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Open a shell (PowerShell or Command Prompt on Windows, a terminal on Linux or macOS)"}),"\n",(0,i.jsxs)(o.li,{children:["Change to the directory where your docker-compose.yml file resides. ",(0,i.jsx)(o.strong,{children:"Docker Compose won't work if invoked outside this directory."})]}),"\n",(0,i.jsx)(o.li,{children:"Invoke Docker Compose. It will take a few minutes to download the Docker images and set up the DeepHub\xae."}),"\n"]}),(0,i.jsx)(o.p,{children:"Example:"}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"cd <directory where the docker-compose.yml is>\ndocker compose up -d\n"})}),(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"On Linux, it may be necessary to call docker compose as superuser via the sudo command."})}),(0,i.jsxs)(o.p,{children:["Now you have your own running DeepHub\xae instance that can be accessed with any modern web browser at the address: ",(0,i.jsx)(o.strong,{children:(0,i.jsx)(o.a,{href:"http://localhost:8081",children:"http://localhost:8081"})})]}),(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"The DeepHub UI",src:n(54547).Z+"",width:"3047",height:"1568"})}),(0,i.jsx)(o.p,{children:"To complement the DeepHub UI shown above, you may also make API calls to the DeepHub REST API while running the DeepHub locally. This can be done with a tool such as Postman or cURL."}),(0,i.jsx)(o.p,{children:"The containerized web server included in the Docker Compose bundle acts as a reverse proxy - forwarding requests to either the DeepHub UI or DeepHub containers."}),(0,i.jsxs)(o.p,{children:["To interact with the REST API, you will need to use the following baseURL: ",(0,i.jsx)(o.strong,{children:(0,i.jsx)(o.a,{href:"http://localhost:8081/deephub/v1",children:"http://localhost:8081/deephub/v1"})})]}),(0,i.jsx)(o.p,{children:"For example, retrieve an array of all zones:"}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"curl http://localhost:8081/deephub/v1/zones/summary | json_pp\n"})}),(0,i.jsx)(o.h3,{id:"stop-a-running-deephub",children:"Stop a running DeepHub\xae"}),(0,i.jsx)(o.p,{children:"Please make sure you are in the same directory where you invoked docker compose."}),(0,i.jsxs)(o.p,{children:["To stop a running DeepHub\xae, execute ",(0,i.jsx)(o.code,{children:"docker compose down"}),". This ensures the running DeepHub\xae is stopped and allows the user to modify the configuration data."]}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",metastring:"title='Example'",children:"cd <directory where the docker-compose.yml is>\ndocker compose down\n"})}),(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"On Linux, it may be necessary to call docker compose as superuser via the sudo command."})})]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(o.h2,{id:"install-specific-version",children:"Install Specific Version"}),(0,i.jsx)(o.p,{children:"It is possible to switch to a specific version of the DeepHub\xae instead of the latest one, if required."}),(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsxs)(o.p,{children:["Before installing a specific version of the DeepHub\xae, it is mandatory to stop a running DeepHub as ",(0,i.jsx)(o.a,{href:"#stop-a-running-deephub",children:"described above"}),"."]})}),(0,i.jsx)(o.h3,{id:"pulling-specific-containers",children:"Pulling Specific Containers"}),(0,i.jsx)(o.p,{children:'Open the \u201cdocker-compose.yml\u201d file. Edit the version of the DeepHub\xae from \u201clatest\u201d to the desired version. For example, it can be modified from "latest" to \u201c2.0.0\u201d.\nSimilarly, the version of DeepHub\xae UI can be adapted accordingly.'}),(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"docker-compose.yml file",src:n(1650).Z+"",width:"1762",height:"1175"})}),(0,i.jsx)("br",{}),(0,i.jsx)(o.p,{children:"Now, the specified version is pulled when executing the following command:"}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"docker compose pull\n"})}),(0,i.jsxs)(o.p,{children:["To start the pulled version, use the typical command described above in ",(0,i.jsx)(o.a,{href:"#start-a-deephub",children:"Start a DeepHub\xae"}),"."]})]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(o.h2,{id:"deephub-ui-configuration",children:"DeepHub\xae UI Configuration"}),(0,i.jsx)(o.h3,{id:"adding-a-floorplan-image-to-the-map",children:"Adding a Floorplan Image to the Map"}),(0,i.jsx)(o.p,{children:"The DeepHub UI can be configured so that a floorplan image of a building or a site can be displayed. You may choose to display the image by itself, or overlayed on top of the basemap of the mapping service provider (ex. MapTiler)."}),(0,i.jsx)(o.p,{children:"To begin, you will need to determine the longitude and latitude coordinates of your floorplan images' corners."}),(0,i.jsx)(o.p,{children:"Once this is done, navigate to the '/hub-web/nginx/webapp' directory of your DeepHub bundle on your local filesystem. Create a new directory (ex. named 'floorplan-image') and add your floorplan image to this directory."}),(0,i.jsxs)(o.p,{children:["Next, download the Open Sans Semibold font by cloning ",(0,i.jsx)(o.a,{href:"https://github.com/openmaptiles/fonts",children:"this repository"})," to your local filesystem. Follow the steps in the README.md to install the required packages and generate the fonts. The fonts will be in the '_output' directory."]}),(0,i.jsx)(o.admonition,{type:"tip",children:(0,i.jsx)(o.p,{children:"Your machine will need Node.js installed to generate the fonts."})}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"user@fc:~/projects/fonts/_output$ ls\n'Metropolis Black'               'Metropolis Light'             'Metropolis Thin'         'Open Sans Extra Bold Italic'  'PT Sans Bold Italic'       'Roboto Black Italic'            'Roboto Condensed Regular'  'Roboto Thin Italic'\n'Metropolis Black Italic'        'Metropolis Light Italic'      'Metropolis Thin Italic'  'Open Sans Italic'             'PT Sans Caption Regular'   'Roboto Bold'                    'Roboto Italic'\n'Metropolis Bold'                'Metropolis Medium'            'Noto Sans Bold'          'Open Sans Light'              'PT Sans Caption Web Bold'  'Roboto Bold Italic'             'Roboto Light'\n'Metropolis Bold Italic'         'Metropolis Medium Italic'     'Noto Sans Italic'        'Open Sans Light Italic'       'PT Sans Italic'            'Roboto Condensed Bold'          'Roboto Light Italic'\n'Metropolis Extra Bold'          'Metropolis Regular'           'Noto Sans Regular'       'Open Sans Regular'            'PT Sans Narrow Bold'       'Roboto Condensed Bold Italic'   'Roboto Medium'\n'Metropolis Extra Bold Italic'   'Metropolis Regular Italic'    'Open Sans Bold'          'Open Sans Semibold'           'PT Sans Narrow Regular'    'Roboto Condensed Italic'        'Roboto Medium Italic'\n'Metropolis Extra Light'         'Metropolis Semi Bold'         'Open Sans Bold Italic'   'Open Sans Semibold Italic'    'PT Sans Regular'           'Roboto Condensed Light'         'Roboto Regular'\n'Metropolis Extra Light Italic'  'Metropolis Semi Bold Italic'  'Open Sans Extra Bold'    'PT Sans Bold'                 'Roboto Black'              'Roboto Condensed Light Italic'  'Roboto Thin'\n"})}),(0,i.jsx)(o.p,{children:"Within your newly-created 'floorplan-image' directory, create a new directory named 'fonts'. Copy the 'Open Sans Semibold' font from the repository you just cloned to this new 'fonts' directory."}),(0,i.jsx)(o.h3,{id:"displaying-a-floorplan-image-by-itself",children:"Displaying a Floorplan Image by Itself"}),(0,i.jsx)(o.p,{children:"Create a JSON file in your 'floorplan-image' directory that defines your map style. To display the floorplan image without the surrounding basemap, your file must be structured like the following:"}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-json",children:'{\n  "version": 8,\n  "id": "floorplan-style",\n  "name": "Floorplan Style",\n  "attribution": "Floorplan map",\n  "glyphs": "floorplan-image/fonts/{fontstack}/{range}.pbf",\n  "sources": {\n    "image": {\n      "type": "image",\n      "url": "floorplan-image/<YOUR FLOORPLAN IMAGE FILE>",\n      "coordinates": [\n        [-115.16786551712569, 36.11988219161837],\n        [-115.1654992, 36.119895],\n        [-115.1649202, 36.118001],\n        [-115.1684502, 36.118023]\n      ]\n    }\n  },\n  "layers": [\n    {\n      "id": "background",\n      "type": "background",\n      "paint": {\n        "background-color": "rgba(0,0,0,0)"\n      }\n    },\n    {\n      "id": "image-layer",\n      "type": "raster",\n      "source": "image",\n      "paint": {\n        "raster-fade-duration": 0\n      }\n    }\n  ]\n}\n'})}),(0,i.jsx)(o.admonition,{type:"info",children:(0,i.jsx)(o.p,{children:"You will need to change the coordinates in your JSON file to match the coordinates of your floorplan images' corners. The first coordinate corresponds to the top left corner of the image, the 2nd coordinate corresponds to the top right corner of the image, etc."})}),(0,i.jsx)(o.p,{children:"Finally, the 'deephub-ui' services within the docker-compose.yml file of your DeepHub instance need to be modified:"}),(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Set DEEPHUB_MAP_DEFAULT_STYLE=floorplan-image/YOUR MAP STYLE JSON FILE"}),"\n",(0,i.jsx)(o.li,{children:"Set DEEPHUB_MAP_ACCESS_TOKEN=offline"}),"\n",(0,i.jsx)(o.li,{children:'Ensure that the "./hub-web/nginx/webapp/" volume on your local filesystem is mounted to "/webapp" of the Docker container'}),"\n"]}),(0,i.jsx)(o.p,{children:"Start your DeepHub instance by invoking Docker Compose. When you open the DeepHub UI in your browser, you will need to modify the URL by including one pair of longitude and latitude coordinates. For example, to navigate to the location of the floorplan image in the example above, the following URL would be used:"}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"http://localhost:8081/deephub-admin-ui/map/system/live/(show//left:list)?lng=-115.16786551712569&lat=36.11988219161837&zoom=17\n"})}),(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Floorplan image in UI",src:n(38802).Z+"",width:"3837",height:"2005"})}),(0,i.jsx)(o.h3,{id:"displaying-a-floorplan-image-over-a-basemap",children:"Displaying a Floorplan Image over a Basemap"}),(0,i.jsx)(o.p,{children:"To display your floorplan image on top of a basemap from a mapping service provider, you will need to modify your JSON file above, or create a new one."}),(0,i.jsxs)(o.p,{children:["Combine the properties associated with your floorplan image with the map style JSON of the mapping service provider. By default, MapTiler is used as the mapping service provider with this map style: ",(0,i.jsx)(o.a,{href:"https://api.maptiler.com",children:"https://api.maptiler.com/maps/bright/style.json"}),"."]}),(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"You need a license from MapTiler to access and use the styles and the mapping service."})}),(0,i.jsxs)(o.p,{children:["In addition, you will need to ensure that the docker-compose.yml file of your DeepHub instance has the correct value for ",(0,i.jsx)(o.code,{children:"DEEPHUB_MAP_DEFAULT_STYLE"}),". This environment variable should point to the location of the updated map style JSON file on your local filesystem. For example:"]}),(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"DEEPHUB_MAP_DEFAULT_STYLE=floorplan-image/YOUR UPDATED MAP STYLE JSON FILE"}),"\n"]}),(0,i.jsx)(o.p,{children:"If you are using your own license for MapTiler or Mapbox, ensure you specify this with the following environment variable:"}),(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"DEEPHUB_MAP_ACCESS_TOKEN=YOUR ACCESS TOKEN"}),"\n"]}),(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Floorplan image in UI over basemap",src:n(94306).Z+"",width:"3832",height:"2005"})}),(0,i.jsx)(o.h3,{id:"multi-level-floorplans",children:"Multi-Level Floorplans"}),(0,i.jsx)(o.p,{children:"If the building or site has multiple floors, you will need to include a floorplan image for each individual floor."}),(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"Your DeepHub instance will need to have zones, fences, trackables, or location providers on each floor that needs to display a floorplan image."})}),(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"#adding-a-floorplan-image-to-the-map",children:"As described above"}),", you will first need to determine the longitude and latitude coordinates of the corners of each floorplan image and ensure each floorplan image is included in the 'floorplan-image' directory."]}),(0,i.jsx)(o.p,{children:'Modify your map style JSON by including "minlevel" and "maxlevel" as properties. By default, the map starts at floor 0.'}),(0,i.jsx)(o.p,{children:"For example, to display a two-floor building without the surrounding basemap, your map style JSON would be structured in the following way:"}),(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-json",children:'{\n  "version": 8,\n  "id": "floorplan-style",\n  "name": "Floorplan Style",\n  "attribution": "Floorplan map",\n  "glyphs": "floorplan-image/fonts/{fontstack}/{range}.pbf",\n  "sources": {\n    "floor0": {\n      "type": "image",\n      "url": "floorplan-image/<YOUR FLOORPLAN IMAGE FILE FOR FLOOR 0>",\n      "coordinates": [\n        [-115.16786551712569, 36.11988219161837],\n        [-115.1654992, 36.119895],\n        [-115.1649202, 36.118001],\n        [-115.1684502, 36.118023]\n      ]\n    },\n    "floor1": {\n      "type": "image",\n      "url": "floorplan-image/<YOUR FLOORPLAN IMAGE FILE FOR FLOOR 1>",\n      "coordinates": [\n        [-115.16786551712569, 36.11988219161837],\n        [-115.1654992, 36.119895],\n        [-115.1649202, 36.118001],\n        [-115.1684502, 36.118023]\n      ]\n    }\n  },\n  "layers": [\n    {\n      "id": "background",\n      "type": "background",\n      "paint": {\n        "background-color": "rgba(0,0,0,0)"\n      }\n    },\n    {\n      "id": "floor0-layer",\n      "type": "raster",\n      "source": "floor0",\n      "paint": {\n        "raster-fade-duration": 0\n      },\n      "minlevel": 0,\n      "maxlevel": 1\n    },\n    {\n      "id": "floor1-layer",\n      "type": "raster",\n      "source": "floor1",\n      "paint": {\n        "raster-fade-duration": 0\n      },\n      "minlevel": 1,\n      "maxlevel": 2\n    }\n  ]\n}\n'})}),(0,i.jsx)(o.admonition,{type:"info",children:(0,i.jsx)(o.p,{children:'The value of the "minlevel" property corresponds with the floor upon which the floorplan image is displayed in the DeepHub UI. The value of the "maxlevel" property is always the subsequent floor.'})})]})]})}function p(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},70387:(e,o,n)=>{n.d(o,{Z:()=>t});n(67294);var i=n(85893);function t(e){let{children:o}=e;return(0,i.jsx)("section",{className:"section markdown",children:o})}},54547:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/deephub-ui-03f4447adc906003404b1e821c9415b0.jpg"},1650:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/docker_yml_edit-a6520f3ab58f8bbfa9831142a322f8a9.png"},38802:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/floorplan_alone-5d9b89bf7ace2f6348eaf070ad5d2a5b.png"},94306:(e,o,n)=>{n.d(o,{Z:()=>i});const i=n.p+"assets/images/floorplan_basemap-bb809b2cf393b5414c8c36d584cb5e9e.png"},11151:(e,o,n)=>{n.d(o,{Z:()=>r,a:()=>a});var i=n(67294);const t={},s=i.createContext(t);function a(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);