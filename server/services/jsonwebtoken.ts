import jwt, { JwtPayload } from "jsonwebtoken";
import appconfig from "../config/appconfig";

class JWTClass {
    
    secret: string;
    expiresIn: string;
    refreshTokenSecret: string;
    refreshTokenExpiresIn: string;
    audience: string | string[];

    constructor(secret: string, expiresIn: string, refreshTokenSecret: string, 
            refreshTokenExpiresIn: string, audience: string | string[]) {
        this.secret = secret;
        this.expiresIn = expiresIn;
        this.refreshTokenSecret = refreshTokenSecret;
        this.refreshTokenExpiresIn = refreshTokenExpiresIn;
        this.audience = audience;
    }

    async sign(data: object, time: string | undefined, audience: string | string[] | undefined): Promise<string | undefined> {
            return await jwt.sign(data, this.secret, {
                    algorithm: "HS256",
                    expiresIn: time || this.expiresIn,
                    audience: audience || this.audience,
                    issuer: "movie.app"
                })
    }

    async verify(token: string): Promise<string | jwt.JwtPayload | undefined> {
            return await jwt.verify(token, this.secret)
    };
}

export default new JWTClass(
        appconfig.auth.jwt_secret, 
        appconfig.auth.jwt_expiresin,
        appconfig.auth.refresh_token_secret,
        appconfig.auth.refresh_token_expiresin,
        appconfig.auth.audience
)