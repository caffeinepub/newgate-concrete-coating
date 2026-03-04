import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CustomerReview, QuoteRequest } from "../backend";
import { useActor } from "./useActor";

export function useGetAllRequests() {
  const { actor, isFetching } = useActor();

  return useQuery<QuoteRequest[]>({
    queryKey: ["quoteRequests"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllRequests();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitQuoteRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      name,
      email,
      message,
    }: {
      id: string;
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      await actor.submitQuoteRequest(id, name, email, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quoteRequests"] });
    },
  });
}

export function useGetAllReviews() {
  const { actor, isFetching } = useActor();

  return useQuery<CustomerReview[]>({
    queryKey: ["customerReviews"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitReview() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      rating,
      customerName,
      serviceType,
      feedback,
    }: {
      id: string;
      rating: number;
      customerName: string;
      serviceType: string;
      feedback: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      await actor.submitCustomerReview(
        id,
        rating,
        customerName,
        serviceType,
        feedback,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customerReviews"] });
    },
  });
}
