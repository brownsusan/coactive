module.exports.controller = function(app) {
	app.get('/api/read_versions_by_document_id', function(req, res) {

		var versionModel = require('../models/version');
		versionModel.connect(function() {

			versionModel.readByDocumentId(req.query.document_id, function(err, results) {

				res.json(results);

			});

		});
	});

};
