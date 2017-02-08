import React from "react";
import {Link} from 'react-router';

export const MainNavDrawer = () => (
    <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">
            تحلیل و طراحی سیستم&zwnj;ها
        </span>
        <nav className="mdl-navigation">
            <Link to={'/'} className="mdl-navigation__link">خانه</Link>
            <Link to={'/out'} className="mdl-navigation__link">لینک اضافی</Link>
        </nav>
    </div>
);