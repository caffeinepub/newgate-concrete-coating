import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

export default function ContactSection() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitMutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not initialized");

      const id = `quote-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const combinedMessage = `Phone: ${formData.phone}\nService Type: ${formData.serviceType}\n\nMessage:\n${formData.message}`;

      await actor.submitQuoteRequest(
        id,
        formData.name,
        formData.email,
        combinedMessage,
      );
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
      });
      queryClient.invalidateQueries({ queryKey: ["quoteRequests"] });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.serviceType ||
      !formData.message
    ) {
      return;
    }

    submitMutation.mutate();
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: "oklch(0.96 0.005 240)" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your concrete surfaces? Contact us today for a
              free consultation and quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-copper" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <div className="text-muted-foreground">
                        +1 (813) 608-2563
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-copper" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">
                        Newgatecoatings@icloud.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-copper/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-copper" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Service Areas
                      </div>
                      <div className="text-muted-foreground space-y-1">
                        <div>Orlando, FL</div>
                        <div>Tampa, FL</div>
                        <div>Plant City, FL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-copper/10 rounded-lg p-6 border-l-4 border-copper">
                <h4 className="font-bold text-foreground mb-2">
                  Why Request a Quote?
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-copper flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>Free on-site consultation and assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-copper flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>Detailed project timeline and pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-copper flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>Expert recommendations for your specific needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-copper flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span>No obligation—just honest advice</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="text-copper" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    We've received your quote request and will contact you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Doe"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@example.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+1 (813) 608-2563"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) =>
                        handleChange("serviceType", value)
                      }
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="patio">
                          Patio Polyaspartic Coating
                        </SelectItem>
                        <SelectItem value="driveway">
                          Driveway Polyaspartic Coating
                        </SelectItem>
                        <SelectItem value="pool">
                          Pool Deck Polyaspartic Coating
                        </SelectItem>
                        <SelectItem value="garage">
                          Garage Floor Polyaspartic Coating
                        </SelectItem>
                        <SelectItem value="other">
                          Other / Multiple Services
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your project, including approximate square footage and any specific requirements..."
                      required
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-copper hover:bg-copper-dark text-white"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending
                      ? "Submitting..."
                      : "Request Free Quote"}
                  </Button>

                  {submitMutation.isError && (
                    <p className="text-destructive text-sm text-center">
                      Something went wrong. Please try again or call us
                      directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
