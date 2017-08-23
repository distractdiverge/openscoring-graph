# OpenScoring Graph
This project is an attempt to create a web based ui that can tie together
multiple pmml files executed by the openscoring rest service

[![Build Status](https://travis-ci.org/alexlapinski/openscoring-graph.svg?branch=master)](https://travis-ci.org/alexlapinski/openscoring-graph)
[![Dependencies](https://david-dm.org/alexlapinski/openscoring-graph.svg)](https://david-dm.org/alexlapinski/openscoring-graph)
[![Issue Count](https://codeclimate.com/github/alexlapinski/openscoring-graph/badges/issue_count.svg)](https://codeclimate.com/github/alexlapinski/openscoring-graph)

It assumes a running instance of [openscoring](https://github.com/openscoring/openscoring) running locally
on the default port 8080

## Getting Started
 * Clone this repository
 * Install Dependencies
    * ```npm install```
    * or ```yarn```
 * Execute start up script
    * ```npm run start```

## Openscoring Server
The openscoring server has been setup with docker-compose
to start the server, run ```docker-compose up```

## Current Progress
The state of this project is still early in research phase. This project
does not yet hook into openscoring. Only early UI development is in progress.


## Models
There are a few example models contained within this repo, they have been
borrowed from the [data mining group](http://dmg.org/).
[PMML Examples](http://dmg.org/pmml/pmml_examples/index.html)
