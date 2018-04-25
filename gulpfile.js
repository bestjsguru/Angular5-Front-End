var gulp = require('gulp');
var awspublish = require('gulp-awspublish');

gulp.task('publish', function() {

  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = awspublish.create({
    region: 'eu-west-1',
	params: {
		Bucket: 'for-frontend'
	},
	credentials: {
		accessKeyId: 'Everest',
		secretAccessKey: 'RHDoRZXBBuVt7oVD$guEurq>>WN=9,g'
	}	
  });

  // define custom headers
  var headers = {
    'Cache-Control': 'no-cache'
  };

  return gulp.src('./dist/**/*')
     // gzip, Set Content-Encoding headers and add .gz extension
    //.pipe(awspublish.gzip({ ext: '.gz' }))

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

     // print upload updates to console
    .pipe(awspublish.reporter());
});

