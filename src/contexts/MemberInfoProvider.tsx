import {createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState} from 'react';
import {MemberInfo} from '../types/member';
import useFetch from '../hooks/useFetch';
import useLocalStorage from '../hooks/localStorage/useLocalStorage';

type MemberInfoContextType = {
    memberInfo: MemberInfo | null;
    updateActorName: (arg: string) => void;
}

const MemberInfoContext = createContext<MemberInfoContextType | null>(null);

const MemberInfoProvider = ({children}: PropsWithChildren) => {
    const {getActorInfo} = useLocalStorage();
    const [memberInfo, setMemberInfo] = useState<MemberInfo | null>(null)
    const {result, isLoading} = useFetch<MemberInfo>(() => getActorInfo(), {
        onSuccess: () => {
            console.log(result)

        }
    });
    useEffect(() => {
        console.log(result)
        if (!isLoading) {
            setMemberInfo(result)
        }
    }, [isLoading])

    const updateActorName = (name: string) => {
        console.log(name)
        setMemberInfo(prev => ({...prev, actorName: name}))
    }

    const value = {
        memberInfo,
        updateActorName,
    }

    return <MemberInfoContext.Provider value={value}>{children}</MemberInfoContext.Provider>;
};

export default MemberInfoProvider;

export const useMemberInfo = () => useContext(MemberInfoContext);
