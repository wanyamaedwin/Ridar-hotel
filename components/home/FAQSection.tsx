import SectionHeader from '@/components/hotel/SectionHeader'
import FAQAccordion from '@/components/hotel/FAQAccordion'
import { FAQS } from '@/lib/hotel-data'

export default function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions Answered"
          className="mb-10"
        />
        <FAQAccordion faqs={FAQS} />
      </div>
    </section>
  )
}
