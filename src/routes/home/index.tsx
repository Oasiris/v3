import { FunctionalComponent, h } from 'preact'
import { Icon } from '@material-ui/core'

import style from './style.scss'

import ExternalLinkSvg from '../../assets/icons/open-in-new.svg'
import CodeSvg from '../../assets/icons/code.svg'
import GithubSvg from '../../assets/icons/github-brands.svg'
import LinkedInSvg from '../../assets/icons/linkedin-brands.svg'

import Button from '../../components/button'

// 2022.01.11
const RESUME_LINK = 'https://drive.google.com/file/d/1gKd7HTkoSfbh3qzLcEMXjLhebkfCAqUV/view'

const EXPERIENCE_ITEMS = [
    {
        isSignificant: true,
        company: 'Skip',
        roleName: 'Software Engineer',
        startDate: 'Jun 2019',
        endDate: 'Aug 2020',
        Description: () => (
            <p class={style.workBlurb}>
                Worked on ride-share functionality for S3, our custom electric fleet scooter, in
                TypeScript.
            </p>
        ),
    },
    {
        isSignificant: true,
        company: 'Map-Collective',
        roleName: 'Full-Stack Developer',
        startDate: 'Oct 2018',
        endDate: 'May 2019',
        Description: () => (
            <p class={style.workBlurb}>
                Built and deployed prototype React site with realistic 3D visuals and user
                authentication.
            </p>
        ),
    },
    {
        isSignificant: false,
        company: 'Wynd',
        roleName: 'Backend Developer Intern',
        startDate: 'Apr 2015',
        endDate: 'Aug 2017',
        Description: () => (
            <p class={style.workBlurb}>
                Aggregated 5,000+ air quality stations for mobile app showing real-time local AQ
                updates. Managed four other interns.
            </p>
        ),
    },
]

const PROJECT_ITEMS = [
    {
        title: 'Concord',
        contextPhrase: 'School Project',
        Description: () => (
            <p class={style.projectBlurb}>
                We designed and implemented <b>Concord</b>, a peer-to-peer video calling space where
                focus matters.
            </p>
        ),
        tags: [
            'JavaScript',
            'Full-Stack',
            'Node.js',
            'React.js',
            'WebSockets',
            'Peer-to-Peer Video',
            'Project Lead',
        ],
        hasLink: true,
        link: 'https://useconcord.app/',
    },
    {
        title: 'Moodmeter',
        contextPhrase: 'School Project',
        Description: () => (
            <p class={style.projectBlurb}>
                We made <b>Moodmeter</b>, a Chrome extension that visualizes the emotional content
                of your browser history.
            </p>
        ),
        tags: [
            'Chrome Extension',
            'DOM JS',
            'JavaScript',
            'Frontend',
            'Data Visualization',
            'Deep Learning',
        ],
        hasLink: true,
        link: 'https://www.youtube.com/watch?v=7ox7wi_RH_w',
    },
]

