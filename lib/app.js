var db = require('db');

/* Take a Couch Solutions doc and turn it in to a GPII Payload
 * by swapping _id to id and removing revision.
 * TODO: For some reason I can't call this from inside the view/list/etc
 * functions right now.
 */
exports.createGpiiPayload = function(doc) {

    var togo = {
        "name":doc.name,
        "id":doc._id,
        "contexts":doc.contexts,
        "settingsHandlers":doc.settingsHandlers,
        "lifecycleManager":doc.lifecycleManager
    };
    return togo;    
};

exports.views = {
    os: {
        map: function(doc) {
            var os, solId;
            if (doc.contexts && doc.contexts.OS) {    
                for (var i = 0; i < doc.contexts.OS.length; i++) {
                    os = doc.contexts.OS[i];
                    var togo = {
                        "name":doc.name,
                        "id":doc._id,
                        "contexts":doc.contexts,
                        "settingsHandlers":doc.settingsHandlers,
                        "lifecycleManager":doc.lifecycleManager
                    };
                    emit(os.id,togo);
                }
            }
        }
    },
    solutionId: {
        map: function(doc) {
            if (doc.id) {
                var togo = {
                    "name":doc.name,
                    "id":doc._id,
                    "contexts":doc.contexts,
                    "settingsHandlers":doc.settingsHandlers,
                    "lifecycleManager":doc.lifecycleManager
                };
                emit(doc.id,togo);
            }
        }
    }
};

exports.lists = {
    gpiiPayload: function(head,req) { 
        var togo = []; 
        var row; 
        while(row = getRow()) { 
            togo.push(row.value); 
        } 
        send(JSON.stringify(togo)); 
    }
};

exports.updates = {
    updateSolution: function(doc, req) {
        doc.id = doc.id + "I";
        var newdoc = JSON.parse(req.body.substring(5));
        delete newdoc.id;
        newdoc._id = doc._id;
        newdoc._rev = doc._rev;
        return [newdoc,JSON.stringify(newdoc)];
    }
};

/**
 * Our API looks like:
 * 
 * http://server/solutions/{id}
 * http://server/solutions?os={linux}
 */
exports.rewrites = [
    {from: "/solutions", to: '_list/gpiiPayload/os', query: {'key':':os'}},
    {method: "GET", from: "/solutions/:id", to: '_list/gpiiPayload/solutionId', query: {'key':':id' }},
    {method: "POST", from: "/solutions/:id", to: '_update/updateSolution/:id' }
];