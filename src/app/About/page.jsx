import Hero from '@/components/Hero'
import CardCarousel from '@/components/CardCarousel'
import TeamSection from '@/components/TeamSection'

export default function About() {
    return (
        <main>
            <Hero
                title="About Us"
                subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel vero, reiciendis quo recusand"
                imageSrc="'/images/Conference room.jpg'"
                imageAlt="Office"
            />

            <TeamSection />

            <CardCarousel />
        </main>
    )
}