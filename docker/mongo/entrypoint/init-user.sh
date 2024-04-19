if [ "$MONGO_USER" ] && [ "$MONGO_PASS" ]; then
  "${mongo[@]}" "$MONGO_DB" <<-EOJS
  db.createUser({
     user: $(_js_escape "$MONGO_USER"),
     pwd: $(_js_escape "$MONGO_PASS"),
     roles: [
        { role: "readWrite", db: "$MONGO_DB" }
     ]
     })
EOJS
fi

echo ======================================================
echo created $MONGO_USER in database $MONGO_PASS
echo ======================================================