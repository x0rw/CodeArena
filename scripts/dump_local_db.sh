#!/bin/bash
DB_HOST="localhost"
DB_USER="admin"
DB_PASSWORD="admin"
DB_NAME="dev-codearena"
BACKUP_DIR="dev-bd/initdb"
BACKUP_FILE="$BACKUP_DIR/$DB_NAME-$(date +%F).sql"

mkdir -p "$BACKUP_DIR"
mysqldump -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" >"$BACKUP_FILE"

if [ $? -eq 0 ]; then
  echo "Database dump completed successfully!"
  echo "Backup file: $BACKUP_FILE"
else
  echo "Error: Database dump failed!"
fi
