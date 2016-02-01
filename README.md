# Challenge

# Solution

## Getting Started

To get you started you can simply clone the address-book-angular repo and install the dependencies:

## Install Dependencies

You will need node.js installed to run this sample app, I recommend [Node Version Manager](https://github.com/creationix/nvm). Check out the repo for installation directions: [nvm github](https://github.com/creationix/nvm)

* Install the server side node libraries we depend upon via ```npm```, the [node package manager](https://www.npmjs.org/).

I have preconfigured the app using ```npm``` to automatically run ```bower``` so you can simply do:

```
  npm install
```

This creates a ```node_modules``` folder which contains the npm packages installed in the previous step

## Run the Application

I have preconfigured the project with a simple development web server. The simplest way to start this server is:

```
  npm start
```

Now pull up your application at ```http://localhost:8000/```.

## Screenshots

I used Bootstrap Tweeter as a design framework. You should see something like this:

Index page

![Screentshot](doc/index.png =250x)

Edit contact page (with error validation)

![Screentshot](doc/form.png =250x)

About page

![Screentshot](doc/about.png =250x)

## Miscaleus

### jQuery

I don't use jQuery. It is here because Bootstrap needs it.

### Vendors

All external stuff is stored in vendor folder. All application components are locally available.

### E-mail validation

I used the following regular expression for e-mail validation.

```
   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
```

This is not perfect but I don't want to make this example too complicated.

### Main Menu

Please note that top-right menu stays highlighting accordingly.

### Mobile first

Mobile first so because of Boostrap capabitlity it is responsive design.

![Screentshot](doc/responsive.png =250x)
