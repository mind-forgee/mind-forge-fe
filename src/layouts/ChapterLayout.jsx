import { Outlet } from "react-router-dom";
import ChapterNavbar from "../components/courses/ChapterNavbar";

export default function ChapterLayout() {
    return (
        <main>
            <ChapterNavbar />
            <Outlet />
        </main>
    );
}