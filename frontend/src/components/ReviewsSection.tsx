import { useState } from 'react';
import { useSubmitReview, useGetAllReviews } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Star, CheckCircle2, Loader2 } from 'lucide-react';

export default function ReviewsSection() {
  const [formData, setFormData] = useState({
    customerName: '',
    serviceType: '',
    rating: 0,
    feedback: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitReviewMutation = useSubmitReview();
  const { data: reviews, isLoading } = useGetAllReviews();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.customerName || !formData.serviceType || formData.rating === 0 || !formData.feedback) {
      return;
    }
    
    const id = `review-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    submitReviewMutation.mutate(
      {
        id,
        rating: formData.rating,
        customerName: formData.customerName,
        serviceType: formData.serviceType,
        feedback: formData.feedback,
      },
      {
        onSuccess: () => {
          setIsSubmitted(true);
          setFormData({
            customerName: '',
            serviceType: '',
            rating: 0,
            feedback: '',
          });
          
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
      }
    );
  };

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const renderStars = (rating: number, interactive: boolean = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && onRate && onRate(star)}
            disabled={!interactive}
            className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`}
          >
            <Star
              size={interactive ? 28 : 20}
              className={star <= rating ? 'fill-copper text-copper' : 'text-concrete-medium'}
            />
          </button>
        ))}
      </div>
    );
  };

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const sortedReviews = reviews ? [...reviews].sort((a, b) => Number(b.timestamp - a.timestamp)) : [];

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Customer Reviews
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our satisfied customers have to say about their experience with Newgate Coatings
            </p>
          </div>

          {/* Review Submission Form */}
          <div className="bg-concrete-light rounded-lg p-8 shadow-lg border border-border mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6">Write a Review</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-copper" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">Thank You!</h4>
                <p className="text-muted-foreground">
                  Your review has been submitted and will be visible to other customers.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="customerName">Your Name *</Label>
                  <Input
                    id="customerName"
                    type="text"
                    value={formData.customerName}
                    onChange={(e) => handleChange('customerName', e.target.value)}
                    placeholder="John Doe"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => handleChange('serviceType', value)}
                    required
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select the service you received" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Patio Polyaspartic Coating">Patio Polyaspartic Coating</SelectItem>
                      <SelectItem value="Driveway Polyaspartic Coating">Driveway Polyaspartic Coating</SelectItem>
                      <SelectItem value="Pool Deck Polyaspartic Coating">Pool Deck Polyaspartic Coating</SelectItem>
                      <SelectItem value="Garage Floor Polyaspartic Coating">Garage Floor Polyaspartic Coating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Rating *</Label>
                  <div className="mt-2">
                    {renderStars(formData.rating, true, (rating) => handleChange('rating', rating))}
                  </div>
                  {formData.rating === 0 && (
                    <p className="text-sm text-muted-foreground mt-1">Please select a rating</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="feedback">Your Experience *</Label>
                  <Textarea
                    id="feedback"
                    value={formData.feedback}
                    onChange={(e) => handleChange('feedback', e.target.value)}
                    placeholder="Tell us about your experience with our service..."
                    required
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-copper hover:bg-copper-dark text-white"
                  disabled={submitReviewMutation.isPending}
                >
                  {submitReviewMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Review'
                  )}
                </Button>

                {submitReviewMutation.isError && (
                  <p className="text-destructive text-sm text-center">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Reviews Display */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">What Our Customers Say</h3>
            
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-copper" />
              </div>
            ) : sortedReviews.length === 0 ? (
              <div className="text-center py-12 bg-concrete-light rounded-lg border border-border">
                <p className="text-muted-foreground text-lg">
                  No reviews yet. Be the first to share your experience!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedReviews.map((review, index) => (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-bold text-foreground text-lg">{review.customerName}</h4>
                          <p className="text-sm text-muted-foreground">{review.serviceType}</p>
                        </div>
                        {renderStars(review.rating)}
                      </div>
                      
                      <p className="text-foreground mb-4 leading-relaxed">{review.feedback}</p>
                      
                      <p className="text-xs text-muted-foreground">
                        {formatDate(review.timestamp)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
