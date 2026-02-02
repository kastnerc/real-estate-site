import HeroHome from '@/components/HeroHome'
import SplitSection from '@/components/SplitSection'
import CardSection from '@/components/CardSection'

export default function Home() {
    return (
        <main>
            <HeroHome />

            <SplitSection
                leftTitle="Lorem ipsum dolor sit"
                leftParagraph="Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusamus at illum alias temporibus autem vel quos
                        ducimus impedit nobis molestiae facere pariatur ex
                        quaerat sed beatae laudantium necessitatibus, laboriosam
                        in.Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusamus at illum alias temporibus autem vel quos
                        ducimus impedit nobis molestiae facere pariatur ex
                        quaerat sed beatae laudantium necessitatibus, laboriosam
                        in. Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusamus at illum alias temporibus autem vel quos
                        ducimus impedit nobis molestiae facere pariatur ex
                        quaerat sed beatae laudantium necessitatibus, laboriosam
                        in.Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Accusamus at illum alias temporibus autem vel quos
                        ducimus impedit nobis molestiae facere pariatur ex
                        quaerat sed beatae laudantium necessitatibus, laboriosam
                        in."
                imageSrc="/Triplex.png"
                imageAlt="Lorem ipsum dolor sit"
            />

            <CardSection />
        </main>
    )
}
