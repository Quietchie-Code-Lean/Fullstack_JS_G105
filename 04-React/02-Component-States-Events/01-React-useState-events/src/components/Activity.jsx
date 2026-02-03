import "./activity.css";

const Activity  = ({activityName, description, children}) => {
    return (
        <>
        <section className="container-act">
            <h1>{activityName}</h1>
            <p>{description}</p>
            <div>{children}</div>
        </section>
        </>
    );
};

export default Activity;