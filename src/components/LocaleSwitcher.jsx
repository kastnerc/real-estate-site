import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'

export default function LocaleSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    function switchLocale(nextLocale) {
        router.replace(pathname, { locale: nextLocale })
    }

    const baseButton =
        'relative cursor-pointer py-2 px-2 uppercase group inline-block'

    const underline =
        'absolute left-0 bottom-1 h-px w-full bg-current scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100'

    return (
        <div className="flex gap-3">
            {locale === 'en' ? (
                <button
                    onClick={() => switchLocale('fr')}
                    className={baseButton}
                >
                    <span>FR</span>
                    <span className={underline} />
                </button>
            ) : (
                <button
                    onClick={() => switchLocale('en')}
                    className={baseButton}
                >
                    <span>EN</span>
                    <span className={underline} />
                </button>
            )}
        </div>
    )
}