#!/bin/bash
curl -X DELETE http://localhost:5984/gpiisolregistry
kanso upload data/solutions.reporter.payload.example.with.ids.json http://localhost:5984/gpiisolregistry
kanso push http://localhost:5984/gpiisolregistry