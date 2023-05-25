import React, {Suspense} from "react";



export function withSuspense<T>(Component: React.ComponentType<T>) {
    return (props: any) => {
        return <Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </Suspense>

    }
} 