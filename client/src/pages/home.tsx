import { Feature, Hero, ShortInfo, Footer } from '@components/core/home';

import { Main } from '@components/common/containers'

const Dashboard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <Main className="flex flex-col bg-rt-normal-slate-1200">
            <Hero />
            <ShortInfo />
            <Feature />
            <Footer />
            {children}
        </Main>
    );
};

export default Dashboard;
