import type { MasterComment } from "../types/comment";
import { ApiClient } from "./apiClient";


class CommentsApi {
  private api = new ApiClient("http://localhost:3000");

  // GET vraća niz MasterComment
  getComments(masterId: number): Promise<MasterComment[]> {
    return this.api.get(`/comments/${masterId}`) as Promise<MasterComment[]>;
  }

  // POST vraća jedan MasterComment
  createComment(data: {
    masterId: number;
    user: string;
    text: string;
  }): Promise<MasterComment> {
    return this.api.post("/comments", data) as Promise<MasterComment>;
  }
}

export const commentsApi = new CommentsApi();