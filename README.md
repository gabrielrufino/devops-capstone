# DevOps Capstone

This is the final project for the course **Cloud DevOps Engineer** from Udacity.

### Application

The application is a simple API that responds to a `GET` request on the port `3000` with the following response:

```json
{"message":"Hello, capstone!"}
```

### Pipeline phases

* Code lint
* Unit/e2e Tests
* Scan dependencies
* Build and publish Dockerfile
* Create k8s cluster (Only in the main branch)
* Create blue service (Only in the main branch))
* Create blue deployment (Only in the main branch)
* Smoke test of blue deployment (Only in the main branch)
* Promote blue to production (Only in the main branch)