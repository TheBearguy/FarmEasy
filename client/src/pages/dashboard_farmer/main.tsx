// import React, { useEffect, useState } from "react";

// import { Box, Main } from "@components/common/containers";
// import { Typography } from "@components/common/typography";
// import { Card, CardContent } from "@components/common/card";

// const Dashboard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
//     const [author, setUser] = useState();

//     useEffect(() => {
//         const userString = localStorage.getItem("User");
//         console.log("userstrimg ", userString);

//         if (!userString) {
//             window.location.href = "/login";
//         }

//         let user;
//         if (userString) {
//             user = JSON.parse(userString);
//         }

//         setUser(user);
//     }, []);

//     console.log("Author", author);

//     return (
//         <Main className="flex flex-col relative top-0.5 pt-5 px-4">
//             <Box className="space-y-4">
//                 <Typography variant="h2" className="border-b-0 max-md:text-2xl">
//                     Welcome Farmer 👋
//                 </Typography>

//                 <Box className="max-md:grid-rows-2 lg:grid-cols-2">
//                     {/* Profile Page */}
//                     <Card className="w-[350px]">
//                         <CardContent>
//                             <img
//                                 src={`http://localhost:5001/${author.file?.split("\\")[1]}`}
//                             />
//                             <p>{author.name}</p>
//                         </CardContent>
//                     </Card>
//                 </Box>
//             </Box>
//             {children}
//         </Main>
//     );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { Box, Main } from "@components/common/containers";
import { Typography } from "@components/common/typography";
import { Card, CardContent } from "@components/common/card";

const Dashboard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [author, setAuthor] = useState<any>(null); // Set initial state to null or undefined

    useEffect(() => {
        const userString = localStorage.getItem("User");
        console.log("userString ", userString);

        if (!userString) {
            window.location.href = "/login";
            return; // Exit early if userString is not found
        }

        try {
            const user = JSON.parse(userString);
            setAuthor(user);
        } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
        }
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    console.log("Author", author);

    if (!author) {
        // If author is not set yet, render loading state or return null
        return null; // You can also render a loading spinner or message here
    }

    return (
        <Main className="flex flex-col relative top-0.5 pt-5 px-4">
            <Box className="space-y-4">
                <Typography variant="h2" className="border-b-0 max-md:text-2xl">
                    Welcome Farmer 👋
                </Typography>

                <Box className="max-md:grid-rows-2 lg:grid-cols-2 gap-6">
                    <Card className="w-[350px]">
                        <CardContent>
                            <img
                                src={`http://localhost:5001/${author.file?.split("\\")[1]}`}
                                alt={author.name}
                            />
                        </CardContent>
                    </Card>
                    
                    <Card className="w-[350px]">
                        <CardContent>
                            <img
                                src={`http://localhost:5001/${author.file?.split("\\")[1]}`}
                                alt={author.name}
                            />
                        </CardContent>
                    </Card>
                </Box>
            </Box>
            {children}
        </Main>
    );
};

export default Dashboard;
