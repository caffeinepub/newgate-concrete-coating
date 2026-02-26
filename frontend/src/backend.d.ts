import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CustomerReview {
    customerName: string;
    serviceType: string;
    feedback: string;
    timestamp: bigint;
    rating: number;
}
export interface QuoteRequest {
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getAllRequests(): Promise<Array<QuoteRequest>>;
    getAllReviews(): Promise<Array<CustomerReview>>;
    getCustomerReview(id: string): Promise<CustomerReview>;
    getQuoteRequest(id: string): Promise<QuoteRequest>;
    getReviewsByService(serviceType: string): Promise<Array<CustomerReview>>;
    searchQuoteRequestsByName(name: string): Promise<Array<QuoteRequest>>;
    submitCustomerReview(id: string, rating: number, customerName: string, serviceType: string, feedback: string): Promise<void>;
    submitQuoteRequest(id: string, name: string, email: string, message: string): Promise<void>;
}
