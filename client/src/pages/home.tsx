import image from "/assets/wp.jpeg";

import { Hero } from '@components/core/home';

import { Main } from '@components/common/containers'

const Dashboard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Main className="flex flex-col bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Hero />
            {children}
        </Main>
    );
};

export default Dashboard;
