exports.views = {
    os: {
        map: function(doc) {
            var os, solId;
            if (doc.contexts && doc.contexts.OS) {    
                for (var i = 0; i < doc.contexts.OS.length; i++) {
                    os = doc.contexts.OS[i];
                    emit(os.id,doc);
                }
            }
        }
    },
    solutionId: {
        map: function(doc) {
            if (doc.id) {
                emit(doc.id,doc);
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

/**
 * Our API looks like:
 * 
 * http://server/solutions/{id}
 * http://server/solutions?os={linux}
 * http://server/solutions?os={linux}&version={gt2.94}
 */
exports.rewrites = [
    {from: "/solutions", to: '_list/gpiiPayload/os', query: {'key':':os'}},
    {from: "/solutions/:id", to: '_list/gpiiPayload/solutionId', query: {'key':':id' }}
];