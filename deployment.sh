docker build -t micro1 micro-service-1/
docker build -t micro2 micro-service-2/
kubectl apply -f micro-service-1/service-1-deployment.yaml
kubectl apply -f micro-service-1/service-1.yaml
kubectl apply -f micro-service-2/service-2-deployment.yaml
kubectl apply -f micro-service-2/service-2.yaml
minikube service service-1 --url