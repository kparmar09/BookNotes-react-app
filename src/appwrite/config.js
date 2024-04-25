import { Client, Databases, Storage } from "appwrite";
import conf from "../conf/conf";

export class DataService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // Database Services :- (create note, update note, delete note, get note, get all notes)

  async createNote({
    Book_Id,
    Book_Name,
    Author_Name,
    summary,
    characterAnalysis,
    personalReflections,
    recommendation,
    User_Id,
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          Book_Id,
          Book_Name,
          Author_Name,
          summary,
          characterAnalysis,
          personalReflections,
          recommendation,
          User_Id,
        }
      );
    } catch (error) {
      console.log("DataService :: createNote :: error :: ", error);
    }
  }

  async updateNote(
    document_Id,
    {
      Book_Id,
      Book_Name,
      Author_Name,
      summary,
      characterAnalysis,
      personalReflections,
      recommendation,
    }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        document_Id,
        {
          Book_Id,
          Book_Name,
          Author_Name,
          summary,
          characterAnalysis,
          personalReflections,
          recommendation,
        }
      );
    } catch (error) {
      console.log("DataService :: updateNote :: error :: ", error);
    }
  }

  async deleteNote(documentId) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        documentId
      );
      return true;
    } catch (error) {
      console.log("DataService :: deleteNote :: error :: ", error);
      return false;
    }
  }

  async getNote(documentId) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        documentId
      );
    } catch (error) {
      console.log("DataService :: getNote :: error :: ", error);
    }
  }

  async getNotes() {
    try {
      return this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId
      );
    } catch (error) {
      console.log("DataService :: getNotes :: error :: ", error);
    }
  }

  // Bucket Services :- (upload file, getfilepreview)

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("DataService :: uploadFile :: error :: ", error);
    }
  }
  async getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("DataService :: getFilePreview :: error :: ", error);
    }
  }
}

const dataService = new DataService();
export default dataService;
