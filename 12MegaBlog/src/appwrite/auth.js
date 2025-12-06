import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
			console.log("Appwrite service :: createAccount :: error",error)														   
            throw error;
        }
    }

    async login({email, password}) {
													
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            console.log("Session:", session);
            return session
        } catch (error) {
            console.log("Appwrite serive :: login :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(sessionId) {

        try {
            if (sessionId) {
                // delete specific session by id (works even if cookie isn't sent)
                await this.account.deleteSession(sessionId);
            } else {
                // fallback: delete all sessions for current user (requires cookie)
                await this.account.deleteSessions();
            }
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
            // Session may already be deleted or CORS issue - this is ok
        }
    }
}

const authService = new AuthService();

export default authService