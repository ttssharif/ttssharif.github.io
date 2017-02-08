/**
 * Created by pedram on 09/02/17.
 */
import React from "react";

import {Link} from 'react-router'

export const MainNavHeader = () =>
    <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">

            <span className="mdl-layout-title">تحلیل و طراحی سیستم&zwnj;ها</span>

            <div className="mdl-layout-spacer"></div>

            <nav className="mdl-navigation mdl-layout--large-screen-only">

                <Link to={'/'} className="mdl-navigation__link">خانه</Link>
                <Link to={'/out'} className="mdl-navigation__link">بیرون</Link>
            </nav>
        </div>
    </header>
