// To create databases

module.exports = function(db) {
    db.serialize(()=> {
        db.run(`CREATE TABLE IF NOT EXISTS "account" (
            "user_id"	INTEGER PRIMARY KEY AUTOINCREMENT,
            "user_name"	TEXT,
            "real_name" TEXT,
            "salt"	TEXT,
            "hashed_password"	TEXT
        );`)

        db.run(`CREATE TABLE IF NOT EXISTS "sessions" (
            "session_id"	INTEGER PRIMARY KEY AUTOINCREMENT,
            "user_id"	INTEGER,
            "current_session_key"	NUMERIC,
            "current_session_last_update_timestamp"		NUMERIC
        );`)

        db.run(`CREATE TABLE IF NOT EXISTS "user_pictures" (
            "user_id" 	INTEGER PRIMARY KEY,
            "profile_picture"	TEXT
        );`)

        db.run(`CREATE TABLE IF NOT EXISTS "permissions" (
            "user_id"	INTEGER PRIMARY KEY,
            "can_download"	INTEGER,
            "can_rename"	INTEGER,
            "can_delete"	INTEGER,
            "folders_unallowed"		TEXT
        );`)

        db.run(`CREATE TABLE IF NOT EXISTS "login_details" (
            "user_id"	INTEGER PRIMARY KEY,
            "no_hours_content"	INTEGER,
            "no_logins"		INTEGER
        );`)

        db.run(`CREATE TABLE IF NOT EXISTS "whats_streaming" (
            "user_id"	INTEGER PRIMARY KEY,
            "file_name"		TEXT,
            "absolute_path"		TEXT,
            "percent_watched"	INTEGER
        );`)

        db.run(`CREATE TABLE IF NOT EXISTS "ip_port_details" (
            "ip"	TEXT,
            "port"	TEXT
        );`)
    })
}