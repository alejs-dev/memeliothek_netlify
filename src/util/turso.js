import { createClient } from "@libsql/client";

export function tursoClient(request) {
    const url = request.env.get("TURSO_DB_URL");

    if (!url) {
        throw error("TURSO_DB_URL must be defined!");
    }

    const authToken = request.env.get("TURSO_DB_AUTH_TOKEN");

    if (!authToken) {
        throw error("TURSO_DB_AUTH_TOKEN must be defined!");
    }

    return createClient({
        url, 
        authToken
    });
}