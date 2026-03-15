import { ApiClient } from "./apiClient";

class CommentsApi {

  private api = new ApiClient("http://localhost:3000");

  getComments(masterId: number) {
    return this.api.get(`/comments/${masterId}`);
  }

  createComment(data: {
    masterId: number
    user: string
    text: string
  }) {
    return this.api.post("/comments", data);
  }

}

export const commentsApi = new CommentsApi();