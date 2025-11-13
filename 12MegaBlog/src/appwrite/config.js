import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query} from "appwrite";

export class Service
{
    client=new Client;
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases= new Databases(this.client);
        this.bucket= new Storage(this.client);
    }

    //Create the document
    async createPost({title,slug,content,featuredImage, status,userId})
    {
        try
        {
            return await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId
                    }
                )
        }
        catch(error)
        {
            console.log("Appwrite service :: createPost :: error",error)
            throw error;
        }
    }

    //Update the document
    async updatePost(slug,{title,content,featuredImage, status})
    {
        try
        {
            return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status
                    }
                )
        }
        catch(error)
        {
              console.log("Appwrite service :: updatePost :: error",error)
            throw error;
        }
    }

    //Delete the document
    async deletePost(slug)
    {
        try
        {
             await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                   
                )
            return true;
        }
        catch(error)
        {
            console.log("Appwrite service :: deletePost :: error",error)
            return false;
        }
    }

    //Get the single document
    async getDocument(slug)
    {
        try
        {
             await this.databases.getDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                   
                )
            return true;
        }
        catch(error)
        {
            console.log("Appwrite service :: getDocument :: error",error)
            return false;
        }
    }
    
    //Retreive all the post based on the active state
    //Note need the index in the appwrite to use the query
    async getPosts(queries=[Query.equal("status","active")])
    {
        try
        {
            return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    queries,
                )
        }
        catch(error)
        {
            console.log("Appwrite service :: getPosts :: error",error)
            throw error;
        }
    }

    //file upload service
}

const service = new Service();

export default service;