const Home: FunctionalComponent = () => {
    return (
        <div class={`container ${style.home}`}>
            <section class={`${style.hookSection}`}>
                <div class={`${style.blurb}`}>
                    <h2 class="growHeader">I'm David, a Software Engineer and leisure creative.</h2>
                    <p class="growHeader">
                        I'm most myself when I'm devising, designing, and building things.
                        <br />
                        <span class={style._smaller}>
                            Exploring the spaces between humanity and technology.
                        </span>
                    </p>
                </div>
                <div class={style._divider} />

                {/* <Button>Resume</Button> */}
                <div class={style.resumeButtonWrapper}>
                    <a href={RESUME_LINK} target="_blank" rel="noreferrer">
                        <Button>{'Resume'}</Button>
                    </a>
                </div>
            </section>
            <section class={style.listSection}>
                <div class={style.sectionHeader}>
                    <h3 class="growSlight">Experience</h3>
                </div>
                <div class={style.sectionContent}>
                    <ul class={`${style.contentList} ${style.workList}`}>
                        {EXPERIENCE_ITEMS.map(
                            ({
                                roleName,
                                company,
                                isSignificant,
                                startDate,
                                endDate,
                                Description,
                            }) => (
                                <li class={`${style.workItem}`} key={company}>
                                    <div class="growSlighter">
                                        <div class={style.workDetails}>
                                            <div
                                                class={`${style.workItemHeader} ${
                                                    !isSignificant ? style.secondaryWorkHeader : ''
                                                }`}
                                            >
                                                {roleName}
                                            </div>
                                            <div class={style.workDates}>
                                                <span class={style.workStartDate}>{startDate}</span>
                                                <span class={style.workDateTo}>—</span>
                                                <span class={style.workEndDate}>{endDate}</span>
                                            </div>
                                        </div>
                                        <div class={style.workCompanyName}>{company}</div>
                                        <div class={style.workBlurbWrapper}>
                                            <Description />
                                        </div>
                                    </div>
                                </li>
                            ),
                        )}
                    </ul>
                </div>
            </section>
            <section class={`${style.listSection} ${style.projectListSection}`}>
                <div class={style.sectionHeader}>
                    <h3>Work</h3>
                </div>
                <div class={style.sectionContent}>
                    <ul class={`${style.contentList} ${style.projectList}`}>
                        {PROJECT_ITEMS.map(
                            ({ title, contextPhrase, Description, tags, hasLink, link }) => (
                                <li class={style.projectItem} key={title}>
                                    <div class="growSlighter">
                                        <div class={style.projectBanner}>
                                            {/* If project has link, show link icon. */}
                                            {hasLink ? (
                                                <a
                                                    class={style.footerLink}
                                                    href={link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <div
                                                        class={`${style.projectTitle} ${style.projectTitleWithLink} growSlight clickable`}
                                                    >
                                                        {title}
                                                        <Icon>
                                                            <img
                                                                src={ExternalLinkSvg}
                                                                width={22}
                                                                height={22}
                                                            />
                                                            <span class="linkAltText">
                                                                External link to Concord
                                                            </span>
                                                        </Icon>
                                                    </div>
                                                </a>
                                            ) : (
                                                <div class={style.projectTitle}>{title}</div>
                                            )}
                                            <div class={style.projectContext}>{contextPhrase}</div>
                                        </div>
                                        <div class={style.projectBlurbWrapper}>
                                            <Description />
                                        </div>
                                        <ul class={style.projectTags}>
                                            {tags.map((tagString) => (
                                                <li
                                                    class={`${style.projectTag} grow`}
                                                    key={tagString}
                                                >
                                                    {tagString}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ),
                        )}
                    </ul>
                </div>
            </section>
            <section class={style.footer}>
                <p class={style.footerRow}>David Hong, 2022.</p>
                <p class={style.footerRow}>Made with ❤️ in TypeScript and React.</p>
                <ul class={style.footerMediaList}>
                    <li class={style.footerMedia}>
                        <a
                            class={style.footerLink}
                            href="https://github.com/Oasiris"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon>
                                <img src={GithubSvg} width={30} height={30} />
                                <span class="linkAltText">My GitHub page</span>
                            </Icon>
                        </a>
                    </li>
                    <li class={style.footerMedia}>
                        <a
                            class={style.footerLink}
                            href="https://www.linkedin.com/in/davhong/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon>
                                <img src={LinkedInSvg} width={30} height={30} />
                                <span class="linkAltText">My LinkedIn profile</span>
                            </Icon>
                        </a>
                    </li>
                    <li class={style.footerMedia}>
                        <a
                            class={style.footerLink}
                            href="https://github.com/Oasiris/v3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon>
                                <img src={CodeSvg} width={30} height={30} />
                                <span class="linkAltText">See website source</span>
                            </Icon>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Home
