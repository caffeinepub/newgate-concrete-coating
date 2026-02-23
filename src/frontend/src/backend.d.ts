import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface QuoteRequest {
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    getAllRequests(): Promise<Array<QuoteRequest>>;
    getQuoteRequest(id: string): Promise<QuoteRequest>;
    searchQuoteRequestsByName(name: string): Promise<Array<QuoteRequest>>;
    submitQuoteRequest(id: string, name: string, email: string, message: string): Promise<void>;
}
