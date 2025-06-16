import api from "@/config/api";
import type { Idea } from "../types/idea";

export const getIdeas = async (): Promise<Idea[]> => {
  const response = await api.get<Idea[]>("/ideas");
  return response.data;
};

export const getIdea = async (id: Idea["id"]): Promise<Idea> => {
  const response = await api.get<Idea>(`/ideas/${id}`);
  return response.data;
};

export const createIdea = async (title: Idea["title"]): Promise<Idea> => {
  const response = await api.post<Idea>(
    "/ideas",
    { title },
    {
      headers: {
        Authorization: "Bearer 12345",
      },
    }
  );
  return response.data;
};

export const voteIdea = async (id: Idea["id"]): Promise<Idea> => {
  const response = await api.post<Idea>(`/ideas/${id}/vote`);
  return response.data;
};
