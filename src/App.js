import React from "react";
import { HashRouter, NavLink, Route, Routes, Navigate } from "react-router-dom";
import Tasks from "./features/tasks/index";
import Task from "./features/tasks/TaskPage/index";
import Author from "./features/author/author";
import { StyledNav } from "./styled";

export default () => (
    <HashRouter>
        <StyledNav>
            <ul>
                <li>
                    <NavLink to="/zadania">Zadania</NavLink>
                </li>
                <li>
                    <NavLink to="/author">O autorze</NavLink>
                </li>
            </ul>
        </StyledNav>
        <Routes>
            <Route path="/zadania/:id" element={<Task />} />
            <Route path="/zadania" element={<Tasks />} />
            <Route path="/author" element={<Author />} />
            <Route path="/" element={<Navigate to="/zadania" />} />
        </Routes>
    </HashRouter>
);
