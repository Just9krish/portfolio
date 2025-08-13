import Markdown from "react-markdown";
import "./markdown.css";

export default function index({ children }) {
    return (
        <div className="markdown-body">
            <Markdown>{children}</Markdown>
        </div>
    );
}
