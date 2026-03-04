import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Time "mo:core/Time";

actor {
  type QuoteRequest = {
    name : Text;
    email : Text;
    message : Text;
  };

  type CustomerReview = {
    rating : Nat8;
    customerName : Text;
    serviceType : Text;
    feedback : Text;
    timestamp : Int;
  };

  module QuoteRequest {
    public func compare(a : QuoteRequest, b : QuoteRequest) : Order.Order {
      Text.compare(a.email, b.email);
    };
  };

  let quoteRequests = Map.empty<Text, QuoteRequest>();
  let customerReviews = Map.empty<Text, CustomerReview>();

  public shared ({ caller }) func submitQuoteRequest(id : Text, name : Text, email : Text, message : Text) : async () {
    let newRequest : QuoteRequest = {
      name;
      email;
      message;
    };

    quoteRequests.add(id, newRequest);
  };

  public query ({ caller }) func getQuoteRequest(id : Text) : async QuoteRequest {
    switch (quoteRequests.get(id)) {
      case (null) { Runtime.trap("Request not found") };
      case (?request) { request };
    };
  };

  public query ({ caller }) func searchQuoteRequestsByName(name : Text) : async [QuoteRequest] {
    quoteRequests.values().toArray().filter(
      func(request) { request.name.contains(#text name) }
    );
  };

  public query ({ caller }) func getAllRequests() : async [QuoteRequest] {
    quoteRequests.values().toArray().sort();
  };

  // Customer Review logic
  public shared ({ caller }) func submitCustomerReview(id : Text, rating : Nat8, customerName : Text, serviceType : Text, feedback : Text) : async () {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5 inclusive");
    };

    let newReview : CustomerReview = {
      rating;
      customerName;
      serviceType;
      feedback;
      timestamp = Time.now();
    };

    customerReviews.add(id, newReview);
  };

  public query ({ caller }) func getCustomerReview(id : Text) : async CustomerReview {
    switch (customerReviews.get(id)) {
      case (null) { Runtime.trap("Review not found") };
      case (?review) { review };
    };
  };

  public query ({ caller }) func getReviewsByService(serviceType : Text) : async [CustomerReview] {
    customerReviews.values().toArray().filter(
      func(review) { review.serviceType.contains(#text serviceType) }
    );
  };

  public query ({ caller }) func getAllReviews() : async [CustomerReview] {
    customerReviews.values().toArray();
  };
};
