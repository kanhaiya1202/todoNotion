import "../styles/body.css";
import TodoCard from "./TodoCard";
import Todo_orgCard from "./Todo_orgCard";
import NotionCard from "./NotionCard";
import { Link } from "react-router";

const Body = () => {
    return (
        <div className="body">
            <Link to="/user/mytodo"><TodoCard /></Link>
            <Todo_orgCard />
            <NotionCard />
        </div>
    )
}

export default Body;