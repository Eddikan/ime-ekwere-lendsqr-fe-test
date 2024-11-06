import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import { useParams } from "next/navigation"; // Only if you need both `useRouter` and `useParams`
import { UserType } from "@/interfaces/users";

const useCurrentUser = () => {
    const users = useAppSelector((state) => state.user.users);
    const { user } = useParams(); // Assuming 'user' is the dynamic route parameter
    const [currentUser, setCurrentUser] = useState<UserType>();

    useEffect(() => {
        const foundUser = users.find((each) => each.id === user);
        setCurrentUser(foundUser);
    }, []); // Dependencies ensure it reruns if users or user param changes

    return { currentUser };
};

export default useCurrentUser;
