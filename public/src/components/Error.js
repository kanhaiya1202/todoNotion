import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div className="errorPage">
            <div className="errorContainer">
                <h1>Oops! Something went wrong</h1>
                <h4>{err?.status} : {err?.statusText}</h4>
                <h4>{err?.error?.message}</h4>
            </div>
        </div>
    )
}

export default Error;