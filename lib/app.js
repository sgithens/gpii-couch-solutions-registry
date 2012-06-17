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

exports.rewrites = [
    {from: "/solutions", to: '_list/gpiiPayload/os' },
    {from: "/solutions/:os", to: '_list/gpiiPayload/os', query: {'key':':os'}}
];