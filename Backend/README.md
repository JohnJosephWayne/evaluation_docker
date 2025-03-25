Utiliser la commande suivante pour lancer l'application :

docker-compose up -d --build
docker run -p 80:80 angular-app

docker-compose logs -f static (logs nginx)

docker-compose logs -f app (logs app)
👉 http://localhost:3000/logs
dépendances :
node 22
my sql