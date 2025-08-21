import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do classes work?",
      answer: "Live one-to-one sessions via Zoom with certified Tajweed tutors. Each session is personalized to your learning pace and goals. You'll receive dedicated attention and immediate feedback to ensure proper pronunciation and understanding."
    },
    {
      question: "What's the duration of each session?",
      answer: "Classes range from 25–40 minutes depending on your chosen program. Basic Quran Reading is 25 minutes, Tajweed Mastery is 30 minutes, Understanding Quran is 35 minutes, and Hifz Program sessions are 30-40 minutes."
    },
    {
      question: "Do you teach both boys and girls?",
      answer: "Yes, we have male and female tutors available to teach students of all ages. We ensure appropriate instructor matching based on student preferences and cultural considerations."
    },
    {
      question: "How does the free trial work?",
      answer: "Our 3-day free trial gives you complete access to your chosen program with no commitment required. You'll experience our teaching methodology, meet your tutor, and see if our approach suits your learning style before making any decisions."
    },
    {
      question: "What about different timezones?",
      answer: "We accommodate students worldwide with flexible scheduling across all major timezones. Our tutors are available at various hours to match your convenience, whether you're in Asia, Europe, Americas, or anywhere else."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-emerald-900">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-gold-400 mx-auto rounded-full"></div>
          <p className="body-text text-lg text-ink-600 max-w-3xl mx-auto">
            Everything you need to know about our online Quran and Tajweed classes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-feature border border-emerald-100 rounded-lg px-6"
              >
                <AccordionTrigger className="heading-section text-lg text-emerald-900 font-semibold text-left hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="body-text text-ink-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 space-y-4">
          <p className="body-text text-lg text-ink-600">
            Still have questions? We're here to help!
          </p>
          <a 
            href="https://wa.me/923349523393?text=I%20want%20to%20book%20a%203%20day%20trial%20session"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-primary text-lg px-8 py-4 rounded-lg font-medium hover:scale-105 transition-transform">
              Ready to Start? Book Free Trial
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;