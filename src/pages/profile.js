import React from 'react';

import ProfileHeader from '../components/header';
import ServiceBanner from '../components/banner/serviceBanner';
import HostelMateBanner from '../components/banner/hostelMateBanner';
import JobSupportBanner from '../components/banner/jobSupportBanner';
import OnlineTrainingBanner from '../components/banner/onlineTrainingBanner';
import FooterBanner from '../components/banner/footerBanner';
import ContactUsBanner from '../components/banner/contactUsBanner';

const ProfilePage = () => {
    console.log('--== I am ProfilePage ==--');
    return (
        <div className='w-full h-full bg-white'>
            <ProfileHeader />
            <ServiceBanner />
            <HostelMateBanner />
            <OnlineTrainingBanner />
            <JobSupportBanner />
            <ContactUsBanner />
            <FooterBanner />
        </div>
    )
}

export default ProfilePage;
