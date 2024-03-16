import { Feature, Hero, ShortInfo, Footer } from '@components/core/home';

import { Main } from '@components/common/containers'

const Dashboard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Main className="flex flex-col">
            <Hero />
            <ShortInfo />
            <Feature />
            <Footer />
            {children}
        </Main>
    );
};

export default Dashboard;
