import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { SignUpForm } from '@/components/SignUpForm'

function BookIcon(props) {
    return (
        <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
            <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
        </svg>
    )
}

function GitHubIcon(props) {
    return (
        <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
            <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
        </svg>
    )
}

// function FeedIcon(props) {
//     return (
//         <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
//             <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
//             />
//         </svg>
//     )
// }
//
// function TwitterIcon(props) {
//     return (
//         <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
//             <path d="M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5" />
//         </svg>
//     )
// }

function TwitchIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-twitch"
            viewBox="0 0 16 16"
        >
            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z" />
            <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z" />
        </svg>
    )
}

export function Intro() {
    return (
        <>
            <div>
                <Link href="/">
                    <Logo className="inline-block h-8 w-auto" />
                </Link>
            </div>
            <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
                Mindscan - Synthetic Brain Images: Bridging the Gap in Brain Mapping with Generative
                Models
                <span className="text-sky-300"> for Advancing AI Research in Brain Mapping</span>
            </h1>
            <p className="mt-4 text-sm/6 text-gray-300">
                We demonstrate the feasibility of applying computer vision techniques to brain
                mapping using synthetic data exclusively. While the utilization of synthesized
                training data has been prevalent in various domains, the domain gap between real and
                synthetic data remains a significant challenge, particularly in the context of brain
                images. Previous efforts have attempted to address this gap through data mixing,
                domain adaptation, and domain-adversarial training. However, we present compelling
                evidence that synthesizing data with minimal domain gap enables models trained on
                synthetic data to generalize effectively to real-world in-the-wild brain image
                datasets. In this paper, we outline the methodology of combining a
                procedurally-generated parametric 3D brain model with an extensive library of
                carefully crafted assets to render training images with unparalleled realism and
                diversity. Our machine learning systems are trained on these synthetic brain images,
                enabling us to accomplish brain-related tasks such as precise landmark localization
                and brain region segmentation. We demonstrate that synthetic data can achieve
                comparable accuracy to real data while also enabling novel approaches that would
                otherwise be infeasible due to the challenges associated with manual labeling in
                brain mapping studies.
            </p>
            <SignUpForm />
            <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
                <IconLink href="/paper" icon={BookIcon} className="flex-none">
                    Paper
                </IconLink>
                <IconLink href="/test" icon={BookIcon} className="flex-none">
                    Test
                </IconLink>
                <IconLink
                    href="https://github.com/paulchrisluke/mindscan"
                    icon={GitHubIcon}
                    className="flex-none"
                >
                    GitHub
                </IconLink>
            </div>
        </>
    )
}

export function IntroFooter() {
    return (
        <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
            Brought to you by{' '}
            <IconLink href="https://twitch.tv/paulchrisluke" icon={TwitchIcon} compact large>
                PaulChrisLuke
            </IconLink>
        </p>
    )
}
