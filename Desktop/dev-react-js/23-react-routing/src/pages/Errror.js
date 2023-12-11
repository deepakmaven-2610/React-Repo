import MainNavigation from "../components/MainNavigation";

function ErrorPage()
{
    return(
        <>
        <MainNavigation/>
        <h1> An error occured</h1>
        <p> Could not find this page</p>
        </>
    );
}

export default ErrorPage;