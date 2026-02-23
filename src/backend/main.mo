import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type QuoteRequest = {
    name : Text;
    email : Text;
    message : Text;
  };

  module QuoteRequest {
    public func compare(a : QuoteRequest, b : QuoteRequest) : Order.Order {
      Text.compare(a.email, b.email);
    };
  };

  let quoteRequests = Map.empty<Text, QuoteRequest>();

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
};
