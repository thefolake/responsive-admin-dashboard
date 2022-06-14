import { useEffect } from 'react';
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home : NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/ecommerce')
    }, [])
    return (
        <div>Hello</div>
    );
};

export default Home ;