This is a CouchDB App that implements a GPII Solutions Registry. It currently 
keeps each solution in a separate document and can be queried by operating
system.

It is using the [Kanso](http://kan.so) system for factoring the code and pushing it to 
CouchDB.

Once you have Kanso (which depends on CouchDB and node.js) installed, you
can install the registry into your local CouchDB with the following. You
can change gpii-sol-registry to any database name you wish to use.

* kanso install # installs our deps
* kanso upload solutions.reporter.payload.example.with.ids.json http://localhost:5984/gpii-sol-registry # primes our database with our existing demo solution data
* kanso push http://localhost:5984/gpii-sol-registry # pushes all design document files up

You can use the following to view information from the database:

View map function for entries keyed by operating system, with just linux results:
http://localhost:5984/gpii-sol-registry/_design/gpii-solutions/_view/os?key="linux"

View all the solutions in the json payload GPII expects:
http://localhost:5984/gpii-sol-registry/_design/gpii-solutions/_list/gpiiPayload/os

View all the solutions in the json payload GPII expects only for linux:
http://localhost:5984/gpii-sol-registry/_design/gpii-solutions/_list/gpiiPayload/os?key="linux"

Additionally, we have rewrite rule to match the GPII Solutions Registry API:

To view a single solution:
http://localhost:5984/gpii-sol-registry/_design/gpii-solutions/_rewrite/solutions/fluid.uiOptions.linux

To view all solutions for linux:
http://localhost:5984/gpii-sol-registry/_design/gpii-solutions/_rewrite/solutions?os=linux
