var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

var databaseName = 'coactive';
var collectionName = 'archive';

var database;

exports.connect = function(callback) {

	if (database == undefined) {
		mongoClient.connect('mongodb://127.0.0.1:27017/' + databaseName, function(err, db) {
			database = db;
			callback();
		});
	} else {
		callback();
	}

};

exports.create = function(document, fn) {

	database.collection(collectionName).insert(document, function(err, results) {
		fn(err, results);
	});

};

exports.readByDocumentId = function(id, fn) {

	database.collection(collectionName).find({
		'document_id' : id
	}, function(err, results) {
		
		results.toArray(function(err, results){
			fn(err, results);
		});
		
	});

};


exports.readByIdAndVersion = function(document_id, version_id, fn){
	
	database.collection(collectionName).findOne({
		'document_id' : document_id,
		'version_id' : parseInt(version_id)
	}, function(err, results) {
		fn(err, results);
	});
	
};
