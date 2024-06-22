"use server"

import { TLoginFormValues } from "@/app/login/page"

export const loginUser = async(data: TLoginFormValues) => {

    const res = await fetch(`${process.env.Backend_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        cache: "no-store"
    })


    const userInfo = await res.json()

    return userInfo
}


