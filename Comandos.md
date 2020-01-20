# Sequelize

**Crear archivo de configuración**
*Se configuran los paths para las migraciones, seeders, modelos y el ps-config.json*
```bash
touch .sequelizerc
```

**Iniciamos sequelize**
```bash
sequelize init
```
*Configuramos el ps-config-json*

**Creamos la base de datos**
```bash
sequelize db:create --env production #--env se le pasa la variable a usar
```

**Crear modelos**
```bash
sequelize model:generate --name User --attributes name:string,email:string,password:string
```

**Migraciones**
```bash
sequelize db:migrate --env production
```

# Librerias
```bash
sudo npm i hapi -S
sudo npm i nodemon standard -D
sudo npm i dotenv -S
sudo npm i -S pg pg-hstore sequelize
sudo npm i -S @hapi/joi@15.1.1 @hapi/boom uuid
sudo npm i -S hapi-cors
sudo npm i -D sequelize-cli #-g para instalar globalmente
sudo npm i -S jsonwebtoken bcrypt
sudo npm i jest -D
sudo npm i @hapi/inert@5.2.2 @hapi/vision@5.5.4
sudo npm i hapi-swagger@10.2.0
sudo npm i blipp -S
```

## Docker
```bash
docker run -d --name postgres -e POSTGRES_PASSWORD=postgres -p 5434:5432 postgres

docker run -it --link postgres:postgres postgres psql -h postgres -U postgres #-it hace referencia a una termina interactiva
#Ejecuta psql conectando el primer contenedor

docker run -d  --link postgres:db -p 8080:8080 adminer
```