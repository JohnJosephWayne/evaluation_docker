Utiliser la commande suivante pour lancer l'application :

docker-compose up -d --build
docker run -p 80:80 angular-app

docker-compose logs -f static (logs nginx)
docker-compose exec app ls -lah /app/logs (vérifier l'existence du fichier de log)
curl -i http://localhost:3000/ (générer des logs)
curl -i http://localhost:3000/logs (Récupérer les logs)
docker-compose logs -f app (logs app)
👉 http://localhost:3000/logs
dépendances :
node 22
my sql