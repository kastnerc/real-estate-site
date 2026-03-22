import Home from '@/components/Home'
import SplitContactSection from '@/components/SplitContactSection'

export default function Contact() {
    return (
        <main>
            <Home
                title="Contact Us"
                subtitle="Whether you have questions about what we do, investment opportunities, or potential partnerships, GK Immobilier would be happy to speak with you."
                imageSrc="/images/Office picture.jpg"
                imageAlt="Office"
            />

            <SplitContactSection 
            leftTitle=""
            leftParagraph />
        </main>
    )
}
