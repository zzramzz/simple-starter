// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Your Google Cloud Platform project ID
const projectId = 'YOUR_PROJECT_ID';

// Creates a client
const storage = new Storage({
  projectId: projectId,
});
storage
    .getBuckets()
    .then((results)=>{
        const buckets = results[0];
        console.log('Buckets:');
        buckets.forEach((bucket)=>{
            console.log(bucket.name);
        })
    })
    .catch((err)=>{
        console.log('ERROR:', err);
    })


// The name for the new bucket
const bucketName = 'my-new-bucket';

// Creates the new bucket
async function createBucket() {
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}

try {
  createBucket();
} catch (err) {
  console.error('ERROR:', err);
}