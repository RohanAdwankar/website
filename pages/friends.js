import {
    faFacebook,
    faInstagram,
    faDiscord,
    faTwitter,
    faGithub,
    faItchIo,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';

import Banner from '../components/Banner';
import Layout from '../components/Layout';
import data from '../data';

function FriendIconLink({ orgName, link }) {
    const iconStr =
    link.platform === 'website' ? `${orgName}'s website` : `${orgName} on ${link.platform}`;
    return (
        <a
        className='icon-link'
        href={link.link}
        target='_blank'
        rel='noreferrer noopener'
        aria-label={iconStr}
        >
            <LinkIcon platform={link.platform} />
        </a>
    );
}

// From `committees.js` - refactor into utility
function LinkIcon({ platform }) {
    // see https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility#web-fonts-semantic
    // for more on accessibility
    switch (platform) {
        case 'itch':
            return <FontAwesomeIcon icon={faItchIo} fixedWidth aria-hidden={true} />;
        case 'discord':
            return <FontAwesomeIcon icon={faDiscord} fixedWidth aria-hidden={true} />;
        case 'facebook':
            return <FontAwesomeIcon icon={faFacebook} fixedWidth aria-hidden={true} />;
        case 'github':
            return <FontAwesomeIcon icon={faGithub} fixedWidth aria-hidden={true} />;
        case 'instagram':
            return <FontAwesomeIcon icon={faInstagram} fixedWidth aria-hidden={true} />;
        case 'twitter':
            return <FontAwesomeIcon icon={faTwitter} fixedWidth aria-hidden={true} />;
        case 'website':
        default:
            return <FontAwesomeIcon icon={faLink} fixedWidth aria-hidden={true} />;
    }
}

/**
 * A single project card that will be displayed under an organization's collaborations
 */
function FriendProjectCard({ project }) {
    return (
        <a
            className='project-card-container'
            href={project.url}
            target='_blank'
            rel='noreferrer noopener'
        >
            <div className='project-card-contents'>
                <div className='project-image-wrapper'>
                    <Image
                        className='project-image'
                        src={project.image}
                        alt={project.name}
                        width={300}
                        height={100}
                    />
                </div>
                <h4>
                    <a href={project.url} target='_blank' rel='noreferrer noopener'>
                        {project.title}
                    </a>
                </h4>
                <p>{project.description}</p>
            </div>
        </a>
    );
}

/**
 * Displays an organization that is a friend of ACM in a split-grid format,
 * with the organization's title, description, image, social media links
 * and past collaborations
 */
function FriendCard({ friend, index }) {
    return (
        <div className='friend-card-container'>
            {/* Organization logo */}
            <div className='grid-tablet-2'>
                <div className={index % 2 === 0 ? ' grid-tablet-2-reverse' : ''}>
                    <a
                        className='block-centered friend-image-wrapper'
                        href={friend.links.find((l) => l.platform === 'website').link}
                        target='_blank'
                        rel='noreferrer noopener'
                        key={friend.name}
                    >
                        <Image src={friend.image} alt={friend.name} width={400} height={200} />
                    </a>
                </div>

                {/* Organization name, description and links */}
                <div className='pr-tablet-2'>
                    <h2>{friend.name}</h2>
                    <p>{friend.description}</p>
                    <div className='friend-links-container'>
                        {friend.links.map((link, index) => (
                            <FriendIconLink org={friend.name} link={link} key={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Organization projects (if any) */}
            {friend.projects.length > 0 && (
                <div>
                    <div className='content-divider' />
                    <h3>Past Collaborations</h3>
                    <div className='projects-container'>
                        {friend.projects.map((project) => (
                            <FriendProjectCard project={project} key={project.title} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

/**
 * Overall friends page
 */
function Friends() {
    const { friends } = data;
    return (
        <Layout>
            <NextSeo
                title='Partner Organizations | ACM at UCLA'
                description="ACM at UCLA couldn't happen without our amazing sponsors, partners, and affiliates that support all of our work. Interested in parterning with us? Send as an email at acm@ucla.edu!"
                openGraph={{
                    images: [
                        {
                            url: 'https://www.uclaacm.com/images/logo.png',
                            width: 1200,
                            height: 1200,
                            alt: 'The ACM at UCLA logo',
                        },
                    ],
                    site_name: 'ACM at UCLA',
                }}
            />

            <Banner decorative />
            <div className='content-section text-center'>
                <h1>Our Friends</h1>
                <p className='subheading'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id suscipit quo
                    voluptatibus. Voluptate quam commodi blanditiis sit vel, et, laudantium
                    obcaecati velit ducimus quaerat iusto consequuntur, tempora distinctio voluptas?
                </p>

                <div className='friends-container'>
                    {friends.map((friend, index) => (
                        <FriendCard key={index} friend={friend} index={index} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Friends;
