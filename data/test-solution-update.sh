#!/bin/bash

curl -d POST http://localhost:5984/gpiisolregistry/_design/gpii-solutions/_update/updateSolution/fluid.uiOptions.windows -d @test-solution-update.json